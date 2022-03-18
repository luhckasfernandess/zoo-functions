const data = require('../data/zoo_data');

function isManager(id) {
  // O some percorre o array employees e retorna true se encontrar ALGUM id de um gerente
  // Ou retorna false se ñ encontrar nenhum
  const manager = data.employees.some((element) => element.managers.includes(id));
  return manager;
  /*
   // Verifica se é gerente ou não com switch
  switch (id) {
  case '9e7d4524-363c-416a-8759-8aa7e50c0992':
    return true;
  case 'fdb2543b-5662-46a7-badc-93d960fdc0a8':
    return true;
  case '0e7b460e-acf4-4e17-bcb3-ee472265db83':
    return true;
  // Retorna falso se não for nenhum caso acima
  default: return false;
  } */
}

// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function getRelatedEmployees(managerId) {
  // Quando o id ñ for de um gerente dispara um erro com o throw
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  // Try executa tudo oq era pra dar certo
  try {
    // Para usar o método includes eu consultei a fonte abaixo
    // Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    // Retorna um array com os dados de todos os funcionários que é responsável, mas quero só os nomes deles.
    const employees = data.employees.filter((element) => element.managers.includes(managerId));
    // Usando map e template literals para retornar um array com nome e sobrenome
    // Template literals para retornar duas variáveis pq só com && ñ deu certo
    const relatedEmployees = employees.map((e) => `${e.firstName} ${e.lastName}`);
    return relatedEmployees;
  } catch (error) {
    // Captura e retorna o erro
    return error.message;
  }
}
/*
Eu não acredito que tava batendo cabeça só pq esse console.log não tava comentado!
console.log(getRelatedEmployees('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
Bom pelo menos eu aperfeiçoei meu código mas quase acreditei que não tava aprendendo e entendendo mais nada
Acho que nos requisitos anteriores deu erro por causa disso tmb
 */

module.exports = { isManager, getRelatedEmployees };
