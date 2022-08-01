const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const filterInformation = data.species.filter((element) => element.id === id);
  const allAnimals = filterInformation
    .map((element) => element.residents)
    .reduce((acc, curr) => acc.concat(curr));

  const oldestAge = allAnimals
    .map((element) => element.age)
    .reduce((oldest, age) => ((oldest > age) ? oldest : age));

  const oldestAnimal = allAnimals.find((element) => element.age === oldestAge);
  return oldestAnimal;
}

// ENCONTRA O PRIMEIRO ANIMAL CUIDADO POR AQUELE VET
/* const filteredEmployee = (Idprovided) => {
  const myFilter = data.employees.filter((element) => element.id === Idprovided);
  const firstSpecies =  myFilter.map((element) => element.responsibleFor[0]);
  return firstSpecies;
} */

// ENCONTRA A IDADE DO MAIS VELHO
/* const findOldest = (animalId) => {
  const filterInformation = data.species.filter((element) => element.id === animalId);
  const allAnimals = filterInformation
    .map((element => element.residents));
  const animalAges = allAnimals.map((subarray) => subarray.map((element) => element.age))
  return animalAges
    .reduce((acc, curr) => acc.concat(curr))
    .reduce((oldest, age) => ((oldest > age) ? oldest : age));
  } */

// FUNCIONA!!!!
/* const findOldest = (animalId) => {
  const filterInformation = data.species.filter((element) => element.id === animalId);
  const allAnimals = filterInformation
    .map((element => element.residents))
    .reduce((acc, curr) => acc.concat(curr));

    console.log(allAnimals);

  const oldestAge = allAnimals
    .map((element) => element.age)
    .reduce((oldest, age) => ((oldest > age) ? oldest : age));

  const oldestAnimal = allAnimals.find(element => element.age === oldestAge)
  return oldestAnimal;
  }

console.log(findOldest('0938aa23-f153-4937-9f88-4858b24d6bce')); */
// retorno
/* [
  { name: 'Zena', sex: 'female', age: 12 },
  { name: 'Maxwell', sex: 'male', age: 15 },
  { name: 'Faustino', sex: 'male', age: 7 },
  { name: 'Dee', sex: 'female', age: 14 }
]
{ name: 'Maxwell', sex: 'male', age: 15 } */

// const employeeMapAnimal = filteredEmployee().map((element) => element.responsibleFor)

// console.log(data.employees);
// console.log(filteredEmployee('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = getOldestFromFirstSpecies;
