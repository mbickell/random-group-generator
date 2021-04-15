export const generateRandomNumber = maximumNumber => Math.floor(Math.random() * maximumNumber);

export const findNumberOfGroups = (peoplePerGroup, people) =>
  people.length % peoplePerGroup ? Math.ceil(people.length / peoplePerGroup) : people.length / peoplePerGroup;

export const randomisePeople = orderedPeople => orderedPeople.sort((a, b) => 0.5 - Math.random());

export const createRandomGroups = (randomPeople, peoplePerGroup) => {
  const groups = [];

  randomPeople.forEach((nologist, index) => {
    if (!groups[Math.floor(index / peoplePerGroup)]) {
      groups[Math.floor(index / peoplePerGroup)] = [nologist];
    } else {
      groups[Math.floor(index / peoplePerGroup)].push(nologist);
    }
  });

  if (groups[groups.length - 1].length === 1) {
    const finalPerson = groups.pop();
    groups[groups.length - 1].push(finalPerson[0]);
  }
  return groups;
};

export const createGroupContainers = (numberOfGroups, groupName) => {
  for (let i = 1; i <= numberOfGroups; i++)
    document.querySelector(
      "main"
    ).innerHTML += `<section class="group ${groupName}" ><h3>${groupName} ${i}</h3><ul id="${groupName}-${i}"></ul></section>`;
};

export const insertPeople = (groups, groupName) => {
  groups.forEach((group, groupNumber) => {
    const groupContainer = document.querySelector(`#${groupName}-${groupNumber + 1}`);
    group.forEach(nologist => {
      groupContainer.innerHTML += `<li>${nologist}</li>`;
    });
  });
};

export const insertDefaultPeopleInTextAre = people => {
  const textArea = document.querySelector("#people");
    textArea.value = people.join(", ");
};

export const createColourArray = () => {
  const colorArray = [];
  while (colorArray.length < 10) {
    const r = generateRandomNumber(256);
    const g = generateRandomNumber(256);
    const b = generateRandomNumber(256);
    colorArray.push(`rgb(${r}, ${g}, ${b})`);
  }
  colorArray.push("rgb(230, 230, 230)");
  return colorArray;
};

const changeOpacity = (elements, opacity) => {
  elements.forEach(element => {
    element.style.opacity = opacity;
  });
};

export const flashColours = colourArray => {
  const allElements = document.querySelectorAll("main > *");
  changeOpacity(allElements, 0);
  colourArray.forEach((color, index) => {
    setTimeout(() => {
      document.querySelector("main").style.backgroundColor = color;
    }, 300 * index);
  });
  setTimeout(() => {
    changeOpacity(allElements, 1);
  }, 300 * colourArray.length);
};
