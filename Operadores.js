//Operadores 

/*1) Aritmeticos 
sirven para operaciones matematicas
suma +
resta - 
multiplicacion *
division /
modulo %
exponenciacion 2**3 
incremento ++ (aumenta en 1)
decremento -- (disminuye en 1)

2)De Asignacion
asignan valores a variables 
= -> x=5
+= -> x += 2 (equivale a x = x + 2 )
-= -> x -= 2
*= -> x *= 2 
/= -> x /= 2 
%= -> x %= 2 
**= -> x **= 2 

3) De comparacion
omparan valores y devuelven true o false.
== igualdad (convierte tipos) → 5 == "5" → true
=== igualdad estricta → 5 === "5" → false
!= desigualdad
!== desigualdad estricta
> mayor que
< menor que
>= mayor o igual
<= menor o igual

4) Logicos
Se usan en condiciones.
&& AND → true si ambos son true
|| OR → true si al menos uno es true
! NOT → invierte el valor lógico

5) Otros
Ternario (? :) → condición en una sola línea
let edad = 20;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
----
Nullish Coalescing (??) → devuelve el valor derecho si el izquierdo es null o undefined
let nombre = null;
console.log(nombre ?? "Invitado"); // "Invitado"
----
Optional chaining (?.) → evita errores si una propiedad no existe
console.log(usuario?.direccion?.calle);
------------------------------------
BUENAS PRACTICAS
Usar === y !== en lugar de == y != para evitar conversiones automáticas de tipo.
Inicializar variables antes de usarlas para evitar undefined.
Usar operadores compuestos (+=, -=) para simplificar código.
Evitar abusar del ternario en condiciones complejas (mejor usar if).
Combinar ?? y ?. para manejar valores opcionales de forma segura
*/
