let nologists = [
  "Adam", "Aleo", "Alex", "Clara", "Dan", "Kat", "Matt", "Maya", "Sam"
];
let randomNologists = [];

const generateRandomNumber = array => Math.floor(Math.random() * array.length);

const insertNologists = (array) => {
  $("#group-one").append(`<ul><li>${array[0]}</li><li>${array[1]}</li><li>${array[2]}</li></ul>`)
  $("#group-two").append(`<ul><li>${array[3]}</li><li>${array[4]}</li><li>${array[5]}</li></ul>`)
  $("#group-three").append(`<ul><li>${array[6]}</li><li>${array[7]}</li><li>${array[8]}</li></ul>`)
}


const generateRandomGroups = array => {
  while (array.length > 0) {
    randomNologists.push(array.splice(generateRandomNumber(array), 1));
  }
  insertNologists(randomNologists);
}

generateRandomGroups(nologists);

$("button").click( () => {
  nologists = ["Adam", "Aleo", "Alex", "Clara", "Dan", "Kat", "Matt", "Maya", "Sam"];
  randomNologists = [];
  generateRandomGroups(nologists);
})

