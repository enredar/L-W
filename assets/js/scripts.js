
// Cierre automático del menú de navbar
document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    var navCollapse = document.querySelector(".navbar-collapse");
  
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (navCollapse.classList.contains("show")) {
          navCollapse.classList.remove("show");
          document.querySelector(".navbar-toggler").classList.add("collapsed");
          document.querySelector(".navbar-toggler").setAttribute("aria-expanded", "false");
        }
      });
    });
  });


// Validación del formulario de contacto usando JavaScript
(function () {
    'use strict';
    window.addEventListener('load', function () {
      const form = document.getElementById('contactForm');
      form.addEventListener('submit', function (event) {
        // Verificar si el formulario es válido
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    }, false);
  })();
  
  // Puedes agregar funciones adicionales, como animaciones al hacer scroll o interactividad extra si lo requieres.
  
