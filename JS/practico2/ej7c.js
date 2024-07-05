/**
 * Calcula primeros 100 resultados de la ecuación
 * @param {number} x 
 */
function f(x) {
    const container = document.getElementById('containerFuncion')
    const display = document.createElement('div')
    const titulo = document.createElement('h2')
    titulo.innerHTML = 'Primeras 100 resultados de: 3 * x + 5 - x^2'

    for (let i = x; i < 100; i++) {
        let resultado = document.createElement('p')
        resultado.textContent = (3 * i) + 5 - (i ** 2)
        display.appendChild(resultado)
    }
    container.appendChild(titulo)
    container.appendChild(display)
}

f(0)
