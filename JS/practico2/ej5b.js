function suma(x, y) {
    return x + y
}

function resta(x, y) {
    return x - y
}

function multiplicacion(x, y) {
    return x * y
}

function division(x, y) {
    if (y === 0) console.error('y no debe ser 0')
    return x / y
}

function potencia(x, y) {
    return x ** y
}

function cuadrado(x) {
    return Math.sqrt(x)
}

let n1 = 4
let n2 = 2
let n3 = 0
let n4 = -2

console.log(suma(n1, n2), resta(n1, n2), multiplicacion(n1, n2), division(n1, n2), potencia(n1, n2), cuadrado(n1))

const operaciones = ['suma', 'resta', 'multiplicacion', 'division', 'potencia', 'raiz']

// para iterar las divs
operaciones.forEach(operacion => {
    document.getElementById(operacion).addEventListener('click', () => calculadora(operacion))
})

function calculadora(op) {
    let num1 = parseInt(prompt('Ingrese el primer número:'))
    let num2 = op !== 'raiz' ? parseInt(prompt('Ingrese el segundo número:')) : null
    let resultado

    switch (op) {
        case 'suma':
            resultado = suma(num1, num2)
            break
        case 'resta':
            resultado = resta(num1, num2)
            break
        case 'multiplicacion':
            resultado = multiplicacion(num1, num2)
            break
        case 'division':
            if (num2 === 0) {
                resultado = 'El segundo número debe ser distinto de 0'
            } else {
                resultado = division(num1, num2)
            }
            break
        case 'potencia':
            resultado = potencia(num1, num2)
            break
        case 'raiz':
            resultado = cuadrado(num1)
            break
    }

    document.getElementById('resultadoTxt').innerHTML = `${resultado}`
}
