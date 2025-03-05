"use strict";

function calcular() {
    let operacion = prompt("Seleccione una operacion : +, -, *, /");
    let num1 = (prompt("Ingrese  el primer número:"));
    let num2 = (prompt("Ingrese el segundo número:"));
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        alert("ingresar números válidos.");
        return;
    }

    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("No se puede dividir por cero.");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("inválida.");
            return;
    }
    alert("El resultado es: " + resultado);
}

calcular();


