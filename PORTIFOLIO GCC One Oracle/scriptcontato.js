const form = document.getElementById('contatoForm');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const assunto = document.getElementById('assunto');
const mensagem = document.getElementById('mensagem');
const erroNome = document.getElementById('erroNome');
const erroEmail = document.getElementById('erroEmail');
const erroAssunto = document.getElementById('erroAssunto');
const erroMensagem = document.getElementById('erroMensagem');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let valido = true;

  // Validação do nome
  if (nome.value === '') {
    valido = false;
    erroNome.textContent = 'O campo nome é obrigatório.';
  } else if (nome.value.length > 50) {
    valido = false;
    erroNome.textContent = 'O nome deve ter no máximo 50 caracteres.';
  } else {
    erroNome.textContent = '';
  }

  // Validação do e-mail
  if (email.value === '') {
    valido = false;
    erroEmail.textContent = 'O campo e-mail é obrigatório.';
  } else if (!/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
    valido = false;
    erroEmail.textContent = 'O e-mail está inválido.';
  } else {
    erroEmail.textContent = '';
  }

  // Validação do assunto
  if (assunto.value === '') {
    valido = false;
    erroAssunto.textContent = 'O campo assunto é obrigatório.';
  } else if (assunto.value.length > 50) {
    valido = false;
    erroAssunto.textContent = 'O assunto deve ter no máximo 50 caracteres.';
  } else {
    erroAssunto.textContent = '';
  }

  // Validação da mensagem
  if (mensagem.value === '') {
    valido = false;
    erroMensagem.textContent = 'O campo mensagem é obrigatório.';
  } else if (mensagem.value.length > 300) {
    valido = false;
    erroMensagem.textContent = 'A mensagem deve ter no máximo 300 caracteres.';
  } else {
    erroMensagem.textContent = '';
  }

  // Limpar os campos se o formulário for válido
  if (valido) {
    nome.value = '';
    email.value = '';
    assunto.value = '';
    mensagem.value = '';
  }
});
