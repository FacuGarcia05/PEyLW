//INICIALIZACION DE VARIABLES
var suma;
var resta;
var multiplicacion;
var division;


function Suma(){
    var primerNumero = parseFloat(prompt("Ingrese el primer numero"));
    var segundoNumero = parseFloat(prompt("Ingrese el segundo numero"));
    suma = primerNumero + segundoNumero;
    var resultado = document.getElementById("resultados");
    resultado.value += primerNumero +' + '+ segundoNumero +' = '+ suma +'\n';
}

function Resta(){
    var primerNumero = parseFloat(prompt("Ingrese el primer numero"));
    var segundoNumero = parseFloat(prompt("Ingrese el segundo numero"));
    resta = primerNumero - segundoNumero;
    var resultado = document.getElementById("resultados");
    resultado.value += primerNumero +' - '+ segundoNumero +' = '+ resta +'\n';
}

function Division(){
    var primerNumero = parseFloat(prompt("Ingrese el primer numero"));
    var segundoNumero = parseFloat(prompt("Ingrese el segundo numero"));
    division = primerNumero / segundoNumero;
    var resultado = document.getElementById("resultados");
    resultado.value += primerNumero +' / '+ segundoNumero +' = '+ division +'\n';
}

function Multiplicacion(){
    var primerNumero = parseFloat(prompt("Ingrese el primer numero"));
    var segundoNumero = parseFloat(prompt("Ingrese el segundo numero"));
    multiplicacion = primerNumero * segundoNumero;
    var resultado = document.getElementById("resultados");
    resultado.value += primerNumero +' * '+ segundoNumero +' = '+ multiplicacion +'\n';
}