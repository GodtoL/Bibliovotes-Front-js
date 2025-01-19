// URL de la API
const apiURL = 'https://bibliovotes-production.up.railway.app/api/book';
const apiTagURL = 'https://bibliovotes-production.up.railway.app/api/tag';

// Variables de control
let books = []; 
let currentIndex = 0;
const increment = 5;
let tagsSelectedFilter = [];

// Referencias al DOM
const bookList = document.getElementById("link-list");
const moreButton = document.getElementById("ver-mas");

// Realizar la solicitud GET
async function fetchData(apiURL) {
  try {
    console.log(`Consultando la API en: ${apiURL}`);
    const response = await fetch(apiURL);
    console.log(`Estado de la respuesta: ${response.status}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error al consultar la API:', error);
    throw error;
  }
}


// Función para cargar los libros iniciales
async function loadBooks(tags = []) {
  try {
    // Cargar libros de la API si aún no se ha hecho
    if (books.length === 0) {
      books = await fetchData(apiURL);
    }

    // Filtrar libros si hay tags seleccionados
    let filteredBooks = [...books]; // Crea una copia de la lista original
    if (tags.length > 0) {
      filteredBooks = books.filter(book =>
        book.tags.some(tag => tags.includes(tag.id))
      );
    }

    // Reiniciar índice y contenedor
    currentIndex = 0;
    bookList.innerHTML = ""; // Vaciar el contenido actual

    // Mostrar libros en incrementos
    const nextIndex = currentIndex + increment;
    const booksDisplayed = filteredBooks.slice(currentIndex, nextIndex);

    const fragment = document.createDocumentFragment();
    booksDisplayed.forEach(book => {
      const bookItem = createBookItem(book);
      fragment.appendChild(bookItem);
    });

    bookList.appendChild(fragment);
    currentIndex = nextIndex;

    // Restablecer el botón "Ver más"
    if (currentIndex >= filteredBooks.length) {
      moreButton.style.display = "none";
    } else {
      moreButton.style.display = "block";
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
// Referencia al contenedor de tags
const tagsFilter = document.getElementById("tags-filter");

// Función para cargar y mostrar los tags
async function loadTags() {
  try {
    // Obtener los datos de la API
    const tags = await fetchData(apiTagURL);

    // Crear fragmento para mejorar el rendimiento
    const fragment = document.createDocumentFragment();

    tags.forEach(tag => {
      const tagItem = document.createElement("li");
      const inputCheck = document.createElement("input");
      inputCheck.type = "checkbox";
      inputCheck.id = tag.id;
      inputCheck.value = tag.name;
    
      // Agregar el input al elemento de lista
      tagItem.appendChild(inputCheck);
    
      // Agregar el texto después del input
      const textNode = document.createTextNode(` ${tag.name}`);
      tagItem.appendChild(textNode);
    
      tagItem.classList.add("tag-filter-item");

      inputCheck.addEventListener("change", () => {
        if (inputCheck.checked) {
          // Agrega el tag ID solo si no existe en la lista
          if (!tagsSelectedFilter.includes(tag.id)) {
            tagsSelectedFilter.push(tag.id);
          }
          loadBooks(tagsSelectedFilter);
          console.log(`Etiqueta seleccionada: ${tag.name}, la lista de tags es: ${tagsSelectedFilter}`);
        } else {
          // Filtra correctamente el tag deseleccionado
          tagsSelectedFilter = tagsSelectedFilter.filter(selectedTag => selectedTag !== tag.id);
          loadBooks(tagsSelectedFilter);
          console.log(`Etiqueta deseleccionada: ${tag.name}, la lista de tags es: ${tagsSelectedFilter}`);
        }
    });
    
      fragment.appendChild(tagItem);
    });


    // Agregar las etiquetas al contenedor
    tagsFilter.appendChild(fragment);
  } catch (error) {
    console.error('Error al cargar los tags:', error);
  }
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
async function handleCreateBook(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const tagId = formData.get("tags");

    // Validar que el usuario haya seleccionado un tag válido
    if (!tagId) {
        alert("Por favor, selecciona un tag.");
        return;
    }

    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error("Error en el envío");
        window.location.reload();
    } catch (error) {
        console.error("Error al crear el libro:", error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
  const select = document.getElementById('tags-select');

  try {
      const response = await fetch('https://bibliovotes-production.up.railway.app/api/tag');
      if (!response.ok) throw new Error(`Error en la solicitud: ${response.statusText}`);

      const tags = await response.json();

      // Agregar dinámicamente las opciones de tags
      tags.forEach(tag => {
          const option = document.createElement('option');
          option.value = tag.id; // ID del tag
          option.textContent = tag.name; // Nombre del tag
          select.appendChild(option);
      });
  } catch (error) {
      console.error('Error al cargar los tags:', error);
  }
});



// Cargar los libros inicialmente
loadBooks();
loadTags();

// Evento para cargar más libros al hacer clic
moreButton.addEventListener("click", () => {
  loadBooks();
});
