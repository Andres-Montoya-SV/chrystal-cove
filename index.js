document.addEventListener("DOMContentLoaded", function () {
    // Botón "Continuar"
    document.getElementById("yesBtn").addEventListener("click", function () {
      document.getElementById("splash").classList.add("hidden");
      document.getElementById("content").classList.remove("hidden");
    });
  
    // Botón "Empezar"
    document.getElementById("start").addEventListener("click", function () {
      document.getElementById("steps").classList.remove("hidden");
      this.classList.add("hidden");
    });
  });
  