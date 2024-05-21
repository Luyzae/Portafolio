let nombre = document.getElementById("user_name");
let nombreError = document.getElementById("nombreError");

let correo = document.getElementById("user_email");
let correoError = document.getElementById("correoError");

let mensaje = document.getElementById("message");
let mensajeError = document.getElementById("mensajeError");

let form = document.getElementById("myForm");

form.addEventListener("submit", function(evento) {
    evento.preventDefault();
    validarFormulario();
});

function validarFormulario() {
    nombreError.textContent = "";
    correoError.textContent = "";
    mensajeError.textContent = "";

    let valid = true;

    if (nombre.value === null || nombre.value.trim() === "") {
        nombreError.textContent = "Por favor completar el campo nombre";
        valid = false;
    }

    if (correo.value === null || correo.value.trim() === "") {
        correoError.textContent = "Por favor completar el campo correo";
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(correo.value.trim())) {
        correoError.textContent = "Por favor ingrese un correo válido";
        valid = false;
    }

    if (mensaje.value === null || mensaje.value.trim() === "") {
        mensajeError.textContent = "Por favor rellena el campo de mensaje";
        valid = false;
    }

    if (valid) {
        const btn = document.getElementById('button');
        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_2zkrp8r';

        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                btn.value = 'Enviar';
                alert('Mensaje enviado, me contactaré con usted lo antes posible');
                form.reset();
            }, (err) => {
                btn.value = 'Enviar';
                alert(JSON.stringify(err));
            });
    }
}
