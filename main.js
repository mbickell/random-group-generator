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

import {
  generateRandomNologists,
  insertNologists,
  // generateGroups,
  generateGroupContainers,
  renderGroupContainers
} from "./groupGeneration.js";

// insertNologists(generateRandomNologists(nologists))

$("button").click(() => {
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
  insertNologists(generateRandomNologists(nologists));
});

// insertNologists(generateRandomNologists(nologists))

// generateGroups(nologists, 3, 3);

renderGroupContainers(generateGroupContainers(3));

insertNologists(generateRandomNologists(nologists), 3, 3);
