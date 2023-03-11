let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};

let message = document.querySelector('.subscription-message');
let form = document.querySelector('.subscription');
let Uname = document.getElementById("first-name");
let address = document.getElementById("email");

form.onsubmit = function(evt) {
  evt.preventDefault();
  message.textContent = "Dziękujemy, " + Uname.value + "! Już nie długo odpiszemy Ciebie na podany adres mailowy: "+ email.value;
};


/* INPUT---------------- */

if (input.checkValidity()) {
  input.classList.add('text-field__input_valid');
  input.nextElementSibling.textContent = 'Super!';
} else {
  input.classList.add('text-field__input_invalid');
  input.nextElementSibling.textContent = input.validationMessage;
} 


const checkValidity = (input) => {
  input.classList.remove('text-field__input_valid');
  input.classList.remove('text-field__input_invalid');
  input.nextElementSibling.textContent = '';
  if (input.checkValidity()) {
    input.classList.add('text-field__input_valid');
    input.nextElementSibling.textContent = 'Отлично!';
  } else {
    input.classList.add('text-field__input_invalid');
    input.nextElementSibling.textContent = input.validationMessage;
  }
}

const checkValidityAll = () => {
  const inputs = form.querySelectorAll('input');
  inputs.forEach((input) => {
    checkValidity(input);
  });
}

const onCheckValidity = (e) => {
  const target = e.target;
  if (!target.classList.contains('text-field__input')) {
    return;
  }
  checkValidity(target);
}

form.addEventListener('change', onCheckValidity);
form.addEventListener('keydown', onCheckValidity);
form.addEventListener('keyup', onCheckValidity);
checkValidityAll();


form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkValidityAll();
});


