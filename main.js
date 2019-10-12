const nologists = [
  "Adam", "Aleo", "Alex", "Clara", "Dan", "Kat", "Matt", "Maya", "Sam"
];

const generateRandomNumber = array => Math.floor(Math.random() * array.length);

let randomNologists = [];
const generateRandomGroups = array => {
  while (array.length > 0) {
    randomNologists.push(array.splice(generateRandomNumber(array), 1));
  }  
}

generateRandomGroups(nologists);

$("#group-one").append(`<ul><li>${randomNologists[0]}</li><li>${randomNologists[1]}</li><li>${randomNologists[2]}</li></ul>`)
$("#group-two").append(`<ul><li>${randomNologists[3]}</li><li>${randomNologists[4]}</li><li>${randomNologists[5]}</li></ul>`)
$("#group-three").append(`<ul><li>${randomNologists[6]}</li><li>${randomNologists[7]}</li><li>${randomNologists[8]}</li></ul>`)