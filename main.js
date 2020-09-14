import { allNologists, wolffish, frilledSharks, spiderCrabs } from "./static/data/nologsists.js";

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

addCheckboxes(allNologists);

const checkboxes = document.querySelectorAll("aside input");
const numberPerGroup = document.querySelector("#number-of-people-per-group");

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("click", event => {
    const id = event.target.id.replace(/\D/g, "");

    allNologists.includes(event.target.value) ? (allNologists[id] = "") : (allNologists[id] = event.target.value);
    numberPerGroup.max = allNologists.filter(nologist => nologist).length;
  });
});

const generateGroupLoop = (nologists, groupName) => {
  const filteredNologists = nologists.filter(nologist => nologist).sort();
  const randomNologists = randomiseNologists(filteredNologists);

  const peoplePerGroup = numberPerGroup.value;
  // const numberOfGroups = findNumberOfGroups(peoplePerGroup, randomNologists);

  const groups = createRandomGroups(randomNologists, peoplePerGroup);

  createGroupContainers(groups.length, groupName);
  insertNologists(groups, groupName);
};

const generateAnimalOrCourseGroups = () => {
  document.querySelector("main").innerHTML = "";

  if (document.querySelector("#animal-groups").checked) {
    generateGroupLoop(wolffish, "Wolffish");
    generateGroupLoop(spiderCrabs, "Crabs");
    generateGroupLoop(frilledSharks, "Sharks");
  } else {
    generateGroupLoop(allNologists, "Group");
  }
  flashColours(createColourArray());
};

document.querySelector("#generateButton").addEventListener("click", () => {
  generateAnimalOrCourseGroups();
});

document.querySelector("form").addEventListener("keydown", event => {
  if (event.which === 13 && numberPerGroup.value <= allNologists.filter(nologist => nologist).length) {
    event.preventDefault();
    generateAnimalOrCourseGroups();
  }
});

numberPerGroup.max = allNologists.filter(nologist => nologist).length;
numberPerGroup.min = 1;
