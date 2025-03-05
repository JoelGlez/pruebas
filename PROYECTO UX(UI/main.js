"use strict";
let nombre = "Juanito Banana";//variable
const pi = 3.141516;//constante 
var ciudad = "CDMX";//variable

console.log(nombre,pi,ciudad);



let texto = "mis alumnos dicen que soy gaupo";
let numero = 12;
let numero2 = 1;
let bool = true;

console.log(typeof texto,typeof numero, typeof bool)

let nombre2 = prompt("¿Como te llamas");

alert("Bienvenido" +nombre2);

let num = prompt("ingrese tu calificacion ")
if (num>=90){
    alert("ya pasaste facil")
}
else if (num<=80 ||num>=60){
    alert("pasaste bien")
}
else {
    alert("repobaste")
}

let usuario ="admin";
let clave = "12345";
if(usuario === "admin" && clave === "12345"){
    alert("acceso permitido");
}else{
    alert("nel prr");
}
  

let dia = promt("ingrese el dia")
switch(dia.toLowerCase()){
    case "lunes":
    alert("inicio de semana");
    case"martes":
    alert("mhe martes");
    break;
    case"miercoles":
    case"jueves":
    alert("dias que no me interesan");
    break;
    case "viernes":
    case"sabado":
    alert("ahora si viene lo chido");
    break;
    default:
        alert("parametro no permitido");
        break;
}