const loginEmail = document.querySelector('#e-mail');
const loginPassword = document.querySelector('#password');
const loginButton = document.querySelector('.btn-submit');
const submitButton = document.querySelector('#submit-btn');
const agree = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function checkLogIn() {
  console.log(typeof loginPassword.value);
  console.log(loginEmail.value);
  if (
    loginEmail.value === 'tryber@teste.com' && loginPassword.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', checkLogIn);

function checkAgreement() {
  if (agree.checked) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
}

agree.addEventListener('click', checkAgreement);

function countDown() {
  const characters = textArea.value.length;
  const myCounter = 500;
  counter.innerHTML = myCounter - characters;
}

textArea.addEventListener('keyup', countDown);
