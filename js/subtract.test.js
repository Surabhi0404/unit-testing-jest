const { expect } = require("@jest/globals");
const subtract = require("./subtract");

test("Subtracting two numbers", () => {
  expect(subtract(2, 1)).toBe(1);
});
