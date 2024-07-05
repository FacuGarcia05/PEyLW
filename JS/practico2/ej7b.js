
/**
 * Función que retorna los números pares menores que 500
 * @param no
 * @return void
*/
function numPares() {
    const container = document.getElementById('containerNumPares')
    const display = document.createElement('div')

    let i

    for (i = 0; i < 500; i++) {
        let nums = document.createElement('p')
        if (i % 2 === 0) {
            nums.textContent = i
            display.appendChild(nums)
        }
    }
    container.appendChild(display)
    console.log(i)
}

numPares()