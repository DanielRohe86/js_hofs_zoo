// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const arrayOfSpecies = { species }.species;

function getSpeciesByIds(ids) {
  // if (!ids) {
  //   return [];
  // }
  // const filterId = arrayOfSpecies.filter((element => element.id === ids))
  // return filterId.map((element) => element.name );
}

// TENTATIVA 1
// const result = arrayOfSpecies.map((element) => {
//   let newArray = Object.values(element.name).join(", ");
//   return newArray;
// })

// //RETORNO DO TIPO:
// [
//   'l, i, o, n, s',

// TENTATIVA 2 FUNCIONA!!!!!!!!!!

// const result = arrayOfSpecies.map((element) => newArray = element.name);
// const allIds = arrayOfSpecies.map((element) => newArray = element.id)
// console.log(species[0].name);
// console.log(data)
// console.log(arrayOfSpecies)

// FUNÇÃO RASCUNHO ABAIXO, NÃO FUNCIONA ESTAMOS AQUI AGORA

/* const speciesFromId = idTest => {

  const test = idTest.forEach((id) => {
    const callback = arrayOfSpecies
    .filter((element => element.id === id))
    .map((element) => element.name);

    return callback;

  });
}

console.log(speciesFromId(['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'])) */

// const newArray = arrayOfSpecies.map((element) => element.name)
// console.log(newArray);
// console.log(newArray);
// const allInfo = arrayOfSpecies.filter((element => element.id === idTest));
// return allInfo;
// console.log(specieFromId(['lionId', 'elephantsId']));
// // console.log(allIds);

// const idTest = ['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46']

// const result = idTest.forEach((element) => anyFunction(element));

// const anyFunction = (idTest) => {
// const callback = arrayOfSpecies.filter((element => element.id === idTest))
// return callback
// }

// console.log(result(idTest));
/* FUNCIONA, MAS NÃO QUANDO PASSA PARA DENTRO DA FUNÇÃO COM RETORNO INTERNO - FUNCIONA EM UMA LINHA, MAS NÃO PASSA NO LINTER */

module.exports = getSpeciesByIds;

// console.log(animalId);
