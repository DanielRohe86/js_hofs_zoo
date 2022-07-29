/* const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const arrayOfSpecies = { species }.species;

function getSpeciesByIds(ids) {

  const idAnimals = arrayOfSpecies.map((element) => newArray = element.name)

  if (idAnimals === [ ]) {
    return [];
  }
     return idNames;
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

// console.log(species[0].name);
// console.log(data)
console.log(arrayOfSpecies[0])
// console.log(result); FUNCIONA
// console.log(getSpeciesByIds()) /* FUNCIONA, MAS NÃO QUANDO PASSA PARA DENTRO DA FUNÇÃO COM RETORNO INTERNO - FUNCIONA EM UMA LINHA, MAS NÃO PASSA NO LINTER */

// module.exports = getSpeciesByIds;
