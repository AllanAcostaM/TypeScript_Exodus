let nombre: string = "Jossep";
let edad: number = 39; 
let isDeveloper: boolean = false;
let mes: string | undefined; // Es string o es indefinida
let variableNull: null = null;


console.log ("Hello, " + nombre); // Concatenacion a traves de declaracion de variable
console.log (`Hello, ${nombre}`); // Concatenacion con formato de cadenas largas 

console.log ("Mes inical:", mes);

mes = "Enero";
console.log("Mes actualizado", mes);

console.log ( "is he developer?", isDeveloper);