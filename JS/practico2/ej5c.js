/**
 * Conversor de Pesos a Dólares
 * @param no
 * @return void
 */
function p2d() {

    let valorDolar = 913
    let pesosIngresados = parseInt(document.getElementById('pesosARS').value)
    let resultado

    resultado = pesosIngresados / valorDolar

    document.getElementById('conversion1').innerHTML = `${resultado}`
}

/**
 * Conversor de Dólares a Pesos
 * @param no
 * @return void
 */
function d2p() {

    let valorPeso = 0.0011
    let dolaresIngresados = parseInt(document.getElementById('dolarOfi').value)
    let resultado

    resultado = dolaresIngresados / valorPeso

    document.getElementById('conversion2').innerHTML = `${resultado}`
}

/**
 * Conversor de Pesos a Reales
 * @param no
 * @return void
 */
function r2p() {

    let valorReal = 162.33
    let pesosIngresados = parseInt(document.getElementById('pesosARG').value)
    let resultado

    resultado = pesosIngresados / valorReal

    document.getElementById('conversion3').innerHTML = `${resultado}`
}

function e2p() {

    let valorEuro = 979.56
    let pesosIngresados = parseInt(document.getElementById('pesosARGS').value)
    let resultado

    resultado = pesosIngresados / valorEuro

    document.getElementById('conversion4').innerHTML = `${resultado}`
}