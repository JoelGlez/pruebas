"use strict";
let nombre = "Juanito Banana"; // Variable
const pi = 3.141516; // Constante 
var ciudad = "CDMX"; // Variable

console.log(nombre, pi, ciudad);

let texto = "mis alumnos dicen que soy guapo";
let numero = 12;
let numero2 = 1;
let bool = true;

console.log(typeof texto, typeof numero, typeof bool);

let nombre2 = prompt("¿Cómo te llamas?");
alert("Bienvenido " + nombre2);

let num = prompt("Ingrese un número:");
num = Number(num); // Convertimos la entrada a número

if (isNaN(num)) { 
    alert("Por favor, ingrese un número válido.");
} else {
    if (num % 2 === 0) {
        alert("El número " + num + " es par.");
    } else {
        alert("El número " + num + " es impar.");
    }
}
