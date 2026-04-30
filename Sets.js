//Set
// Un set es una coleccion de valores unicos
// A diferencia de los Array, no permiten duplicados

//Declaracion
let conjunto = new Set ()
console.log(conjunto)
//Inicializacion
conjunto = new Set(["Ronaldo","Luna",23,true])
console.log(conjunto)

//add() : Agrega un valor
conjunto.add(5);
console.log(conjunto); // {"Ronaldo", "Luna", 23, true, 5}
//delete() : Elimina un valor indicando el valor (¡No la Posicion!) del elemento que quiero eliminar
conjunto.delete(true);
console.log(conjunto); // {"Ronaldo", "Luna", 23, 5}
//has() : Verifica si existe un valor.
console.log(conjunto.has(3)); // true
console.log(conjunto.has(10)); // false
//clear() : Vacia el Set
conjunto.clear();
console.log(conjunto); // Set(0) {}
//size() : cantidad de elementos
console.log(conjunto.size); //numero de elementos
//convertir Set --> Array
let arr = [...frutas]; // Set → Array
console.log(arr); // ["manzana","banana","pera"]
let nuevoSet = new Set(arr); // Array → Set
//Recorrer un Set : Podes recorrerlo con for...of o  forEach
let frutas = new Set(["manzana", "banana", "pera"]);
for (let f of frutas) {
    console.log(f);
}
frutas.forEach(f => console.log(f));

