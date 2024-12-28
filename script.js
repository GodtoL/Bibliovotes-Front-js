// script.js

// Datos de los libros (puedes ampliarlos con más libros)
const libros = [
    { title: "El Gran Gatsby", description: "Un clásico de la literatura estadounidense que explora los temas del amor, el deseo y el fracaso, ambientado en la década de 1920.", tags: ["Clásico", "Literatura Americana", "Drama"] },
    { title: "Cien Años de Soledad", description: "Una novela de Gabriel García Márquez que combina lo real y lo fantástico en un contexto familiar lleno de magia.", tags: ["Realismo Mágico", "Literatura Latinoamericana", "Ficción"] },
    { title: "1984", description: "Una distopía escrita por George Orwell sobre un régimen totalitario que controla la vida de todos sus ciudadanos.", tags: ["Futurista", "Distopía", "Política"] },
    { title: "Orgullo y Prejuicio", description: "Una novela de Jane Austen sobre las relaciones de la clase alta en la Inglaterra del siglo XIX.", tags: ["Romántico", "Clásico", "Feminismo"] },
    { title: "Matar a un Ruiseñor", description: "Una poderosa novela sobre el racismo y la injusticia en los Estados Unidos, escrita por Harper Lee.", tags: ["Clásico", "Racismo", "Drama"] },
    { title: "El Hobbit", description: "La historia de Bilbo Bolsón, un hobbit que se embarca en una gran aventura, escrita por J.R.R. Tolkien.", tags: ["Fantasía", "Aventura", "Clásico"] },
    // Agrega más libros según sea necesario
  ];
  
  // Variables de control
  let librosMostrados = 0;
  const cantidadPorCarga = 3; // Cantidad de libros que se muestran con cada clic en "Ver más"
  
  // Función para cargar y mostrar los libros
  function cargarLibros() {
    const bookList = document.getElementById('book-list');
    
    // Mostrar un máximo de 'cantidadPorCarga' libros por clic
    const librosParaMostrar = libros.slice(librosMostrados, librosMostrados + cantidadPorCarga);
    librosParaMostrar.forEach(libro => {
      const libroItem = document.createElement('div');
      libroItem.classList.add('book-item');
      
      libroItem.innerHTML = `
        <h2 class="book-title">${libro.title}</h2>
        <p class="book-description">${libro.description}</p>
        <div class="book-tags">
          ${libro.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      `;
      
      bookList.appendChild(libroItem);
    });
  
    // Actualizamos el contador de libros mostrados
    librosMostrados += cantidadPorCarga;
    
    // Si no hay más libros para mostrar, ocultamos el botón
    if (librosMostrados >= libros.length) {
      document.getElementById('ver-mas').style.display = 'none';
    }
  }
  
  // Evento del botón "Ver más"
  document.getElementById('ver-mas').addEventListener('click', cargarLibros);
  
  // Cargar los primeros libros al inicio
  cargarLibros();
  