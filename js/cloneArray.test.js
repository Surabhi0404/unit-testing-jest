const { expect } = require("@jest/globals");
const cloneArray = require("./cloneArray");

test("Cloning an array", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});
