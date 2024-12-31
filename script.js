// Simulación de una lista de enlaces (puedes reemplazarlo con datos reales)
const books = [
  
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
        "comments": [
            {
                "id": 11,
                "content": "purete",
                "user": {
                    "id": 3,
                    "username": "Ara"
                }
            },
            {
                "id": 10,
                "content": "purete",
                "user": {
                    "id": 1,
                    "username": "GodtoL"
                }
            },
            {
                "id": 9,
                "content": "purete",
                "user": {
                    "id": 2,
                    "username": "Tj"
                }
            }
        ]
    }

]


// Variables de control
let currentIndex = 0;
const increment = 5; // Cuántos books mostrar por clic

// Referencias al DOM
const bookList = document.getElementById("link-list");
const moreButton = document.getElementById("ver-mas");

function loadBooks() {
  const nextIndex = currentIndex + increment;
  const booksDisplayed = books.slice(currentIndex, nextIndex);

  const fragment = document.createDocumentFragment();

  booksDisplayed.forEach(book => {
    const bookItem = createBookItem(book);
    fragment.appendChild(bookItem);
  });

  bookList.appendChild(fragment);
  currentIndex = nextIndex;

  if (currentIndex >= books.length) {
    moreButton.style.display = "none";
  }
}

// Función para cargar books
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

function createVotesSection(votesCount, allComments) {
  const divVotes = document.createElement("div");
  divVotes.classList.add("votes");

  const votes = document.createElement("p");
  votes.textContent = "Votos:";
  const amountVotes = document.createElement("p");
  amountVotes.textContent = votesCount;
  const comments = document.createElement("p");
  comments.textContent = "Comentarios";
  const amountComments = document.createElement("p");
  amountComments.textContent = allComments.length;

  divVotes.appendChild(votes);
  divVotes.appendChild(amountVotes);
  divVotes.appendChild(comments);
  divVotes.appendChild(amountComments);
  

  return divVotes;
}

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
loadBooks();
moreButton.addEventListener("click", () => {
  loadBooks(); 
  
});
