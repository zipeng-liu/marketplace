import { database } from './database'; // Import the database object

const userModel = {
  // Function to find a user by ID
  findUserById: (userId) => {
    return database.users.find(user => user.id === userId);
  },

  // Function to validate username
  validateUsername: (username) => {
    // Assuming username should be unique
    const existingUser = database.users.find(user => user.name === username);
    return existingUser ? true : false; // Return true if username exists, false otherwise
  },

  // Function to validate password
  validatePassword: (email, password) => {
    // Find user by email
    const user = database.users.find(user => user.email === email);
    if (user) {
      // Compare passwords
      return user.password === password;
    } else {
      return false; // User not found
    }
  }
};

export default userModel;
