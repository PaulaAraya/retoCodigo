//ejercicio 1

function filterOddElements(arr) {
  let inpar = [];
  for (let index = 0 ; index < arr.length; index++){
  if (arr[index] % 2 !== 0){
    inpar.push(arr[index]);
  }
  }
  return inpar
}

module.exports = filterOddElements;

/*
Escriba una función llamada "filterOddElements".

Dado un array de números,"filterOddElements" devuelve un array que contiene sólo los números impares del array dado.

Ejemplo:

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
*/ 

//Ejercicio 2

function findShortestOfThreeWords(word1, word2, word3) {
  let shortWord = word1;
    if (word2.length < shortWord.length){
      shortWord = word2;
    }else if (word3.length < shortWord.length){
      shortWord = word3;
    }
  return shortWord;  
}

module.exports = findShortestOfThreeWords;

/*
Escribe una función llamada findShortestOfThreeWords.

Dado 3 cadenas, findShortestOfThreeWords devuelve el más corto de las cadenas dadas.

Notas:

Si hay empate, debe devolver la primera palabra en la lista de parámetros.
var output = findShortestOfThreeWords('a', 'dos', 'tres');
console.log(salida); // -> 'a'
*/

//Ejercicio 3

function calculateBillTotal(preTaxAndTipAmount) {
  const tax = preTaxAndTipAmount*0.095;
  const tip = preTaxAndTipAmount*0.15;
  const total = preTaxAndTipAmount + tax + tip;
  return total;
 }
 
 module.exports = calculateBillTotal;

/*
Escribe una función llamada calculateBillTotal.

Dado el pre impuesto y la cantidad antes de propina de una comida, calculateBillTotal devuelve la cantidad total debida después de impuestos y propina.

Notas:

Suponga que el impuesto de ventas es 9.5% y la propina es 15%.
NO incline el impuesto sobre las ventas, solo sobre la cantidad de propina.
var output = calculateBillTotal(20);
console.log(output); // -> 24,9
*/

// Ejercicio 4
function convertScoreToGrade(score) {
  if(score >= 90 && score <= 100){
    return 'A';
  } else if (score >= 80 && score <= 89){
    return 'B';
  } else if (score >= 70 && score <= 79){
    return 'C';
  } else if (score >= 60 && score <= 69){
    return 'D';
  } else if (score >= 0 && score <= 59){
    return 'F'
  } else {
    return 'PUNTUACION INVALIDA';
  }
}
module.exports = convertScoreToGrade;

/*
Escribe una función llamada convertScoreToGrade.

Dada una puntuación, convertScoreToGrade devuelve una cadena que representa el grado de letra correspondiente a la puntuación dada.

Notas:

(100 - 90) -> 'A'
(89 - 80) ->' B '
(79 - 70) -> 'C'
(69 - 60) -> 'D'
(59 - 0) -> 'F'
Si la puntuación dada es mayor que 100 o menor que 0, debe devolver 'PUNTUACION INVALIDA'.
var output = convertScoreToGrade(91);
console.log(output); // -> 'A'
*/

//Ejercicio 5
function areValidCredentials(name, password) {
  if (name.length >= 3 && password.length >= 8) {
    return true;
  } else {
    return false;
  }
}

module.exports = areValidCredentials;

/*
scribe una función llamada areValidCredentials.

Dando un nombre y una contraseña, areValidCredentials, devuelve true si el nombre es superior a 3 caracteres, Y, la contraseña tiene al menos 8 caracteres de longitud. De lo contrario, devuelve false.

Ejemplo de entrada:

var output = areValidCredentials('Ritu', 'mylongpassword');
console.log(output); // --> true
*/

//Ejericio 6
function findShortestWordAmongMixedElements(arr) {
  if(arr.length === 0){ //si el array está vacio retorna string ""
     return '';
   }
   let arr2 = [];
   for (let i = 0; i < arr.length; i++) { 
    if(typeof arr[i] === 'string'){
      arr2.push(arr[i]);
     }
    }
   if(arr2.length === 0){
     return '';
   }
   let finalArr = arr2[0];
   for (let j = 1 ; j < arr2.length; j++){
     if(finalArr.length > arr2[j].length){
       finalArr = arr2[j]
     }
   }
   return finalArr;
 } 

/*
Escriba una función llamada "findShortestWordAmongMixedElements".

Dado un array, "findShortestWordAmongMixedElements" devuelve la cadena más corta dentro del array dado.

Notas:

Si hay vínculos, debería devolver el primer elemento que aparezca en el array dado.
Espere que el array tenga otros valores además de las cuerdas.
Si el array dado está vacío, debería devolver una cadena vacía.
Si el array dado no contiene cadenas, debería devolver una cadena vacía.
Ejemplo:

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
*/

//ejercicio 7

/*
 */

//ejercicio 8

/*
 */

//ejercicio 9

/*
 */

 //ejercicio 10

/*
 */ 