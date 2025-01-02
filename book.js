// Obtener el parámetro "id" de la URL
const params = new URLSearchParams(window.location.search);
const bookId = parseInt(params.get("id"));

// URL de la API
const apiURL = `http://localhost:3001/api/book/${bookId}`;
const voteButton = document.getElementById("vote-button")
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

// Cargar la información del libro
async function loadBookinfo() {
  try {
    const book = await fetchData(apiURL); // Esperar la respuesta de la API

    // Mostrar la información del libro
    document.getElementById("book-title").textContent = book.title;
    document.getElementById("author-title").textContent = book.author;
    document.getElementById("book-description").textContent = book.description;
    document.getElementById("amount-votes").textContent = book.votesCount;
    document.getElementById("amount-comments").textContent = book.comments.length;

    // Crear las etiquetas y comentarios
    createTags(book.tags);
    createComments(book.comments);
  } catch (error) {
    console.error('Error al cargar los libros:', error);
  }
}

// Crear las etiquetas (tags) del libro
function createTags(tags) {
  const tagList = document.getElementById("book-tags");
  
  // Emoji de tags
  const liEmote = document.createElement("li");
  liEmote.textContent = "🏷️";
  tagList.appendChild(liEmote);
  
  // Crear elementos de la lista de etiquetas
  tags.forEach(tag => {
    const li = document.createElement("li");
    li.textContent = tag.name;
    tagList.appendChild(li);
  });
}

// Crear la lista de comentarios
function createComments(comments) {
  const commentsList = document.getElementById("comments-list");

  comments.forEach(comment => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const h3 = document.createElement("h3");

    h3.textContent = comment.user.username; // Usuario que hizo el comentario
    p.textContent = comment.content; // Contenido del comentario

    li.appendChild(h3);
    li.appendChild(p);

    commentsList.appendChild(li);
  });
}
voteButton.onclick = async function onClickVote(){
  try{
    await fetch(apiURL, {method : "PUT"});
  } catch(error) {
    console.log("No se voto", error);
  }
  
}
// Cargar la información al iniciar
loadBookinfo();
