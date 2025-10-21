// Botón de cambio de tema
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.textContent = 
        document.body.classList.contains('dark-mode') 
        ? 'Cambiar Tema' 
        : 'Cambiar Tema';
});

// Envío de formulario con alerta
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;

    alert(`Se han enviado los datos correctamente.\n\nNombre: ${nombre}\nCorreo: ${correo}`);

    form.reset(); // Limpia el formulario
});
