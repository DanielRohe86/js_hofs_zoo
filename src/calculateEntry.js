const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childLength = entrants.filter((people) => people.age < 18).length;
  const adultLength = entrants.filter((people) => people.age >= 18 && people.age < 50).length;
  const seniorLength = entrants.filter((people) => people.age >= 50).length;

  return { child: childLength, adult: adultLength, senior: seniorLength };
}

function calculateEntry(entrants) {
  const childProfit = countEntrants(entrants).child * data.prices.child;
  const adultProfit = countEntrants(entrants).adult * data.prices.adult;
  const seniorProfit = countEntrants(entrants).senior * data.prices.senior;

  const totalProfit = childProfit + adultProfit + seniorProfit;
  return totalProfit;
}

// console.log(calculateEntry(entrants));
// console.log(data.prices);

// const child = entrants.filter((people) => people.age < 18);
// const adult = entrants.filter((people) => people.age >= 18 && people.age < 50);
// const senior = entrants.filter((people) => people.age >= 50);
// console.log(child.length);
// console.log(adult);
// console.log(senior);

// const ages = entrants.map((element) => element.age);
// console.log(ages);
// RETORNO: [ 5, 5, 5, 18, 18, 50 ]

// console.log(countEntrants(entrants));
// RETORNO: { child: 3, adult: 2, senior: 1 }

module.exports = { calculateEntry, countEntrants };
