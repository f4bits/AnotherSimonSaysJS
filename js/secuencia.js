function generarSecuencia() {
  return Array.from(
    {
      length: 1,
    },
    () => Math.floor(Math.random() * 4) + 1
  );
}

function comprobarMovimiento(valor) {
  if (secuencia[movimientoActual] == valor) {
    movimientoActual++;
    puntos += movimientoActual + nivel;
    if (secuencia.length === movimientoActual) {
      continuar();
    }
  } else {
    document.querySelector("#gameOver").classList.add("visible");
  }
}

function reiniciar() {
  puntos = 0;
  nivel = 1;
  movimientoActual = 0;
  secuencia = generarSecuencia();
  ocultaBotonera();
  reproducirSecuencia(secuencia);
}

function obtenerValorSecuencia(ultimoValor) {
  var x = ultimoValor;
  while (x === ultimoValor) {
    x = Math.floor(Math.random() * 4) + 1;
  }
  return x;
}

function reproducirSecuencia(secuencia) {
  document.getElementById("areaTexto").innerHTML = "Observa la secuencia";
  actualizaPanel();
  desactivaTarjetas();
  secuencia.forEach(function (elemento, i) {
    setTimeout(() => {
      if (i > 0) {
        const tarjetaAnterior = document.getElementById(
          "tarjeta" + secuencia[i - 1]
        );
        tarjetaAnterior.classList.remove("descubierta");
      }
      setTimeout(() => {
        const tarjeta = document.getElementById("tarjeta" + elemento);
        tarjeta.classList.add("descubierta");
      }, 300);
    }, i * 1000);
  });
  setTimeout(() => {
    activarTurno();
    activaTarjetas();
  }, secuencia.length * 1000);
}

function continuar() {
  movimientoActual = 0;
  nivel++;
  secuencia.push(obtenerValorSecuencia(secuencia[secuencia.length - 1]));
  setTimeout(() => {
    reproducirSecuencia(secuencia);
  }, 500);
}
