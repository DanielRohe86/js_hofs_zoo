const data = require('../data/zoo_data'); // Import the data object

function getAnimalMap(options = {}) {
  const animalMap = {};

  data.species.forEach((species) => {
    const { name, location, residents } = species;
    const filteredResidents = residents.filter((resident) => {
      if (options.sex) {
        return resident.sex === options.sex;
      }
      return true;
    });

    if (!animalMap[location]) {
      animalMap[location] = [];
    }

    const animalNames = filteredResidents.map((resident) => resident.name);

    if (options.includeNames) {
      if (options.sorted) {
        animalNames.sort();
      }
      animalMap[location].push({ [name]: animalNames });
    } else {
      animalMap[location].push(name);
    }
  });

  return animalMap;
}

module.exports = getAnimalMap;
