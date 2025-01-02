// URL de la API
const apiURL = 'http://localhost:3001/api/book';

// Variables de control
let books = []; // Aquí se almacenan los libros
let currentIndex = 0;
const increment = 5; // Cuántos libros mostrar por clic

// Referencias al DOM
const bookList = document.getElementById("link-list");
const moreButton = document.getElementById("ver-mas");

// Realizar la solicitud GET
async function fetchData(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json(); // Convertir a JSON
  } catch (error) {
    console.error('Error al consultar la API:', error); // Manejar errores
    throw error;
  }
}

// Función para cargar los libros iniciales
async function loadBooks() {
  try {
    if (books.length === 0) {
      // Solo obtener los datos de la API si no se han cargado antes
      books = await fetchData(apiURL);
    }

    // Mostrar un conjunto de libros
    const nextIndex = currentIndex + increment;
    const booksDisplayed = books.slice(currentIndex, nextIndex);

    const fragment = document.createDocumentFragment();
    booksDisplayed.forEach(book => {
      const bookItem = createBookItem(book);
      fragment.appendChild(bookItem);
    });

    bookList.appendChild(fragment);
    currentIndex = nextIndex;

    // Ocultar el botón si no hay más libros
    if (currentIndex >= books.length) {
      moreButton.style.display = "none";
    }
  } catch (error) {
    console.error('Error al cargar los libros:', error);
  }
}

// Función para crear la lista de tags
function createTagList(tags) {
  const subUl = document.createElement("ul");
  subUl.classList.add("tags-list");

  const tagEmoji = document.createElement("li");
  tagEmoji.textContent = "🏷️";
  subUl.appendChild(tagEmoji);

  tags.forEach(tag => {
    const subLi = document.createElement("li");
    subLi.textContent = tag.name;
    subLi.classList.add("tag-item");
    subUl.appendChild(subLi);
  });

  return subUl;
}

// Función para crear la sección de votos y comentarios
function createVotesSection(votesCount, allComments) {
  const divVotes = document.createElement("div");
  divVotes.classList.add("votes");

  const votes = document.createElement("p");
  votes.textContent = "Votos:";
  const amountVotes = document.createElement("p");
  amountVotes.textContent = votesCount;
  const comments = document.createElement("p");
  comments.textContent = "Comentarios:";
  const amountComments = document.createElement("p");
  amountComments.textContent = allComments.length;

  divVotes.appendChild(votes);
  divVotes.appendChild(amountVotes);
  divVotes.appendChild(comments);
  divVotes.appendChild(amountComments);

  return divVotes;
}

// Función para crear un item de libro
function createBookItem(book) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const p = document.createElement("p");

  a.href = `book.html?id=${book.id}`;
  a.textContent = book.title;

  p.textContent = book.shortDescription;
  p.classList.add("short-description");

  const tagList = createTagList(book.tags);
  const votesSection = createVotesSection(book.votesCount, book.comments);

  li.appendChild(a);
  li.appendChild(p);
  li.appendChild(votesSection);
  li.appendChild(tagList);

  return li;
}

document.getElementById('toggle-form-btn').addEventListener('click', function () {
  const form = document.getElementById('book-create-form');
  if (form.style.display === 'none') {
      form.style.display = 'block';
      this.textContent = 'Ocultar'; 
  } else {
      form.style.display = 'none';
      this.textContent = 'Agregar recomendación';
  }
});
document.getElementById("book-create-form").addEventListener("submit", handleCreateBook);
async function handleCreateBook(event){
  event.preventDefault();
  
  // Obtener los datoos del formulario
  const formData = new FormData(event.target);
  
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(apiURL, 
      { method : 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body : JSON.stringify(data)
      })

    if(!response.ok) throw new error("Error en el envio");
    window.location.reload();

  } catch (error) {
    console.log("Error al crear la recomendación");
  }
}
// Cargar los libros inicialmente
loadBooks();

// Evento para cargar más libros al hacer clic
moreButton.addEventListener("click", () => {
  loadBooks();
});
