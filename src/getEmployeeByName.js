const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

const arrayOfEmployees = { employees }.employees;
//EXEMPLO DE REFATORAÇÃO NO LINTER RETORNANDO ERRO
//SEGUNDO CONSOLE.LOG DE TESTE RETORNOU {}
const employeeFirstName = arrayOfEmployees.map((element) => {
let newArray;
newArray = element.firstName});

//EXEMPLO QUE FUNCIONA
const employeeLastName = arrayOfEmployees.map((element) => newArray = element.lastName);


function getEmployeeByName(employeeName) {
  if (employeeFirstName.find(element => element === employeeName)) {
    const findEmployeeFirstNameIndex = employeeFirstName.findIndex(element => element === employeeName);
    return arrayOfEmployees[findEmployeeFirstNameIndex];
  } else if (employeeLastName.find(element => element === employeeName)) {
    const findEmployeeLastNameIndex = employeeLastName.findIndex(element => element === employeeName);
    return arrayOfEmployees[findEmployeeLastNameIndex];
  } else {
    return {} 
  }
}

// console.log(arrayOfEmployees[0]);
// console.log(employeeFirstName);
// console.log(employeeLastName);
console.log(getEmployeeByName('Wilburn'));

module.exports = getEmployeeByName;
