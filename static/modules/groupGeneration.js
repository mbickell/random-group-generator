export const generateRandomNumber = maximumNumber => Math.floor(Math.random() * maximumNumber);

export const findNumberOfGroups = (peoplePerGroup, nologists) =>
  nologists.length % peoplePerGroup ? Math.ceil(nologists.length / peoplePerGroup) : nologists.length / peoplePerGroup;

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

export const insertNologists = (groups, groupName) => {
  groups.forEach((group, groupNumber) => {
    const groupContainer = document.querySelector(`#${groupName}-${groupNumber + 1}`);
    group.forEach(nologist => {
      groupContainer.innerHTML += `<li>${nologist}</li>`;
    });
  });
};

export const addCheckboxes = nologists => {
  const aside = document.querySelector("aside");
  nologists.forEach((nologist, index) => {
    aside.innerHTML += `
      <div>
        <input type="checkbox" id=nologist-${index} name=nologist-${index} value=${nologist} checked>
        <label for=nologist-${index}>${nologist}</label>
      </div>
    `;
  });
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
