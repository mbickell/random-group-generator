import {
  generateRandomNologists,
  insertNologists,
  generateGroupContainers,
  renderGroupContainers,
} from "./groupGeneration.js";

let nologists = [
  "Emmanuel",
  "Will",
  "Aqeel",
  "Louis",
  "Toby",
  "Stephanie",
  "Martin",
  "Roki",
  "Cherise",
  "Rebecca",
  "Edward",
  "Mairead",
  "Melissa",
  "Cristian",
  "Phillip",
  "Niall",
  "Amina",
  "Oliver",
  "Shane",
  "Edwin",
  "Severine",
  "David",
  "Sumit",
];

const generateGroupLoop = () => {
  let copyNologists = [...nologists];

  $("main").empty();

  let colorArray = [];
  while (colorArray.length < 10) {
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    colorArray.push(`rgb(${r}, ${g}, ${b})`);
  }

  let numberOfGroups = $("#numberOfGroups").val();
  if (numberOfGroups > nologists.length) {
    numberOfGroups = nologists.length;
    $("#numberOfGroups").val(nologists.length);
  } else if (numberOfGroups < 1) {
    numberOfGroups = 1;
    $("#numberOfGroups").val(1);
  }
  console.log(numberOfGroups);
  renderGroupContainers(generateGroupContainers(numberOfGroups));
  insertNologists(generateRandomNologists(copyNologists), numberOfGroups);

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
