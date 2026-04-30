//Strings

//Concatenacion
let nombre = "Roni"
let Concatenado = "Hola" + nombre
console.log(Concatenado)
console.log(typeof Concatenado) //devuelve el tipo de dato el typeoff creo

//Longitud :devuelve la cantidad de caracteres
let texto = "Hola mundo"
console.log(texto.length)

//Acceso a Caracteres 
console.log(texto[0]); // "H"
console.log(texto.charAt(1)); // "o"

//Mayusculas y Minusculas
console.log(texto.toUpperCase()); // "HOLA MUNDO"
console.log(texto.toLowerCase()); // "hola mundo"

//Buscar dentro del string
console.log(texto.indexOf("mundo")); // 5
console.log(texto.includes("Hola")); // true

//Extraer Partes
console.log(texto.slice(0, 4)); // "Hola"
console.log(texto.substring(5)); // "mundo"

//Reemplazar
console.log(texto.replace("mundo", "Ronaldo")); // "Hola Ronaldo"

//Dividir y unir
let palabras = texto.split(" "); // ["Hola", "mundo"]
console.log(palabras.join("-")); // "Hola-mundo"
