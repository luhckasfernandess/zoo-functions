const data = require('../data/zoo_data');
// data.species
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  let countAnimal;
  if (typeof animal === 'undefined') {
    countAnimal = {};
    // Usei o Object.assign para copiar o objeto que eu queria para a variável countAnimal. Abençoado!
    species.forEach((e) => Object.assign(countAnimal, { [e.name]: e.residents.length }));
    return countAnimal;
  }
  const { specie, sex } = animal;
  // Object.keys retorna um array do parâmetro que é um objeto
  if (Object.keys(animal).length === 1) {
    // find procura pelo nome do animal e o residents.length (array) retorna a quantidade dele
    countAnimal = species.find((element) => element.name === specie).residents.length;
    return countAnimal;
  } if (Object.keys(animal).length === 2) {
    countAnimal = species.find((e) => e.name === specie).residents;
    // Filtrei pelo sexo do animal com o filter, que me retorna um array. Com .lenght tenho a qtd
    return countAnimal.filter((e) => e.sex === sex).length;
  }
}

// countAnimals({ specie: 'penguins', sex: 'male' });

module.exports = countAnimals;
