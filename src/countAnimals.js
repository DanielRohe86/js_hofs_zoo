const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const arrayOfSpecies = species;
const listOfSpecies = arrayOfSpecies.map((element) => element.name);
const residentSpecies = arrayOfSpecies.map((element) => element.residents);
const residentFullLength = arrayOfSpecies.map((element) => element.residents.length);
const femalesOnly = residentSpecies
  .map((animal) => animal
    .filter((element) => (element.sex === 'female')));
const femalesLength = femalesOnly.map((element) => element.length);

// console.log(residentSpecies);
// console.log(residentFullLength);
// const object = (species, fullLength) => species.map((animal, index) => (
// { [animal]: fullLength[index], }
// ));
// const arrayResult = object(listOfSpecies, residentFullLength);
// RESULTADO
// [
//   { lions: 4 },
//   { tigers: 2 },
//   { bears: 3 },
//   { penguins: 4 },
//   { otters: 4 },
//   { frogs: 2 },
//   { snakes: 2 },
//   { elephants: 4 },
//   { giraffes: 6 }
// ]

// const exerciseOne = arrayResult.map((element) => element[]);
// console.log(arrayResult);
// console.log(exerciseOne);

// const listOfSpecies = arrayOfSpecies.map((element) => element.name);
// const residentFullLength = arrayOfSpecies.map((element) => element.residents.length);

// const object = {};

// listOfSpecies.forEach((element, index) => {
//   object[element] = residentFullLength[index];
// });

// console.log(object);
// https://bobbyhadz.com/blog/javascript-create-object-from-two-arrays
// RETORNO
// {
//   lions: 4,
//   tigers: 2,
//   bears: 3,
//   penguins: 4,
//   otters: 4,
//   frogs: 2,
//   snakes: 2,
//   elephants: 4,
//   giraffes: 6
// }

// TENTATIVA 1 (AJUSTADA POSTERIORMENTE)
// resultado: { lions: 4 }

// const callbackLoop = (animal) => {
//   const whichAnimal = Object.values(animal);
//   for (let i = 0; i < whichAnimal.length; i += 1) {
//     return whichAnimal[i];
//   }
// };

// const callbackLoop = (animal) => {
//   const whichAnimal = Object.values(animal);
//   for (animal of whichAnimal)
//   return animal;
//   };

// const obj = data.species.reduce((accumulator, {name}, index) => {
//   return {...accumulator, [name]: residentFullLength[index]};
// }, {});

// console.log(Object.keys(obj));

function countAnimals(animal) {
  if (!animal) {
    const obj = data.species
      .reduce((acc, { name }, index) => ({ ...acc, [name]: residentFullLength[index] }), {});
    return obj;
  }
  if (Object.keys(animal).length === 1) {
    const animalIndex = listOfSpecies.indexOf(animal.specie);
    const resultOne = residentFullLength[animalIndex];
    return resultOne;
  }
  if (Object.keys(animal).length === 2) {
    const animalIndex = listOfSpecies.indexOf(animal.specie);
    const resultTwo = femalesLength[animalIndex];
    return resultTwo;
  }
}

// console.log(femalesOnly);
// console.log(femalesLength);

// console.log(residentSpecies);

/* const verifySex = () => (
  data.species.filter((people) => (people.age < 18))
); */

// console.log(verifyAgeDrive(objPeople));

// console.log(countAnimals());

// console.log(animalIndex);
// console.log(arrayOfSpecies);
// console.log(listOfSpecies);
// console.log(residentSpecies);
// console.log(residentFullLength);

// console.log(countAnimals());

// return `${listOfSpecies[index]}, ${residentFullLength[index]}`

// TENTATIVA 2 OK

// function countAnimals(animal) {
//   const whichAnimal = Object.values(animal);
//   for (i = 0; i < whichAnimal.length; i += 1) {
//     return whichAnimal[i];
//   }
// }

// console.log(callbackLoop({ specie: 'lions' }));
// RETURN lions
// console.log(countAnimals({ specie: 'lions' }));

// PARTE 2
// TRAVEI

// const residentSpecies = arrayOfSpecies.map((element) => element.residents);

// const residentSex = residentSpecies.map((subarray) => {
//   return subarray.map((element) => {
//     return `{ ${element.sex}: ${element.age} }`;
//   });
// });

// const femSex = residentSex.filter((element) => element === 'female');

// // .filter((element) => element.sex === 'female');

// // console.log(residentSpecies);
// console.log(residentSex);
// console.log(femSex);

// const callbackLoop = (animal) => {
//   const whichAnimal = Object.values(animal);
//   console.log(whichAnimal);
//   if (whichAnimal.length === 1) {
//     for (let i = 0; i < whichAnimal.length; i += 1) { /* ERRO NO LINTER */
//       return whichAnimal[i];
//     }
//   }
//   if (whichAnimal.length === 2) {

//   }
// };

// function countAnimals(animal) {
//   const animalIndex = listOfSpecies.indexOf(callbackLoop(animal));
//   // console.log(animalIndex);
//   const result = `${callbackLoop(animal)}: ${residentFullLength[animalIndex]}`;
//   return result;
//   // return { result }
// }

// console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
