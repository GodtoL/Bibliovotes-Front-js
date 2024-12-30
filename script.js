// Simulación de una lista de enlaces (puedes reemplazarlo con datos reales)
const books = [
    {
        "id": 34,
        "title": "El pozo de la ascensión",
        "author": "Brandon Sanderson",
        "shortDescription": "La segunda entrega de la aclamada serie Nacidos de la bruma",
        "description": "Durante mil años el Lord Legislador reina con un poder absoluto gracias al terror, a sus poderes y a su inmortalidad. Pero vencer y matar al Lord Legislador fue la parte sencilla. El verdadero desafío será sobrevivir a las consecuencias de su caída.",
        "votesCount": 12,
        "createdAt": "2024-12-30T17:55:27.228Z",
        "updatedAt": "2024-12-30T17:55:27.228Z",
        "tags": [
            {
                "id": 1,
                "name": "Fantasía",
                "BookTag": {
                    "createdAt": "2024-12-30T17:55:27.246Z",
                    "updatedAt": "2024-12-30T17:55:27.246Z",
                    "BookId": 34,
                    "TagId": 1
                }
            },
            {
              "id": 1,
              "name": "Ciencia Ficción",
              "BookTag": {
                  "createdAt": "2024-12-30T17:55:27.246Z",
                  "updatedAt": "2024-12-30T17:55:27.246Z",
                  "BookId": 34,
                  "TagId": 1
              }
          }
        ],
        "comments": []
    },
    {
        "id": 35,
        "title": "El pozo de la ascensión",
        "author": "Brandon Sanderson",
        "shortDescription": "La segunda entrega de la aclamada serie Nacidos de la bruma",
        "description": "Durante mil años el Lord Legislador reina con un poder absoluto gracias al terror, a sus poderes y a su inmortalidad. Pero vencer y matar al Lord Legislador fue la parte sencilla. El verdadero desafío será sobrevivir a las consecuencias de su caída.",
        "votesCount": 12,
        "createdAt": "2024-12-30T18:42:27.681Z",
        "updatedAt": "2024-12-30T18:42:27.681Z",
        "tags": [
            {
                "id": 1,
                "name": "Fantasía",
                "BookTag": {
                    "createdAt": "2024-12-30T18:42:27.742Z",
                    "updatedAt": "2024-12-30T18:42:27.742Z",
                    "BookId": 35,
                    "TagId": 1
                }
            }
        ],
        "comments": []
    }
]


// Variables de control
let currentIndex = 0;
const increment = 5; // Cuántos books mostrar por clic

// Referencias al DOM
const bookList = document.getElementById("link-list");
const moreButton = document.getElementById("ver-mas");

// Función para cargar books
function loadBooks() {
  const nextIndex = currentIndex + increment;
  const booksDisplayed = books.slice(currentIndex, nextIndex);

  // Itera sobre los libros a mostrar
  for (let i = 0; i < booksDisplayed.length; i++) {
    const book = booksDisplayed[i];
    const tags = book.tags;  // Accede correctamente a los tags
    const li = document.createElement("li");
    const a = document.createElement("a");
    const p = document.createElement("p");

    // Define el enlace hacia el libro
    a.href = `book.html?id=${book.id}`;
    a.textContent = book.title;

    // Descripción corta del libro
    p.textContent = book.shortDescription;
    p.classList.add("short-description");

    // Crear un nuevo <ul> dentro de este <li> para los tags
    const subUl = document.createElement("ul");
    subUl.classList.add("tags-list");
    const tagEmoji = document.createElement("li");
    tagEmoji.textContent = "🏷️";
    subUl.appendChild(tagEmoji);
    // Crear elementos <li> dentro de este <ul> para cada tag
    tags.forEach(tag => {
      const subLi = document.createElement("li");
      subLi.textContent = tag.name;
      subLi.classList.add("tag-item")
      subUl.appendChild(subLi);
    });
    // Agregar los subelementos al <ul>
    li.appendChild(a);
    li.appendChild(p);
    li.appendChild(subUl);
    bookList.appendChild(li);
  }

  // Actualizar el índice para la próxima carga
  currentIndex = nextIndex;

  // Ocultar el botón si no hay más books por cargar
  if (currentIndex >= books.length) {
    moreButton.style.display = "none";
  }
}

// Evento para el botón "Ver más"
moreButton.addEventListener("click", loadBooks);

// Carga inicial de books
loadBooks();
