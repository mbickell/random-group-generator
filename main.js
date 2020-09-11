import nologists from "./static/data/nologsists.js";

import {
  randomiseNologists,
  findNumberOfGroups,
  createRandomGroups,
  createGroupContainers,
  insertNologists,
  addCheckboxes,
  createColourArray,
  flashColours
} from "./static/modules/groupGeneration.js";

addCheckboxes(nologists);

const checkboxes = document.querySelectorAll("aside input");
const numberPerGroup = document.querySelector("#number-of-people-per-group");

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("click", event => {
    const id = event.target.id.replace(/\D/g, "");

    nologists.includes(event.target.value) ? (nologists[id] = "") : (nologists[id] = event.target.value);
    numberPerGroup.max = nologists.filter(nologist => nologist).length;
  });
});

const generateGroupLoop = () => {
  const filteredNologists = nologists.filter(nologist => nologist).sort();
  const randomNologists = randomiseNologists(filteredNologists);

  document.querySelector("main").innerHTML = "";

  const peoplePerGroup = numberPerGroup.value;
  const numberOfGroups = findNumberOfGroups(peoplePerGroup, randomNologists);

  const groups = createRandomGroups(randomNologists, peoplePerGroup);

  createGroupContainers(numberOfGroups);
  insertNologists(groups);

  const colorArray = createColourArray();
  flashColours(colorArray);
};

document.querySelector("#generateButton").addEventListener("click", generateGroupLoop);

document.querySelector("form").addEventListener("keydown", event => {
  if (event.which === 13 && numberPerGroup.value <= nologists.filter(nologist => nologist).length) {
    event.preventDefault();
    generateGroupLoop();
    return false;
  }
});

numberPerGroup.max = nologists.filter(nologist => nologist).length;
numberPerGroup.min = 1;
