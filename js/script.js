if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

// Declara las variables en el ámbito global
let filters;
let projectCards;

document.addEventListener('DOMContentLoaded', function() {
  // Asigna los elementos a las variables
  filters = document.querySelectorAll('.filter');
  projectCards = document.querySelectorAll('.project-card');

  filters.forEach(filter => {
      filter.addEventListener('click', function() {
          const tag = this.getAttribute('data-tag');
          this.classList.toggle('active');

          projectCards.forEach(card => {
              const tags = card.getAttribute('data-tags').split(',');
              if (this.classList.contains('active')) {
                  if (tags.includes(tag)) {
                      card.style.display = 'block';
                  } else {
                      card.style.display = 'none';
                  }
              } else {
                  card.style.display = 'block';
              }
          });
      });
  });

  // Asigna el evento al botón "Reset Filters"
  document.getElementById('reset-filters').addEventListener('click', function() {
      filters.forEach(filter => filter.classList.remove('active'));
      projectCards.forEach(card => card.style.display = 'block');
  });
});