//var
var helloworld = "hola, javascript"
console.log(helloworld)
helloworld = "hola de nuevo, javascript "
console.log(helloworld)
//let
let helloworld2 = "Hola, javascrpt 2"
console.log(helloworld2)
//const
const helloworld3 = "hola, javascrpt 3"
console.log(helloworld3)

/*
var → obsoleto, solo en código viejo.
let → para valores que cambian.
const → para valores fijos (preferido).
----------------------------
Buenas prácticas
Usar const por defecto: garantiza que no reasignes accidentalmente valores.
Usar let solo cuando el valor cambie: por ejemplo, en bucles o cálculos.
Evitar var: su alcance amplio y el hoisting generan bugs difíciles de detectar.
Nombrar variables claramente: evita confusión en bloques y funciones.
Mantener el menor alcance posible: declarar variables en el bloque más pequeño donde se usan.
----------------------------
Malas prácticas
Redeclarar con var dentro del mismo scope → sobrescribe valores sin error.
Usar let para todo sin pensar → pierde la ventaja de seguridad que da const.
Creer que const es inmutable → en objetos/arrays solo bloquea la referencia, no el contenido.
Declarar variables globales innecesarias → aumenta riesgo de colisiones.

*/