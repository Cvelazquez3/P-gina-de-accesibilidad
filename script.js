"use strict";
const form = document.querySelector("#interest-form");
const status = document.querySelector("#form-status");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const name = form.elements.name.value.trim();
  if (!name) {
    form.elements.name.setCustomValidity("Escribe tu nombre; no uses solo espacios.");
    form.elements.name.reportValidity();
    return;
  }
  status.textContent = `¡Gracias, ${name}! Completaste el formulario de práctica. Tus datos no se enviaron ni se guardaron.`;
  form.reset();
});
form.elements.name.addEventListener("input", () => form.elements.name.setCustomValidity(""));
