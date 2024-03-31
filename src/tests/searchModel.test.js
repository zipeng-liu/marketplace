const validateSearch = require(".././models/searchModel");

// mock content
const content = "This is some content to search within";

test("return false when user input is empty", () => {
  expect(validateSearch("", content)).toBe(false);
});

test("return true if the user input matches the content", () => {
  expect(validateSearch("some", content)).toBe(true);
});

test("return false if the user input does not match the content", () => {
  expect(validateSearch("absent", content)).toBe(false);
});
