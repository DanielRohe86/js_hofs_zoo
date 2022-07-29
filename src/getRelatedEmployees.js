const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

const arrayOfEmployees = employees;
const employeeManagers = arrayOfEmployees.map((element) => element.managers);
const tempListOfManagers = () => employeeManagers.reduce((acc, curr) => acc.concat(curr), []);
// RETIRA OS IDS REPETIDOS: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set
const listOfManagers = [...new Set(tempListOfManagers())];

// const arrayOfId = arrayOfEmployees.map((element) => element.id);

// FUNCIONA SOZINHA
// function isManager(id) {
//   let manager = listOfManagers.includes(id);
//   if (manager === false) {
//     throw new Error ('O id inserido não é de uma pessoa colaboradora gerente!');
//   }
//   return manager;
// }

// FUNCIONA SINTAXE COMPLATE DO TRY E CATCH

// const callback = (id) => {
//   const manager = listOfManagers.includes(id);
//   if (manager === false) {
//     throw new Error ('O id inserido não é de uma pessoa colaboradora gerente!');
//   }
// }

// function isManager(id) {
//   const manager = listOfManagers.includes(id);
//   try {
//     callback(id);
//     return manager;
//   } catch (e) {
//     return e.message;
//   }
// };

function isManager(id) {
  const manager = listOfManagers.includes(id);
  if (manager === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

function getRelatedEmployees(managerId) {
  try {
    isManager(managerId);
    const filteredManagers = arrayOfEmployees
      .filter((element) => element.managers.includes(managerId));
    const fullName = filteredManagers.map((element) => `${element.firstName} ${element.lastName}`);
    return fullName;
  } catch (e) {
    return e.message;
  }
}

// EXEMPLO QUE FUNCIONA
// const employeeFirstName = arrayOfEmployees.map((element) => element.firstName);
// const employeeLastName = arrayOfEmployees.map((element) => element.lastName);
// const findManagerIndex = employeeManagers.findIndex((element) => element === employeeName);
//     return arrayOfEmployees[findManagerIndex];

// console.log(employeeManagers);
// console.log(listOfManagers);
// console.log(arrayOfEmployees);
// console.log(isManager('e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(getRelatedEmployees('e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(arrayOfEmployees);
// console.log(arrayOfId);
// console.log(employeeManagers);

// SEGUNDA PARTE

// function getRelatedEmployees(managerId) {
//   if (arrayOfId.find((element) => element === managerId)) {
//     const managerIdIndex = arrayOfId.findIndex((element) => element === managerId);
//     return managerIdIndex;
//   }
// }

// // console.log(employeeManagers);
// // console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// console.log(filteredManagers);
