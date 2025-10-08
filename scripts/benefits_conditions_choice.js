const condicionesRadio = document.getElementById('condiciones');
const beneficiosRadio = document.getElementById('beneficios');
const conditionsList = document.querySelector('.conditions-choiced');
const benefitsList = document.querySelector('.benefits-choiced');

function updateVisibility() {
  if (condicionesRadio.checked) {
    conditionsList.style.display = 'flex';
    benefitsList.style.display = 'none';
  } else if (beneficiosRadio.checked) {
    conditionsList.style.display = 'none';
    benefitsList.style.display = 'flex';
  }
}

condicionesRadio.addEventListener('change', updateVisibility);
beneficiosRadio.addEventListener('change', updateVisibility);

// Inicializamos visibilidad
updateVisibility();