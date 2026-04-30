/*En JavaScript existen tipos de datos primitivos y estructurales; los primitivos son valores simples como números, cadenas o booleanos, mientras que los estructurales abarcan objetos, arrays y funciones. El lenguaje es dinámicamente tipado, lo que significa que una misma variable puede contener distintos tipos de datos en diferentes momentos. */

// Primitivos

/* 1) Number 
representa enteros y decimales
incluye valores especiales :Infinity, -Infinity, NaN */
let n = 123; 
let m = 12.34; 
let x = 1/0; // Infinity

/*2) BigInt
para enteros muy grandes fuera del rango seguro de Number
*/
let big = 123456789012345678901234567890n;

/* 3) String
texto entre comillas simples, dobles o backticks(para template literals) 
*/
let saludo = "Hola";
let nombre = `Soy ${saludo}`;

/* 4) Boolean
Valores logicos: true o false*/
let activo = true

/* 5) Undefined
valor por defecto de una variable declarada pero no inicializada
 */
let x; // undefined

/* 6)Null
Representa ausencia intencional dew valor */
let y = null;

/* 7) Symbol 
valores unicos e inmutables, utiles como identica */

let id = Symbol("id")
let mySymbol = Symbol("Mysymbol")


