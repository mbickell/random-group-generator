/* 
Change to number of people per group.
Find number of groups needed
Create random arrays for groups
Render those arrays into group containers
Profit
*/

import {
  randomiseNologists,
  findNumberOfGroups,
  createRandomGroups,
  createGroupContainers,
  insertNologists,
} from "./groupGeneration.js";

import nologists from "./nologsists.js";

// const randomNologists = randomiseNologists(nologists);

// const groups = createRandomGroups(randomNologists, 3);

// createGroupContainers(7);

// insertNologists(groups);

const generateGroupLoop = () => {
  const randomNologists = randomiseNologists([...nologists].sort());

  document.querySelector("main").innerHTML = "";

  let colorArray = [];
  while (colorArray.length < 10) {
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    colorArray.push(`rgb(${r}, ${g}, ${b})`);
  }

  const peoplePerGroup = document.querySelector("#number-of-people-per-group").value;
  const numberOfGroups = findNumberOfGroups(peoplePerGroup, randomNologists);
  console.log(numberOfGroups);

  const groups = createRandomGroups(randomNologists, peoplePerGroup);
  console.log(groups);

  createGroupContainers(numberOfGroups);
  insertNologists(groups);

  $("main > *").css("opacity", "0");
  colorArray.forEach((color, index) => {
    setTimeout(() => {
      $("#curtain").css("background-color", color);
      $("main").css("background-color", color);
    }, 300 * index);
  });
  setTimeout(() => {
    $("main > *").css("opacity", "1");
  }, 300 * colorArray.length);
};

$("#generateButton").click(generateGroupLoop);

$("form").keydown(e => {
  if (e.which == 13) {
    generateGroupLoop();
    return false;
  }
});

$("#numberOfGroups").attr({
  max: nologists.length,
  min: 1,
});
