const loginEmail = document.querySelector('#e-mail');
const loginPassword = document.querySelector('#password');
const submitButton = document.querySelector('.btn-submit');

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

submitButton.addEventListener('click', checkLogIn);
