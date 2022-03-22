const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const countChild = entrants.filter((e) => e.age < 18).length;
  const countAdult = entrants.filter((e) => e.age >= 18 && e.age < 50).length;
  const countSenior = entrants.filter((e) => e.age >= 50).length;
  const countTotal = { child: countChild, adult: countAdult, senior: countSenior };
  return countTotal;
}

function calculateEntry(entrants) {
  let calculate = 0;
  if (typeof entrants === 'undefined') return calculate;
  if (Object.keys(entrants).length === 0) return calculate;
  const count = countEntrants(entrants);
  // child: 20.99, adult: 49.99, senior: 24.99
  calculate = count.child * 20.99 + count.adult * 49.99 + count.senior * 24.99;
  console.log('apos calc', calculate);
  return calculate;
}

module.exports = { calculateEntry, countEntrants };
