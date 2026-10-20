document.addEventListener("DOMContentLoaded", () => {
  const enlacesInternos = document.querySelectorAll('a[href^="#"]');

  enlacesInternos.forEach(enlace => {
    enlace.addEventListener("click", function (evento) {
      const destinoId = this.getAttribute("href");
      if (destinoId === "#") return;
      const seccionDestino = document.querySelector(destinoId);
      if (seccionDestino) {
        evento.preventDefault(); 
        seccionDestino.scrollIntoView({
          behavior: "smooth", 
          block: "start"     
        });
      }
    });
  });
});