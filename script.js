document.getElementById("form-seguimiento").addEventListener("submit", function(e) {
  e.preventDefault();
  const pedido = document.getElementById("pedido").value.trim();
  const resultado = document.getElementById("resultado-seguimiento");

  if (pedido === "1234") {
    resultado.textContent = "Tu pedido está en camino y llegará pronto.";
  } else {
    resultado.textContent = "No se encontró ningún pedido con ese número.";
  }
});