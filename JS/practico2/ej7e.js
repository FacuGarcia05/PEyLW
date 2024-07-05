/**
 * Listar números primos menores a 100
 * @param {null}
 */
function numerosPrimos() {
    const container = document.getElementById('containerNumPrimos')
    const display = document.createElement('div')
    const titulo = document.createElement('h2')
    titulo.innerHTML = 'Números primos < 100'

    let i = 2

    while (i < 100) {
        let esPrimo = true
        let j = 2

        while (j < i) {
            if (i % j === 0) {
                esPrimo = false
            }
            j++
        }
        if (esPrimo) {
            let resultado = document.createElement('p')
            resultado.textContent = i
            display.appendChild(resultado)
        }
        i++
    }
    container.appendChild(titulo)
    container.appendChild(display)
}

numerosPrimos()