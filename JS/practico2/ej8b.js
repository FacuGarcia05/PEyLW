const provincias = document.querySelectorAll('#provincias')

provincias.forEach((provincia) => {
    provincia.addEventListener('click', () => {
        const ciudad1 = document.getElementById('ciudades-nqn')
        const ciudad2 = document.getElementById('ciudades-bsas')
        const ciudad3 = document.getElementById('ciudades-lapampa')

        if (ciudad1) {
            if (ciudad1.style.visibility === 'visible') {
                ciudad1.style.visibility === 'hidden'
                provincia.textContent = provincia.textContent.replace('-', '+')
            } else {
                provincia.textContent = provincia.textContent.replace('+', '-')
            }

        }
    })
})