let allPeople = ["Matt", "Rebecca", "Charlie", "Charlotte", "Sean "];

import {
  randomisePeople,
  createRandomGroups,
  createGroupContainers,
  insertPeople,
  insertDefaultPeopleInTextAre,
  createColourArray,
  flashColours
} from "./static/modules/groupGeneration.js";

const numberPerGroup = document.querySelector("#number-of-people-per-group");
const textArea = document.querySelector("#people");

const generateGroupLoop = (people, groupName) => {
  const randomPeople = randomisePeople(people);

  const peoplePerGroup = numberPerGroup.value;

  const groups = createRandomGroups(randomPeople, peoplePerGroup);

  createGroupContainers(groups.length, groupName);
  insertPeople(groups, groupName);
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  if (numberPerGroup.value <= allPeople.length) {
    document.querySelector("main").innerHTML = "";

    const people = textArea.value;
    const peopleArr = people.split(",");

    generateGroupLoop(peopleArr, "Group");
    flashColours(createColourArray());
  }
});

numberPerGroup.max = allPeople.length;
numberPerGroup.min = 1;

insertDefaultPeopleInTextAre(allPeople);

textArea.addEventListener("input", (event) => {
  const names = event.target.value;

  allPeople = names.split(",");
  const allPeopleLength = allPeople.length;

  numberPerGroup.max = allPeopleLength;
});
