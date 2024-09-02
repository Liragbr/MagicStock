// script.js
const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
        errorMessage.textContent = 'Preencha todos os campos!';
        return;
    }

    // Aqui você pode adicionar a lógica para verificar o login
    // Por exemplo, você pode fazer uma requisição AJAX para um servidor
    // ou verificar se o usuário e senha estão corretos
    console.log(`Usuário: ${username}, Senha: ${password}`);
});