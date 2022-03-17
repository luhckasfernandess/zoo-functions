const data = require('../data/zoo_data');

// Vou usar um parâmetro rest para receber vários ids diferentes
// Obs: rest sempre vai me retornar a variável ids como array
// Ex.: ['lionId', 'tigersId']
function getSpeciesByIds(...ids) {
  // Como percorrer esse array e me retornar outro array?
  // Já usei filter e find que me fizeram concluir 2/3 requisitos mas como concluir o 3/3?

  // Eu havia usado o forEach mas ele não retorna nada então fui no Course e revisei o map que retorna um array tmb
  // Após quase ficar louco olha como ficou BIZARRAMENTE simples, meu eu do futuro, ñ se estressa  da próxima ;)

  return ids.map((index) => data.species.find((element) => element.id === index));
  // O map vai percorrer o meu array ids como se fosse o forEach ou for
  // Vai comparar cada elemento do array ids com o data.species que tmb é um array usando o find
  // E o find vai me retornar o primeiro elemento que antender a minha condição
  // E o ciclo vai se repetir enquanto o map ñ terminar de percorrer o meu array ids
  // Um megazord de HOFs um dentro do outro

  // Eu ñ acredito que em uma linha eu terminei esta coisa que me fez perder um dia inteiro.
}

// console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
