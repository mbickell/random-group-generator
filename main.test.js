import * as functions from "./static/modules/groupGeneration.js";

describe("Random groups", () => {
  let people = ["Adam", "Aleo", "Alex", "Clara", "Dan", "Kat", "Matt", "Maya", "Sam"];
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.5;
  global.Math = mockMath;

  test("A random number based on the length of the array should be generated", () => {
    expect(functions.generateRandomNumber(people)).toBe(4);
  });

  test("Based on the random number, people should be placed in a new array", () => {
    expect(functions.randomisePeople(people)[0]).toBe("Adam");
  });
});
