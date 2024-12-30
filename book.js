// Simulación de libros
const books = [
    {
        id: 34,
        title: "Libro 1",
        shortDescription: "Descripción breve del libro 1",
        description: "Descripción completa del libro 1",
        tags: ["Aventura", "Fantasía"]
    },
    {
        id: 2,
        title: "Libro 2",
        shortDescription: "Descripción breve del libro 2",
        description: "Descripción completa del libro 2",
        tags: ["Historia", "Ciencia"]
    }
];

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
    book.tags.forEach(tag => {
        const li = document.createElement("li");
        li.textContent = tag;
        tagList.appendChild(li);
    });
} else {
    document.getElementById("book-details").textContent = "Libro no encontrado.";
}
