const nologists = [
  "Adam", "Aleo", "Alex", "Clara", "Dan", "Kat", "Matt", "Maya", "Sam"
];

const generateRandomNumber = array => Math.floor(Math.random() * array.length);

const generateRandomGroups = array => {
  let nologist;
  let randomNologists = [];
  while (array.length > 0) {
    nologist = array.splice(generateRandomNumber(array), 1);
    randomNologists.push(nologist);
  }
  return randomNologists;
}

const randomNologists = generateRandomGroups(nologists);


$("#group-one").append(`<ul><li>${randomNologists[0]}</li><li>${randomNologists[1]}</li><li>${randomNologists[2]}</li></ul>`)
$("#group-two").append(`<ul><li>${randomNologists[3]}</li><li>${randomNologists[4]}</li><li>${randomNologists[5]}</li></ul>`)
$("#group-three").append(`<ul><li>${randomNologists[6]}</li><li>${randomNologists[7]}</li><li>${randomNologists[8]}</li></ul>`)