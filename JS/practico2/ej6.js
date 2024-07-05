function valorSeleccionado(valor) {

    let r

    if (valor < 0) {
        r = -1
    } else if (valor >= 0 && valor < 10) {
        r = 0
    } else if (valor >= 10 && valor < 50) {
        r = 1
    } else if (valor >= 50 && valor < 100) {
        r = 2
    } else if (valor >= 100) {
        r = 3
    } else {
        r = 'Valor incorrecto'
    }

    document.getElementById('valor').innerHTML = `${r}`
}

function valorIngresado() {
    let rpta = parseInt(prompt('Ingrese un número:'))

    return rpta
}

let v = valorIngresado()
let resultado = valorSeleccionado(v)