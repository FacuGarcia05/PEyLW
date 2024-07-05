/**
 * Función de factoreo
 * @param {number} n 
 */
function factorial(n) {
    const container = document.getElementById('containerFactoreo')
    const display = document.createElement('div')
    const titulo = document.createElement('h2')
    titulo.innerHTML = 'Factoreo'

    let resultado = 1

    for (let i = n; i >= 1; i--) {
        resultado *= i
    }
    const resultadoF = document.createElement('p')
    resultadoF.textContent = `${n * (n - 1)}`
    display.appendChild(resultadoF)
    container.appendChild(titulo)
    container.appendChild(display)
}

factorial(4)