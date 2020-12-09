/*BLOQUE II - P1 */

/*1.[Piloto]
Crear un script que defina e inicialice una variable de tipo cadena de caracteres donde almacenemos el 
nombre de un miembro del grupo y otra variable de tipo entera donde se almacena su edad. Imprimir cada 
variable en una línea distinta en pantalla. 
*/

const nombre = "Gastón";
const edad = 28;
console.log(nombre);
console.log(edad);

/*2.[Basic]
Crear un script que permita ingresar a una persona su nombre, su correo y su edad. Mostrar un mensaje
 en pantalla y en la consola diciendo: Hola [nombre], te enviaremos un mail a [correo]
 */

const nombre = prompt("¿Cuál es tu nombre");
const edad = prompt("¿Cuál es tu edad?");
const correo = prompt("¿Cuál es tu correo?");

console.log("Hola " + nombre + " te enviaremos un mail a " + correo);

/*3.	[Ensalada]
Escribir un script en el cual se ingresen 6 números enteros. Con estos se debe
 calcular la  suma de los 3 primeros y el producto entre el tercero, el cuarto y el 5to y
 sumarle el sexto
 */

const num_1 = parseInt(prompt("Ingrese numero 1"));
const num_2 = parseInt(prompt("Ingrese numero 2"));
const num_3 = parseInt(prompt("Ingrese numero 3"));
const num_4 = parseInt(prompt("Ingrese numero 4"));
const num_5 = parseInt(prompt("Ingrese numero 5"));
const num_6 = parseInt(prompt("Ingrese numero 6"));

const operacion = (num_1 + num_2 + num_3) * num_3 * num_4 * num_5 + num_6;
console.log(operacion);

/*Apus]
Crear un script que permita simular de forma muy básica el mecanismo de una caja registradora.
El usuario debe insertar el nombre del producto, la cantidad y el precio unitario.
En la pantalla mostrar: “Gracias por comprar x unidades de x articulo. Total: Total a abonar.
*/

const nombre = prompt("Ingrese el nombre del producto");
const cantidad = parseInt(prompt("Ingrese la cantidad"));
const precio = parseInt(prompt("Ingrese el precio unitario del producto"));
const total = cantidad * precio;

console.log(
  `Gracias por comprar ${cantidad} de ${nombre}. Total abonar es: ${total}`
);

/*Confeccionar un programa que permita al usuario ingresar 2 notas y calcular:
a.	Suma total
b.	Promedio
c.	Nota máxima
*/

const nota1 = parseInt(prompt("Ingresar la nota 1"));
const nota2 = parentInt(prompt("Ingresa la nota 2"));

const sumaTotal = nota1 + nota2;
console.log(sumaTotal);

const promedio = sumaTotal / 2;
console.log(promedio);

if (nota1 > nota2) {
  console.log(nota1 + " es nota máxima");
} else console.log(nota2 + " es nota máxima");

/*6. [Passwords]
Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son iguales.
 */

const clave = prompt("Ingrese la clave");
const claveConfirmacion = prompt("Ingrese nuevamente la clave");

if (clave === claveConfirmacion) {
  console.log("Genial, las claves coinciden");
} else {
  console.log("Error las claves no son iguales");
}

/*7.[Movie]
Se ingresan por teclado 4 números, si todos los valores ingresados son menores a 23,
 imprimir en la página ‘Todos los números son menores al número establecido'. 
 */
const array = [];
let numeros = 0;
for (let i = 0; i < 4; i++) {
  numeros = prompt("Ingrese números");
  array.push(numeros);
}
if (numeros < 23) {
  console.log("los numeros ingresados son menores que 23");
} else {
  console.log(
    "En los números ingresados al menos hubo mayor alguno mayor a 23"
  );
}

/*8.[Nine]
Crear un script que muestre la tabla de multiplicar del 9.
 */
