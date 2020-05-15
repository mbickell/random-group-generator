export const generateRandomNumber = array => Math.floor(Math.random() * array.length);

export const generateGroupContainers = numberOfGroups => {
  const groupContainers = [];
  numberOfGroups++;
  for (let i = 1; i < numberOfGroups; i++) {
    groupContainers.push(`<section><h3>Group ${i}</h3><ul id="group-${i}"></ul></section>`);
  }
  return groupContainers;
};

export const renderGroupContainers = groupContainers => {
  groupContainers.forEach(group => {
    $("main").append(group);
  });
};

const setLoner = (array, numberOfGroups) => {
  if (array.length % numberOfGroups !== 0) {
    const loners = array.map(student => `<li>${student}</li>`).join("");
    const lonerBox = `<section><h3>Loner :(</h3><ul>${loners}</ul></section>`;
    $("main").append(lonerBox);
  }
};

const putNologists = (array, groupSize) => {
  let groupArray = [];
  for (let i = 0; i < groupSize; i++) {
    array[0] ? (groupArray += `<li>${array.shift()}</li>`) : "";
  }
  return groupArray;
};

export const insertNologists = (array, numberOfGroups) => {
  const groupSize = Math.ceil(array.length / numberOfGroups);
  for (let i = 1; i <= numberOfGroups; i++) {
    $(`#group-${i}`).append(putNologists(array, groupSize));
  }
  setLoner(array, numberOfGroups);
};

export const generateRandomNologists = array => {
  let randomNologists = [];
  while (array.length > 0) {
    randomNologists.push(array.splice(generateRandomNumber(array), 1));
  }
  return randomNologists.flat();
};
