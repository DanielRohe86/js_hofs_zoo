/* const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const arrayOfSpecies = species;
const listOfSpecies = arrayOfSpecies.map((element) => element.name);
const residentSpecies = arrayOfSpecies.map((element) => element.residents);
const residentFullLength = arrayOfSpecies.map((element) => element.residents.length);

TENTATIVA 1 (AJUSTADA POSTERIORMENTE) OK
resultado: { lions: 4 }

const callbackLoop = (animal) => {
  const whichAnimal = Object.values(animal);
  for (let i = 0; i < whichAnimal.length; i += 1) { ERRO NO LINTER
    return whichAnimal[i];
  }
};

function countAnimals(animal) {
  const animalIndex = listOfSpecies.indexOf(callbackLoop(animal));
  // console.log(animalIndex);
  const result = `{ ${callbackLoop(animal)}: ${residentFullLength[animalIndex]} }`;
  return result;
} */

// console.log(animalIndex);
// console.log(arrayOfSpecies);
// console.log(listOfSpecies);
// console.log(residentSpecies);
// console.log(residentFullLength);

// console.log(countAnimals({ specie: 'lions' }));

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

// module.exports = countAnimals;
