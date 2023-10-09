const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

const arrayOfEmployees = employees;
// EXEMPLO DE REFATORAÇÃO NO LINTER RETORNANDO ERRO
// SEGUNDO CONSOLE.LOG DE TESTE RETORNOU {}
// const employeeFirstName = arrayOfEmployees.map((element) => {
// let newArray;
// newArray = element.firstName
// return newArray;
// });

// EXEMPLO QUE FUNCIONA
const employeeFirstName = arrayOfEmployees.map((element) => element.firstName);
const employeeLastName = arrayOfEmployees.map((element) => element.lastName);

function getEmployeeByName(employeeName) {
  if (employeeFirstName.find((element) => element === employeeName)) {
    const findEmployeeFirstNameIndex = employeeFirstName
      .findIndex((element) => element === employeeName);
    return arrayOfEmployees[findEmployeeFirstNameIndex];
  }
  if (employeeLastName.find((element) => element === employeeName)) {
    const findEmployeeLastNameIndex = employeeLastName
      .findIndex((element) => element === employeeName);
    return arrayOfEmployees[findEmployeeLastNameIndex];
  }
  return {};
}

console.log(arrayOfEmployees);
console.log(employeeFirstName);
// console.log(employeeLastName);
// console.log(getEmployeeByName('Wilburn'));

module.exports = getEmployeeByName;
