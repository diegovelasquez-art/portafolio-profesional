document.addEventListener('DOMContentLoaded', function () {

  // 1. CAMBIAR TEMA (MODO OSCURO / CLARO)
  const botonTema = document.getElementById('boton-tema');

  // Ajusta icono inicial
  if (document.body.classList.contains('modo-oscuro')) {
    botonTema.textContent = '☀️';
  } else {
    botonTema.textContent = '🌙';
  }

  botonTema.addEventListener('click', function () {
    document.body.classList.toggle('modo-oscuro');

    if (document.body.classList.contains('modo-oscuro')) {
      botonTema.textContent = '☀️';
    } else {
      botonTema.textContent = '🌙';
    }
  });

  // 2. MENÚ MÓVIL (DESPLEGAR Y OCULTAR)
  const botonMenu = document.getElementById('boton-menu');
  const menuNavegacion = document.getElementById('menu-navegacion');

  if (botonMenu && menuNavegacion) {
    botonMenu.addEventListener('click', function () {
      menuNavegacion.classList.toggle('activo');
    });

    // Ocultar menú cuando se hace clic en cualquier enlace
    const enlacesNav = document.querySelectorAll('.enlace-nav');
    enlacesNav.forEach(function (enlace) {
      enlace.addEventListener('click', function () {
        menuNavegacion.classList.remove('activo');
      });
    });
  }

  // 3. INTERACTIVIDAD EN EL FORMULARIO DE CONTACTO
  const formularioContacto = document.getElementById('formulario-contacto');
  const mensajeRespuesta = document.getElementById('mensaje-respuesta');

  if (formularioContacto) {
    formularioContacto.addEventListener('submit', function (evento) {
      evento.preventDefault();

      mensajeRespuesta.textContent = '🚀 ¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.';

      formularioContacto.reset();

      setTimeout(function () {
        mensajeRespuesta.textContent = '';
      }, 5000);
    });
  }

  // 4. LIGHTBOX (AMPLIACIÓN DE IMÁGENES EN PANTALLA COMPLETA)
  const modal = document.getElementById('modal-imagen');
  const imagenModal = document.getElementById('imagen-modal');
  const captionModal = document.getElementById('caption-modal');
  const cerrarModal = document.getElementById('cerrar-modal');
  const imagenesProyectos = document.querySelectorAll('.imagen-proyecto');

  function abrirModal(imagen) {
    if (!modal || !imagenModal || !captionModal) return;
    modal.style.display = 'flex';
    setTimeout(function () {
      modal.classList.add('activo');
    }, 10);
    imagenModal.src = imagen.src;
    imagenModal.alt = imagen.alt;
    captionModal.textContent = imagen.alt;
    modal.setAttribute('aria-hidden', 'false');
  }

  function ocultarModal() {
    if (!modal) return;
    modal.classList.remove('activo');
    setTimeout(function () {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }, 300);
  }

  imagenesProyectos.forEach(function (imagen) {
    imagen.addEventListener('click', function () {
      abrirModal(imagen);
    });

    imagen.addEventListener('keydown', function (evento) {
      if (evento.key === 'Enter' || evento.key === ' ') {
        evento.preventDefault();
        abrirModal(imagen);
      }
    });
  });

  if (cerrarModal) {
    cerrarModal.addEventListener('click', ocultarModal);
  }

  if (modal) {
    modal.addEventListener('click', function (evento) {
      if (evento.target === modal) {
        ocultarModal();
      }
    });
  }

  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && modal && modal.classList.contains('activo')) {
      ocultarModal();
    }
  });

});