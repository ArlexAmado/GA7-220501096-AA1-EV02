function evaluarDoc(respuestaUsuario) {
  const resultado = document.getElementById("resultado");

  // Este comentario es innecesario porque el nombre de la función es claro
  const esCorrecto = false; 

  if (respuestaUsuario === esCorrecto) {
    resultado.textContent = "✅ Correcto. El comentario es redundante porque el nombre de la función ya explica lo que hace.";
    resultado.style.color = "#4ade80";
  } else {
    resultado.textContent = "❌ Incorrecto. Un buen comentario aporta información que el código por sí solo no muestra.";
    resultado.style.color = "#f87171";
  }
}
