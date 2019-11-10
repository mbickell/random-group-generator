import {
  generateRandomNologists,
  insertNologists,
  generateGroupContainers,
  renderGroupContainers
} from "./groupGeneration.js";

let nologists = [
  "Adam",
  "Aleo",
  "Alex",
  "Clara",
  "Dan",
  "Kat",
  "Matt",
  "Maya",
  "Sam"
];


const generateGroupLoop = () => {
  nologists = [
    "Adam",
    "Aleo",
    "Alex",
    "Clara",
    "Dan",
    "Kat",
    "Matt",
    "Maya",
    "Sam"
  ];

  $("main").empty();

  let colorArray = [];
  while (colorArray.length < 10) {
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    colorArray.push(`rgb(${r}, ${g}, ${b})`);

  }


  const numberOfGroups = $("#numberOfGroups").val();
  renderGroupContainers(generateGroupContainers(numberOfGroups));
  insertNologists(generateRandomNologists(nologists), numberOfGroups);


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
