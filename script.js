// Simulación de una lista de enlaces (puedes reemplazarlo con datos reales)
const enlaces = [
    "https://google.com",
    "https://youtube.com",
    "https://facebook.com",
    "https://twitter.com",
    "https://github.com",
    "https://stackoverflow.com",
    "https://reddit.com",
    "https://linkedin.com",
    "https://instagram.com",
    "https://whatsapp.com",
    "https://openai.com",
    "https://mozilla.org",
  ];
  
  // Variables de control
  let currentIndex = 0;
  const increment = 5; // Cuántos enlaces mostrar por clic
  
  // Referencias al DOM
  const linkList = document.getElementById("link-list");
  const verMasButton = document.getElementById("ver-mas");
  
  // Función para cargar enlaces
  function cargarEnlaces() {
    const nextIndex = currentIndex + increment;
    const enlacesAMostrar = enlaces.slice(currentIndex, nextIndex);
  
    enlacesAMostrar.forEach(enlace => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = enlace;
      a.textContent = enlace;
      a.target = "_blank"; // Abre en nueva pestaña
      li.appendChild(a);
      linkList.appendChild(li);
    });
  
    currentIndex = nextIndex;
  
    // Oculta el botón si no hay más enlaces por cargar
    if (currentIndex >= enlaces.length) {
      verMasButton.style.display = "none";
    }
  }
  
  // Evento para el botón "Ver más"
  verMasButton.addEventListener("click", cargarEnlaces);
  
  // Carga inicial de enlaces
  cargarEnlaces();
  