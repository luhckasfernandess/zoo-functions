const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // Procura pelo nome do animal usando o find que retorna o primeiro
  const animalAge = data.species.find((element) => element.name === 'lions');
  // Verifica se todos atendem a condição usando o every
  return animalAge.residents.every((element) => element.age >= age);
}
// const teste = data.species.find((element) => element.name === 'lions');
// console.log(teste.residents.every((element) => element.age <= 12));
module.exports = getAnimalsOlderThan;
