const data = require('../data/zoo_data'); // Import the data object

function getEmployeesCoverage(options = {}) {
  const { name, id } = options;

  if (name) {
    const employee = data.employees.find(
      (emp) =>
        emp.firstName.includes(name) || emp.lastName.includes(name),
    );

    if (!employee) {
      throw new Error('Informações inválidas');
    }

    const fullName = `${employee.firstName} ${employee.lastName}`;
    const species = employee.responsibleFor.map((animalId) =>
      data.species.find((species) => species.id === animalId).name);
    const locations = employee.responsibleFor.map((animalId) =>
      data.species.find((species) => species.id === animalId).location);

    return {
      id: employee.id,
      fullName,
      species,
      locations,
    };
  } if (id) {
    // Search for employees by id
    const employee = data.employees.find((emp) => emp.id === id);

    if (!employee) {
      throw new Error('Informações inválidas');
    }

    const fullName = `${employee.firstName} ${employee.lastName}`;
    const species = employee.responsibleFor.map((animalId) =>
      data.species.find((species) => species.id === animalId).name);
    const locations = employee.responsibleFor.map((animalId) =>
      data.species.find((species) => species.id === animalId).location);

    return {
      id: employee.id,
      fullName,
      species,
      locations,
    };
  }
  // Return coverage information for all employees
  return data.employees.map((employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`;
    const species = employee.responsibleFor.map((animalId) =>
      data.species.find((species) => species.id === animalId).name);
    const locations = employee.responsibleFor.map((animalId) =>
      data.species.find((species) => species.id === animalId).location);

    return {
      id: employee.id,
      fullName,
      species,
      locations,
    };
  });
}

module.exports = getEmployeesCoverage;
