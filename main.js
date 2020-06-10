import nologists from "./static/data/nologsists.js";

import {
  randomiseNologists,
  findNumberOfGroups,
  createRandomGroups,
  createGroupContainers,
  insertNologists,
} from "./static/modules/groupGeneration.js";

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
