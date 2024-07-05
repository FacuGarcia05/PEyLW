const listaColoresContainer = document.getElementById('listaColores')
const listLiColores = document.querySelectorAll('#listaColores li')

const colores = ['blanco', 'negro', 'azul', 'rojo', 'amarillo']

listLiColores.forEach((li) => {
    li.addEventListener('mouseover', () => cambioColor(li))
})

function cambioColor(li) {
    switch (li.id) { // acceder a los atributos del id
        case 'blanco':
            listaColoresContainer.style.backgroundColor = 'rgb(255, 255, 255)'
            break
        case 'negro':
            listaColoresContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.340)'
            break
        case 'azul':
            listaColoresContainer.style.backgroundColor = 'rgba(40, 25, 255, 0.340)'
            break
        case 'rojo':
            listaColoresContainer.style.backgroundColor = 'rgba(255, 0, 0, 0.340)'
            break
        case 'amarillo':
            listaColoresContainer.style.backgroundColor = 'rgba(242, 254, 22, 0.340)'
            break
    }
}
