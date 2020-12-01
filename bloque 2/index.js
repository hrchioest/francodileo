/*Ejercicio 1: [BigThreeReloaded] Hacer una función a la cual le envie 3 enteros y retorne el mayor de ellos */

const bigThreeReloaded = () => {
  const numero1 = parseInt(prompt("Escribir el primer número"));
  const numero2 = parseInt(prompt("Escribir el segundo número"));
  const numero3 = parseInt(prompt("Escribir el tercer número"));
  if (numero1 > numero2 && numero1 > numero3) {
    console.log(`El número ${numero1} es el mayor`);
  }
  if (numero2 > numero1 && numero2 > numero3) {
    console.log(`El número ${numero2} es el mayor`);
  } else {
    console.log(`El número ${numero3} es el mayor`);
  }
};

/*Ejercicio 2: [AVGReloaded] Elaborar una función que reciba 3 enteros y retorne el promedio */

const avgreloaded = () => {
  const numero1 = parseInt(prompt("Escribir el primer número"));
  const numero2 = parseInt(prompt("Escribir el segundo número"));
  const numero3 = parseInt(prompt("Escribir el tercer número"));

  return (numero1 + numero2 + numero3) / 3;
};
/*Ejercicio 3: [Plusx5] Confeccionar una función que solicite la carga de 5 valores por teclado y retorne la suma*/

const plusx5 = (numero = 5) => {
  const numeros = [];
  for (let i = 0; i < numero; i++) {
    const num = parseInt(prompt("Ingresa un número"));
    numeros.push(num);
  }
  const reducer = (acumulador, currentValue) => acumulador + currentValue;
  return numeros.reduce(reducer);
};

/*Ejercicio 4: [newArray] Crear una función que reciba dos array (arreglos) como argumentos y retorne el resultado en un nuevo arreglo Ejemplo:
[1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]*/

const newArray = (array1, array2) => array1.concat(array2);

/*Ejercicio 5: [SiPeroNo] Crear una función que reciba 2 arrays de números y retorne un nuevo array con los elementos que se
encuentren en el primer array, pero no en el segundo, Nota:Esto se llama "resto" entre conjuntos Ejm: [5,1,2,3,4] 
 y [3,4] devería devolver [5,1,2] */

const siPeroNo = (vector1, vector2) =>
  vector1.filter((item) => !vector2.includes(item));

/*Ejercicio 6: [Filter] Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
 Ejm: [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0] */

const filter = (vector1) => {
  const vector2 = [];
  for (let i = 0; i < vector1.length; i++) {
    !vector2.includes(vector1[i]) ? vector2.push(vector1[i]) : null;
  }
  return vector2;
};

/*Ejercicio 7: [NoLength] Crear una función que retorne la cantidad de caracteres de un texto.
a. Nota: Esto es posible hacerlo dentro de javascript con .length. Implementar un ciclo para resolver el problema. */

/*Ejercicio 8: [WalterWhite] Crear una función que retorne la cantidad de espacios en blanco de
un texto */

/*Ejercicio 9: [Capitalize] Crear una función que convierta un string “hola mundo” y retorne “Hola
Mundo” */
