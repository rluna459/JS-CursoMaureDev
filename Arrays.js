//Array
// Es una lista ordenada de elementos que podes guardar dentro de una sola variable

//Crear un Array 
let numeros = [1,2,3,4,5];
let frutas = ["manzana","banana","pera"]
/*Los indices empiezan en 0
frutas[0] = "manzana"
frutas[1] = "banana" 
*/

//length : cantidad de elementos
console.log(frutas.length) //3

//push()/pop() : Agregar o quitar al final
frutas.push("naranja"); // ["manzana","banana","pera","naranja"]
frutas.pop();           // ["manzana","banana","pera"]

//unshift()/shift() : Agregar o quitar al inicio
frutas.unshift("uva"); // ["uva","manzana","banana","pera"]
frutas.shift();        // ["manzana","banana","pera"]

//indexOf() / includes() : Buscar elementos
console.log(frutas.indexOf("banana")); // 1 posicion de banana en el array
console.log(frutas.includes("pera"));  // true para saber si esque esa o no

//slice() : Extraer una parte sin modificar el original
let algunas = frutas.slice(0, 2); // ["manzana","banana"]

//splice() : Agrega o quitar elementos en cualquier posicion
frutas.splice(1, 1, "kiwi"); // ["manzana","kiwi","pera"]

//forEach() : Recorrer todos los elementos
frutas.forEach(f => console.log(f));

//map() : transformar cada elemento y devolver un nuevo array
let mayus = frutas.map(f => f.toUpperCase());// ["MANZANA","BANANA","PERA"]

//filter() : Filtrar elementos segun una condicion
let largas = frutas.filter(f => f.length > 5);// ["manzana","banana"]

//reduce() : Reducir el array a un solo valor
let suma = numeros.reduce((acc, n) => acc + n, 0);
console.log(suma); // 15
