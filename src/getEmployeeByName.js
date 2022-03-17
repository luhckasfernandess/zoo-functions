const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // Caso ñ seja passado nenhum parâmetro retorne...
  const object = {};
  if (typeof employeeName === 'undefined') return object;
  // Vou ter que diminuir o código para o retorno não ficar grande
  // return data.employees.find((element) => element.firstName === employeeName || element.lastName === employeeName);
  const condition = (e) => e.firstName === employeeName || e.lastName === employeeName;
  return data.employees.find(condition);
}
// console.log(getEmployeeByName());
module.exports = getEmployeeByName;
