function reparteTarjetas() {
  var mesa = document.querySelector("#tablero");
  var tarjetasBarajadas = [1, 2, 3, 4];
  var colores = ["red", "green", "yellow", "blue"];
  mesa.innerHTML = "";
  tarjetasBarajadas.forEach(function (elemento) {
    var tarjeta = document.createElement("div");
    tarjeta.innerHTML =
      "<div id=tarjeta" +
      elemento +
      " class='tarjeta' style=background-color:" +
      colores[elemento - 1] +
      " data-valor= " +
      elemento +
      ">" +
      "<div class='tarjeta__contenido'>" +
      elemento +
      "</div>" +
      "</div>";
    mesa.appendChild(tarjeta);
  });
}

function desactivaTarjetas() {
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.removeEventListener("click", descubrir);
  });
}

function activaTarjetas() {
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });
}
