//ejercicio 1
const objectPropertiesCounter = (obj) => {
  Object.keys(obj).length;
};

module.exports = objectPropertiesCounter;

/*
Dado un objeto como parámetro, contar la cantidad de propiedades que este contiene y retornarlo.

Ejemplo:

const output = objectPropertiesCounter({ 'name': 'John', 'lastname': 'Doe' });

console.log(ouput); // -> 2
 */

 //ejercicio 2
 function removeStringValuesLongerThan(num, obj) {
  for (let ruta in obj){
    if(obj[ruta].length > num){
      delete obj[ruta];
    } 
  }
  return obj
}
module.exports = removeStringValuesLongerThan;


/*
Escribe una función llamada "removeStringValuesLongerThan".

Dado un número y un objeto,"removeStringValuesLongerThan" elimina cualquier propiedad en el objeto dado cuyos valores son cadenas de texto más largas que el número dado.

Ejemplo de entrada:

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
 */

 //ejercicio 3

/*
 */

 //ejercicio 4

/*
 */

 //ejercicio 5

/*
 */

 //ejercicio 6

/*
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