const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

function listFor() {
    const container = document.getElementById('container')
    const titulo = document.createElement('h2')
    titulo.innerHTML = 'Bucle For'

    let listaUl = document.createElement('ul')
    let i

    for (i = 0; i < meses.length; i++) {
        let listInt = document.createElement('li')
        listInt.textContent = meses[i] // no olvidar textContent para colocar dentro
        listaUl.appendChild(listInt)
    }
    container.appendChild(titulo)
    container.appendChild(listaUl)
}

function listForIn() {
    const container = document.getElementById('container')
    let listaUl = document.createElement('ul')
    const titulo = document.createElement('h2')
    titulo.innerHTML = 'Bucle ForIn'
    const objMeses = {
        a: 'Enero',
        b: 'Febrero',
        c: 'Marzo',
        d: 'Abril',
        e: 'Mayo',
        f: 'Junio',
        g: 'Julio',
        h: 'Agosto',
        i: 'Septiembre',
        j: 'Octubre',
        k: 'Noviembre',
        l: 'Diciembre'
    }

    for (const mes in objMeses) {
        let listInt = document.createElement('li')
        listInt.textContent = objMeses[mes]
        listaUl.appendChild(listInt)
    }
    container.appendChild(titulo)
    container.appendChild(listaUl)
}

function listWhile() {
    const container = document.getElementById('container')
    let listaUl = document.createElement('ul')
    const titulo = document.createElement('h2')
    titulo.innerHTML = 'Bucle While'

    let i = 0

    while (i < meses.length) {
        let listInt = document.createElement('li')
        listInt.textContent = meses[i]
        listaUl.appendChild(listInt)
        i++
    }
    container.appendChild(titulo)
    container.appendChild(listaUl)
}

function listDoWhile() {
    const container = document.getElementById('container')
    let listaUl = document.createElement('ul')
    const titulo = document.createElement('h2')
    titulo.innerHTML = 'Bucle Do-While'

    let i = 0

    do {
        let listInt = document.createElement('li')
        listInt.textContent = meses[i]
        listaUl.appendChild(listInt)
        i++
    } while (i < meses.length)
    container.appendChild(titulo)
    container.appendChild(listaUl)
}

listFor()
listForIn()
listWhile()
listDoWhile()