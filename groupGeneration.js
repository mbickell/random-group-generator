export const generateRandomNumber = array =>
  Math.floor(Math.random() * array.length);

// export const resetGroups = () => {
//   $("#group-two").empty();
//   $("#group-one").empty();
//   $("#group-three").empty();
// };

// export const insertNologists = array => {
//   resetGroups();
//   $("#group-one").append(
//     `<h3>Group 1</h3><ul><li>${array[0]}</li><li>${array[1]}</li><li>${
//       array[2]
//     }</li></ul>`
//   );
//   $("#group-two").append(
//     `<h3>Group 2</h3><ul><li>${array[3]}</li><li>${array[4]}</li><li>${
//       array[5]
//     }</li></ul>`
//   );
//   $("#group-three").append(
//     `<h3>Group 3</h3><ul><li>${array[6]}</li><li>${array[7]}</li><li>${
//       array[8]
//     }</li></ul>`
//   );
// };

export const insertNologists = (array, numberOfGroups, groupSize) => {
  for (let i = 1; i <= numberOfGroups; i++) {
    $(`#group-${i}`).append(putNologists(array, groupSize));
  }
};

const putNologists = (array, groupSize) => {
  let groupArray = [];
  for (let j = 0; j < groupSize; j++) {
    groupArray += `<li>${array.shift()}</li>`;
  }
  return groupArray;
};

export const generateRandomNologists = array => {
  let randomNologists = [];
  while (array.length > 0) {
    randomNologists.push(array.splice(generateRandomNumber(array), 1));
  }
  return randomNologists.flat();
};

// Create a function to generate <li>s between <ul>s. Take in array, amount of groups and size of groups
// export const generateGroups = (array, numberOfGroups, groupSize) => {
//   const whileCondition = (numberOfGroups - 1) * groupSize;
//   let groupArray = [];
//   array.forEach(person => {
//     while (array.length > whileCondition) {
//       groupArray.push(person);
//     }
//   });
// };

export const generateGroupContainers = numberOfGroups => {
  let groupContainers = [];
  for (let i = 1; i < numberOfGroups + 1; i++) {
    groupContainers.push(
      `<section><h3>Group ${i}</h3><ul id="group-${i}"></ul></section>`
    );
  }
  return groupContainers;
};

export const renderGroupContainers = groupContainers => {
  groupContainers.forEach(group => {
    $("main").append(group);
  });
};
