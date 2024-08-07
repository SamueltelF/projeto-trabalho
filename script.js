document.getElementById('contato').addEventListener('submit', function(event) {
 event.preventDefault()
document.getElementById('nome-error').textContent = ''
document.getElementById('email-error').textContent = ''
document.getElementById('mensagem-error').textContent = ''
document.getElementById('sucesso').textContent = ''
var nome = document.getElementById('nome').value.trim()
var email = document.getElementById('email').value.trim()
var msg = document.getElementById('msg').value.trim()

var erro = false
if (nome === '') {
document.getElementById('nome-error').textContent = 'O nome e obrigatorio'
erro = true
}
if (email === '') {
  document.getElementById('email-error').textContent = 'O email e obrigatorio'
  erro = true
} else if (!valido(email)) {
  document.getElementById('email-error').textContent = 'O email não e valido'
  erro = false
}
if (msg === '') {
  document.getElementById('mensagem-error').textContent = 'A mensagem e obrigatória'
  erro = true
}
if (!erro) {
  document.getElementById('sucesso').textContent = 'Mensagem enviada com sucesso'
  document.getElementById('contato').reset()
}
function validateEmail(email) {
            var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return re.test(email);
}
})