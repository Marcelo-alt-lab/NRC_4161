document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'admin' && password === 'admin') {
            alert('Inicio de sesión exitoso');
            // Set session flag
            sessionStorage.setItem('isLoggedIn', 'true');
            //redirigir a index.html
            window.location.href = 'index.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});
