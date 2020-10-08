function activarTurno() {
  document.getElementById("areaTexto").innerHTML = "Tu turno";
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.classList.remove("descubierta");
  });
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });
}

function actualizaPanel() {
  document.getElementById("puntos").innerHTML = Math.round(puntos);
  document.getElementById("ronda").innerHTML = nivel;
}

function ocultaBotonera() {
  document.querySelector("#cargarJuego").classList.add("control-oculto");
  document.querySelector("#gameOver").classList.remove("visible");
}

function descubrir(event) {
  this.classList.add("descubierta");
  comprobarMovimiento(event.srcElement.innerText);
  setTimeout(() => {
    this.classList.remove("descubierta");
  }, 400);
}
