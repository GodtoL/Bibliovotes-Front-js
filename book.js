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
                    "content": "personalmente me gusto mucho porque siempre me gustaron los libros de fantasía",
                    "user": {
                        "id": 3,
                        "username": "kid"
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
                    "content": "siento que empezó muy bien y iba mejorando a medida que trascurria la historia, espero con ansias leer la segunda parte",
                    "user": {
                        "id": 2,
                        "username": "Tj"
                    }
                }
            ]
        }
    
]

// Obtener el parámetro "id" de la URL
const params = new URLSearchParams(window.location.search);
const bookId = parseInt(params.get("id"));

// Buscar el libro correspondiente
const book = books.find(b => b.id === bookId);
function loadBookinfo(){
    // Mostrar la información del libro
    document.getElementById("book-title").textContent = book.title;
    document.getElementById("author-title").textContent = book.author;
    document.getElementById("book-description").textContent = book.description;
    createTags();
    createComments();
}

function createTags(){
    const tagList = document.getElementById("book-tags");
    const liEmote = document.createElement("li");
    liEmote.textContent = "🏷️";
    tagList.appendChild(liEmote)
    
    book.tags.forEach(tag => {
        const li = document.createElement("li");
        li.textContent = tag.name;
        tagList.appendChild(li);
    }) 
}

function createComments(){
    const commentsList = document.getElementById("comments-list");
    book.comments.forEach(comment =>{
        const li = document.createElement("li");
        const p = document.createElement("p");
        const h3 = document.createElement("h3");

        p.textContent = comment.content;
        h3.textContent = comment.user.username;
        
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(p);
        
        commentsList.appendChild(li);     
    }
    )
}
loadBookinfo();