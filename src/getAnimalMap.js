const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// Retorna animais categorizados por localização
const animalsByLocation = {
  // filter procura a localização e map retorna array com nomes animais
  NE: species.filter((e) => e.location === 'NE').map((e) => e.name),
  NW: species.filter((e) => e.location === 'NW').map((e) => e.name),
  SE: species.filter((e) => e.location === 'SE').map((e) => e.name),
  SW: species.filter((e) => e.location === 'SW').map((e) => e.name),
};

const lookForAnimals = (name, sex, sorted) => {
  // Procura os animais pelo nome que vem do array do objeto animalsByLocation
  const lookFor = species.find((e) => e.name === name).residents;
  // Retorna animais por sexo ordenados
  if (typeof sorted !== 'undefined' && typeof sex !== 'undefined') {
    // Filtra pelo sexo e depois retorna array de nomes sorteados
    const animalsBySexSorted = lookFor.filter((e) => e.sex === sex).map((i) => i.name).sort();
    return animalsBySexSorted;
  }
  // Ordena os nomes dos animais
  if (sorted) return lookFor.map((e) => e.name).sort();
  // Retorna os nomes dos animais pelo sexo
  if (typeof sex !== 'undefined') return lookFor.filter((e) => e.sex === sex).map((i) => i.name);
  // Retorna os nomes dos animais
  return lookFor.map((e) => e.name);
};
// Retorna nomes dos animais, nome dos animais sorteados ou nomes dos animais pelo sexo
const animalsBy = (sex, sorted) => {
  // Cria um novo objeto com as chaves sendo localizaçao, os valores sendo o tipo do animal e seus nomes
  const newAnimalObject = Object.keys(animalsByLocation).reduce((acc, cur) => {
    acc[cur] = animalsByLocation[cur].map((name) => ({
      [name]: lookForAnimals(name, sex, sorted),
    }));
    return acc;
  }, {});
  return newAnimalObject;
};

const getAnimalMap = (options) => {
  // Se qualquer coisa como parâmetro for passado
  if (!options) {
    return animalsByLocation;
  }
  const { includeNames, sex, sorted } = options;
  // Se options tiver includesNames
  if (includeNames) return animalsBy(sex, sorted);
  // Se nenhum parâmetro for passado
  return animalsByLocation;
};
// console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
// Não tá dando certo. O que eu não vejo?
module.exports = getAnimalMap;
