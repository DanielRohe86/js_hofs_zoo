const data = require('../data/zoo_data');

const zooSpecies = data.species;
const mappedSpecies = zooSpecies.map((element) => element.name);
const zooDays = Object.keys(data.hours);

// console.log(zooDays);
// const reqTwo = zooDays.forEach((item) => {
//   const object = {
//     item,
//     officeHour: `Open from ${zooHours[item].open} until ${zooHours[item].close}`,
//     // exhibition: ANIMALS,
//   }
//   return object;
// })

// console.log(daysAndAnimals());
// console.log(Object.values(zooHours));
// // console.log(zooHours);
// console.log(zooDays);
// console.log(daysAndAnimals());

// const obj = zooDays.reduce((accumulator, element, index) => {
//   return {...accumulator, [element]: Object.values(zooHours)[index]};
// }, {});

// console.log(obj);

// RETORNA:
// {
//   Tuesday: { open: 8, close: 6 },
//   Wednesday: { open: 8, close: 6 },
//   Thursday: { open: 10, close: 8 },
//   Friday: { open: 10, close: 8 },
//   Saturday: { open: 8, close: 10 },
//   Sunday: { open: 8, close: 8 },
//   Monday: { open: 0, close: 0 }
// }

// FORMATAÇÃO DA PARTE 2
/* 'Tuesday': {
  'officeHour': 'Open from 8am until 6pm',
  'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
}, */

//   const justAnimals = data.species.map((element) => element.name)
//   if (justAnimals.includes(scheduleTarget)) {
// //deverá retornar um array com os dias em que ele está em exibição
//   const arrayOfAvailabilty = data.species.map((element) => element.availability);
//   return arrayOfAvailabilty;
//   }
//   if (scheduleTarget === DIA) {
// //se "Monday" for passado por parâmetro, deverá informar que o zoológico está fechado
//   }

// const createSchedule = () => { }

// // const justAnimals = data.species.map((element) => element.name)

// const arrayOfAvailabilty = data.species.map((element) => element.availability);

// const mapOfAnimals = data.species.map((element) =>
// object = {
//   animal: element.name,
//   days: element.availability
// });

// const filterOfDays = (day) => {
//   const daysFiltered = mapOfAnimals.filter((element) => (element.days.includes(day)));
//   return daysFiltered;
// }

// const hoursAndAnimals = (day) => {
//   const filterDay = data.hours.filter((element) => {element === day})
//   return filterDay;
// }

// { officerhour: , exhibition: }

// console.log(justAnimals);
// console.log(mapOfAnimals);
// console.log(filterOfDays('Friday'));
// console.log(filterOfDaysTwo('Friday'));
// console.log(hoursAndAnimals('Tuesday'));
// console.log(data.species);

// module.exports = getSchedule;

//  CALLBACKS

function getAnimalinThatDay(scheduleTarget) {
  const targetAnimal = zooSpecies.filter((animal) => (animal.name === scheduleTarget));
  return targetAnimal[0].availability;
}

function getScheduleHoursAnimal(scheduleTarget) {
  const hours = data.hours[scheduleTarget];
  if (scheduleTarget === 'Monday') {
    return { [scheduleTarget]: {
      officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
    } };
  }

  const animalsOfDay = (scheduleTarget) => {
    const animalsByDay = zooSpecies
      .filter((specie) => specie.availability.includes(scheduleTarget))
      .map((animal) => animal.name);
    return animalsByDay;
  };

  return { [scheduleTarget]: {
    officeHour: `Open from ${hours.open}am until ${hours.close}pm`,
    exhibition: animalsOfDay(scheduleTarget),
  } };
}

const fullSchedule = () => {
  return zooDays
    .reduce((acc, curr) => ({ ...acc, ...getScheduleHoursAnimal(curr) }), {});
};

// RESPOSTA FINAL

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return fullSchedule();
  }

  if (zooDays.includes(scheduleTarget)) {
    return getScheduleHoursAnimal(scheduleTarget);
  }

  if (mappedSpecies.includes(scheduleTarget)) {
    return getAnimalinThatDay(scheduleTarget);
  }

  if (!data.species.find((element) => element.name === scheduleTarget)) {
    return fullSchedule();
  }
}

// console.log(getScheduleAnimalDay);

// console.log(getSchedule('lions'));

module.exports = getSchedule;
