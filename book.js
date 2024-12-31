// Simulación de una lista de enlaces (puedes reemplazarlo con datos reales)
const books = [
    {
        "id": 1,
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
        "comments": ["carcel"]
    },
    {
        "id": 2,
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
    },
    {
      "id": 3,
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
  },
  {
    "id": 4,
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
},
{
  "id": 5,
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
  "comments": ["me gusto", "fachero"]
},
{
  "id": 6,
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
},
{
  "id": 7,
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
  "comments": ["good"]
},
]

// Obtener el parámetro "id" de la URL
const params = new URLSearchParams(window.location.search);
const bookId = parseInt(params.get("id"));

// Buscar el libro correspondiente
const book = books.find(b => b.id === bookId);

if (book) {
    // Mostrar la información del libro
    document.getElementById("book-title").textContent = book.title;
    document.getElementById("book-description").textContent = book.description;

    const tagList = document.getElementById("book-tags");
    const liEmote = document.createElement("li");
    liEmote.textContent = "🏷️";
    tagList.appendChild(liEmote)
    
    book.tags.forEach(tag => {
        const li = document.createElement("li");
        li.textContent = tag.name;
        tagList.appendChild(li);
    });
} else {
    document.getElementById("book-details").textContent = "Libro no encontrado.";
}
