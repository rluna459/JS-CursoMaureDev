//Tipos de Condicionales

//1. if : Ejecuta un bloque de codigo si la condicion es verdadera
let edad = 20;
if (edad >= 18) {
    console.log("Sos mayor de edad");
}
//2. if...else : Si la condicion es falsa, ejecuta otro bloque
let edad = 15;
if (edad >= 18) {
    console.log("Sos mayor de edad");
} else {
    console.log("Sos menor de edad");
}
//3. if...else if...else : Permite evaluar condiciones en orden
let nota = 7;
if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Aprobado");
} else {
    console.log("Desaprobado");
}
//4. switch : Sirve para evaluar un valor contra multiples casos
let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Arranca la semana");
        break;
    case "viernes":
        console.log("Último día de trabajo");
        break;
    default:
        console.log("Es otro día");
}
//5. Operador Ternario : Condicion en una sola linea
let edad = 18;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);
