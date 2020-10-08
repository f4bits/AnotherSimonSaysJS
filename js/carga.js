inicializar();
reparteTarjetas();

function inicializar() {
  document.querySelector("#gameOver").classList.add("control-oculto");
  document.querySelector("#cargarJuego").classList.add("visible");
  document.querySelectorAll(".reiniciar").forEach(function (elemento) {
    elemento.addEventListener("click", reiniciar);
  });
}
