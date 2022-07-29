/* const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const arrayOfSpecies = { species }.species;

// ACESSA TUDO
// const all = arrayOfSpecies.map((element) => newArray = element);
// ACESSA CADA ESPÉCIE
const animals = arrayOfSpecies.map((element) => newArray = element.name);
// ACESSA CADA RESIDENTE, COM NOME PRÓPRIO, SEXO E IDADE
const residents = arrayOfSpecies.map((element) => newArray = element.residents);
// Acessa todas as idades da espécie por meio do map de um map
const animalAges = residents.map(function(subarray) {
  return subarray.map(function(element) {
    return element.age
  });
});

function getAnimalsOlderThan(animal, age) {
  const findAnimalIndex = animals.findIndex(element => element === animal);
  const checkAnimalAge = animalAges[findAnimalIndex].every(elem => elem > age)
  return checkAnimalAge;
}

module.exports = getAnimalsOlderThan;

// console.log(residentAnimals[0][0].age);
// console.log(arrayOfSpecies);
// console.log(residentAnimals);  Retorna neste formato { name: 'Zena', sex: 'female', age: 12 },
// console.log(all);
console.log(animals);
// console.log(residents);
console.log(animalAges[0]);

console.log(getAnimalsOlderThan('lions', 10));

// MAP de MAP:
// https://forum.freecodecamp.org/t/how-to-map-a-subarray-or-nested-array/137761
// https://stackoverflow.com/questions/35325767/map-an-array-of-arrays

//COMPARAR OS DOIS ARRAYS PELO ÍNDICE DE CADA UM DOS SEUS ELEMENTOS
// https://www.w3schools.com/jsref/jsref_findindex.asp */
