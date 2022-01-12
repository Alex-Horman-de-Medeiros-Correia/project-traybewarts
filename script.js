const loginEmail = document.querySelector('#e-mail');
const loginPassword = document.querySelector('#password');
const loginButton = document.querySelector('.btn-submit');
const submitButton = document.querySelector('#submit-btn');
const agree = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const form = document.querySelector('#evaluation-form');
const select = document.querySelector('#house');

function checkLogIn() {
  console.log(typeof loginPassword.value) ;
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

const formContent = document.createElement('section');

function createFullName() {
  const name = document.querySelector('#input-name');
  const lastName = document.querySelector('#input-lastname');
  const fullName = document.createElement('p');
  fullName.innerText = `Nome: ${name.value} ${lastName.value}`;
  formContent.appendChild(fullName);
  return true;
}

function createEmail() {
  const email = document.querySelector('#input-email');
  const myEmail = document.createElement('p');
  myEmail.innerText = `Email: ${email.value}`;
  formContent.appendChild(myEmail);
  return true;
}

function createHouse() {
  const selectedHouse = select.options[select.selectedIndex];
  const house = document.createElement('p');
  house.innerText = `Casa: ${selectedHouse.value}`;
  formContent.appendChild(house);
  return true;
}

function createFamily() {
  const selectedFamily = document.querySelector('input[name=family]:checked');
  const family = document.createElement('p');
  family.innerText = `Família: ${selectedFamily.value}`;
  formContent.appendChild(family);
  return true;
}

function createSubjects() {
  const selectedSubjects = document.querySelectorAll('.subject:checked');
  const subjects = [];
  for (let i = 0; i < selectedSubjects.length; i += 1) {
    subjects.push(selectedSubjects[i].value);
  }
  const mySubjects = document.createElement('p');
  mySubjects.innerText = `Matérias: ${subjects.join(', ')}`;
  formContent.appendChild(mySubjects);
  return true;
}

function createRating() {
  const selectedRate = document.querySelector('input[name=rate]:checked');
  const rate = document.createElement('p');
  rate.innerText = `Avaliação: ${selectedRate.value}`;
  formContent.appendChild(rate);
  return true;
}

function createComment() {
  const myComment = document.createElement('p');
  myComment.innerHTML = `Observações: ${textArea.value}`;
  formContent.appendChild(myComment);
  return true;
}

function submit(e) {
  e.preventDefault();
  createFullName();
  createEmail();
  createHouse();
  createFamily();
  createSubjects();
  createRating();
  createComment();
  form.innerHTML = '';
  form.appendChild(formContent);
}

submitButton.addEventListener('click', submit);
