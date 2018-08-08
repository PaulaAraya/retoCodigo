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
 function addFullNameProperty(obj) {
  let fullName = obj.firstName.concat(" "+obj.lastName)
  obj.fullName = fullName;
  return obj;
}

module.exports = addFullNameProperty;

/*
Escribe una función llamada "addFullNameProperty".

Dado un objeto que tiene una propiedad "firstName" y una propiedad "lastName", "addFullNameProperty" devuelve una propiedad "fullName" cuyo valor es una cadena con el nombre y el apellido separados por un espacio.

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'
 */

 //ejercicio 4
 function addObjectProperty(obj1, key, obj2) {
  obj1[key] = obj2;
  return obj1;
}

module.exports = addObjectProperty;

/*
Escribir una función llamada "addObjectProperty".

Dado dos objetos y una clave, "addObjectProperty" establece una nueva propiedad en el primer objeto en la clave dada. El valor de esta nueva propiedad es el segundo objeto completo.

var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }
 */

 //ejercicio 5
 function getAllKeys(obj) {
  let arr = [];
  for (let keyObj in obj){
    arr.push(keyObj)
  }
  return arr;
}

module.exports = getAllKeys;
/*
Escribir una función llamada "getAllKeys" que devuelve 
un array de todas las claves del objeto de entrada.

Ejemplo de entrada:

{
  name: 'Sam',
  age: 25,
  hasPets: true
}
Valor de retorno de la función (salida):

['name', 'age', 'hasPets']
Tenga en cuenta que su función debe ser capaz de 
manejar cualquier objeto pasado en ella.

P.ej. también debe manejar una entrada como:

{
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
}
Valor de retorno de la función (salida):
 */

//ejercicio 6
function transformFirstAndLast(array) {
  let newObj = {};
  newObj[array[0]] = array.pop();
  return newObj;
}

module.exports = transformFirstAndLast;

/*
Escriba una función 'transformFirstAndLast' que toma un array y devuelve un objeto con:

el primer elemento del array como la clave del objeto, y
el último elemento del array como valor de esa clave.
Ejemplo de entrada:

['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
Valor de retorno de la función (salida):

{
  Queen: 'Beyonce'
}
No cambie el array de entrada. Suponga que todos los elementos del array de entrada serán del tipo string.

Tenga en cuenta que el array de entrada puede tener un número variable de elementos. Tu código debería acomodarse de manera flexible.

Ejemplo, debe manejar la entrada como:

['Kevin', 'Bacon', 'Amor', 'Hart', 'Costner', 'Spacey']
Valor de retorno de la función (salida):

{
  Kevin: "Spacey"
}
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