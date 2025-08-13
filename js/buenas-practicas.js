function evaluar(respuestaUsuario) {
  const resultado = document.getElementById("resultado");

  // Evaluación del fragmento
  const esCorrecto = false; // No sigue buenas prácticas (nombres poco descriptivos)

  if (respuestaUsuario === esCorrecto) {
    resultado.textContent = "✅ Correcto. Los nombres de variables y funciones no son descriptivos, por lo que NO cumple buenas prácticas.";
    resultado.style.color = "#4ade80";
  } else {
    resultado.textContent = "❌ Incorrecto. Observa que las variables y función deberían tener nombres más claros.";
    resultado.style.color = "#f87171";
  }
}
