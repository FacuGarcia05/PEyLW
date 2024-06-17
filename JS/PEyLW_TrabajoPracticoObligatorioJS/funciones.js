function validar() {
    //Inicializacion de variables.
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');
    var obrasSociales = document.getElementById('obras_sociales');
    var dia = document.getElementById('dia');
    var mes = document.getElementById('mes');
    var anio = document.getElementById('anio');
    var observaciones = document.getElementById('observaciones');
    var errores = false;
    Estilos([dia, mes, anio, email, nombre, apellido, obrasSociales]);


    //Funciones

    //Funcion que convierte un valor a Entero y luego verifica que sea positivo.
    function esNumeroPositivo(valor) {
        var numero = parseInt(valor, 10);
        return !isNaN(numero) && numero > 0;
    }

    //Funcion que dada a una fecha recibida se la convierto en 'Date' y luego se lo compara con el año para verificar que la fecha exista.
    function fechaValida(dia, mes, anio) {
        var fecha = new Date(anio, mes - 1, dia);
        return fecha.getFullYear() == anio && fecha.getMonth() == mes - 1 && fecha.getDate() == dia;
    }

    //Funcion que valida que la estructura del email sea correcta (contenga @ y . al final).
    function emailValido(email) {
        var mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return mail.test(email);
    }

    //Funcion que cambia los estilos si los campos son incorrectos.
    function setError(elemento) {
        elemento.style.borderColor = 'red';
        elemento.style.backgroundColor = '#ffcccc';
    }

    //Funcion que devuelve los estilos una vez que se encuentren correctos.
    function Estilos(elementos) {
        elementos.forEach(function (elemento) {
            elemento.style.borderColor = '';
            elemento.style.backgroundColor = '';
        });
    }

    //Verificacion de campos

    //Verifica que los campos no esten vacios
    if (nombre.value.trim() === '') {
        setError(nombre);
        errores = true;
    }

    if (apellido.value.trim() === '') {
        setError(apellido);
        errores = true;
    }

    if (obrasSociales.value.trim() === '') {
        setError(obrasSociales);
        errores = true;
    }

    //Verifica con la funcion esNumeroPositivo para detectar que sea un numero y que sea positivo.
    if (!esNumeroPositivo(dia.value)) {
        setError(dia);
        errores = true;
    }
    if (!esNumeroPositivo(mes.value)) {
        setError(mes);
        errores = true;
    }
    if (!esNumeroPositivo(anio.value)) {
        setError(anio);
        errores = true;
    }

    //Verifica que la fecha sea valida utilizando la funcion fechaValida.
    if (!fechaValida(dia.value, mes.value, anio.value)) {
        setError(dia);
        setError(mes);
        setError(anio);
        errores = true;
    }

    //Verifica que el mail sea valido utilizando la funcion emailValido.
    if (!emailValido(email.value)) {
        setError(email);
        errores = true;
    }

    //Verifica que no haya ningun error, si se encuentra un error, el formulario no se envia.
    if (errores) {
        return false;
    }

    //Alert que se utiliza para indicar que los datos son correctos.
    alert("Todos los datos son correctos.");
    return true;
}
