document.getElementById('checkBtn').addEventListener('click', () => {
  const input = document.getElementById('constInput').value.trim();
  const feedback = document.getElementById('feedback');

  // Regla: todo en mayúsculas con _ opcional
  const regex = /^[A-Z][A-Z0-9_]*$/;

  if (regex.test(input)) {
    feedback.textContent = "✅ Correcto: es un nombre válido para una constante.";
    feedback.style.color = "#4ade80"; // verde
  } else {
    feedback.textContent = "❌ Incorrecto: usa solo MAYÚSCULAS y guiones bajos.";
    feedback.style.color = "#f87171"; // rojo
  }
});
