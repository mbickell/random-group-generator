export const generateRandomNumber = array => Math.floor(Math.random() * array.length);

export const findNumberOfGroups = (peoplePerGroup, nologists) =>
  nologists.length % peoplePerGroup ? Math.ceil(nologists.length / peoplePerGroup) : nologists.length / peoplePerGroup;

// const isThereEnoughPeople = (array, numberOfGroups) => array.length % numberOfGroups

export const randomiseNologists = orderedNologists => orderedNologists.sort((a, b) => 0.5 - Math.random());

export const createRandomGroups = (randomNologists, peoplePerGroup) => {
  const groups = [];

  randomNologists.forEach((nologist, index) => {
    if (!groups[Math.floor(index / peoplePerGroup)]) {
      groups[Math.floor(index / peoplePerGroup)] = [nologist];
    } else {
      groups[Math.floor(index / peoplePerGroup)].push(nologist);
    }
  });

  return groups;
};

export const createGroupContainers = numberOfGroups => {
  for (let i = 1; i <= numberOfGroups; i++)
    document.querySelector("main").innerHTML += `<section><h3>Group ${i}</h3><ul id="group-${i}"></ul></section>`;
};

export const insertNologists = groups => {
  groups.forEach((group, groupNumber) => {
    const groupContainer = document.querySelector(`#group-${groupNumber + 1}`);
    group.forEach(nologist => {
      groupContainer.innerHTML += `<li>${nologist}</li>`;
    });
  });
};

// export const renderGroupContainers = groupContainers => {
//   groupContainers.forEach(group => {
//     $("main").append(group);
//   });
// };

// const putNologists = (array, groupSize) => {
//   let groupArray = [];
//   for (let i = 0; i < groupSize; i++) {
//     array[0] ? (groupArray += `<li>${array.shift()}</li>`) : "";
//   }
//   return groupArray;
// };

// export const insertNologists = (array, numberOfGroups) => {
//   const groupSize = Math.ceil(array.length / numberOfGroups);
//   for (let i = 1; i <= numberOfGroups; i++) {
//     $(`#group-${i}`).append(putNologists(array, groupSize));
//   }
//   setLoner(array, numberOfGroups);
// };

// export const generateRandomNologists = array => {
//   let randomNologists = [];
//   while (array.length > 0) {
//     randomNologists.push(array.splice(generateRandomNumber(array), 1));
//   }
//   return randomNologists.flat();
// };
