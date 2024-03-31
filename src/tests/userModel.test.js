import userModel from '../models/userModel';

test('findUserById should return the correct user object for a valid ID', () => {
  const user = userModel.findUserById(1);
  expect(user).toBe({
    id: 1,
    name: "Alice Farmer",
    email: "alice@example.com",
    password: "alice123!",
    role: "vendor"
  });
});

test('findUserById should return undefined for an invalid ID', () => {
  const user = userModel.findUserById(10); 
  expect(user).toBeUndefined();
});

test('validateUsername should return true for an existing username', () => {
  const isValid = userModel.validateUsername("Bob Buyer");
  expect(isValid).toBe(true);
});

test('validateUsername should return false for a non-existing username', () => {
  const isValid = userModel.validateUsername("NonExistingUser");
  expect(isValid).toBe(false);
});

test('validatePassword should return true for a valid password', () => {
  const isValid = userModel.validatePassword("alice@example.com", "alice123!");
  expect(isValid).toBe(true);
});

test('validatePassword should return false for an invalid password', () => {
  const isValid = userModel.validatePassword("alice@example.com", "wrongpassword");
  expect(isValid).toBe(false);
});

test('validatePassword should return false for a non-existing email', () => {
  const isValid = userModel.validatePassword("nonexisting@example.com", "somepassword");
  expect(isValid).toBe(false);
});
