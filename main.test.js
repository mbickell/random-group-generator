import * as functions from "./groupGeneration";

describe("Random groups", () => {
  let nologists = ["Adam", "Aleo", "Alex", "Clara", "Dan", "Kat", "Matt", "Maya", "Sam"];
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.5;
  global.Math = mockMath;

  test("A random number based on the length of the array should be generated", () => {
    expect(functions.generateRandomNumber(nologists)).toBe(4);
  });

  test("Based on the random number, nologists should be placed in a new array", () => {
    expect(functions.generateRandomNologists(nologists)[0]).toBe("Dan");
  });

  test("A string of <li> tags should be generated, based on the size of groups");
  expect(functions.generateGroups(nologists, 3)).toBe("<ul><li>Dan</li><li>Kat</li><li>Matt</li></ul>");
});
