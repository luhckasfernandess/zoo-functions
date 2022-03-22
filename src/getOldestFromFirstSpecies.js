const data = require('../data/zoo_data');

const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário
  const firstSpecie = employees.find((e) => e.id === id).responsibleFor[0];
  // Encontra o id do animal
  const animalId = species.find((e) => e.id === firstSpecie);
  // Recebe a primeira idade para comparação no acumulador older
  let older = animalId.residents.find((e) => e.age).age;
  // Procura o mais velhor com o forEach
  animalId.residents.forEach((e) => {
    if (older < e.age) {
      older = e.age;
    }
  });
  // Salvo pelo debug.
  // Retorna um objeto com os dados do animal mais velho
  const oldestAnimal = animalId.residents.find((e) => e.age === older);
  // Object.values retorna um array com nome, sexo e idade do animal mais velho dessa espécie.
  return Object.values(oldestAnimal);
}

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
