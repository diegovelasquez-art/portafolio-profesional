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

});