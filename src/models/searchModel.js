function validateSearch(input, content) {
  // Check if input is empty
  if (!input) return false;
  // Check if content includes the input
  return content.includes(input);
}

module.exports = validateSearch;
