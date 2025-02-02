if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

// Declara las variables en el ámbito global
let filters;
let projectCards;

document.addEventListener('DOMContentLoaded', function () {
  // Asigna los elementos a las variables
  filters = document.querySelectorAll('.filter');
  projectCards = document.querySelectorAll('.project-card');

  filters.forEach(filter => {
    filter.addEventListener('click', function () {
      this.classList.toggle('active'); // Activa o desactiva el filtro
      applyFilters(); // Aplica los filtros cada vez que se hace clic
    });
  });

  // Asigna el evento al botón "Reset Filters"
  document.getElementById('reset-filters').addEventListener('click', function () {
    filters.forEach(filter => filter.classList.remove('active')); // Desactiva todos los filtros
    applyFilters(); // Aplica los filtros (en este caso, mostrará todos los proyectos)
  });

  // Función para aplicar los filtros
  function applyFilters() {
    // Obtiene las etiquetas activas
    const activeTags = Array.from(filters)
      .filter(filter => filter.classList.contains('active'))
      .map(filter => filter.getAttribute('data-tag'));

    projectCards.forEach(card => {
      const cardTags = card.getAttribute('data-tags').split(','); // Obtiene las etiquetas de la tarjeta
      // Verifica si la tarjeta contiene todas las etiquetas activas
      const shouldShow = activeTags.every(tag => cardTags.includes(tag));
      card.style.display = shouldShow ? 'block' : 'none'; // Muestra u oculta la tarjeta
    });
  }
});