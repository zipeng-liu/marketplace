const database = {
  users: [
    {
      id: 1,
      name: "Alice Farmer",
      email: "alice@example.com",
      password: "alice123!",
      role: "vendor"
    },
    {
      id: 2,
      name: "Bob Buyer",
      email: "bob@example.com",
      password: "bob123!",
      role: "buyer"
    },
    {
      id: 3,
      name: "Charlie Farmer",
      email: "charlie@example.com",
      password: "charlie123!",
      role: "vendor"
    },
    {
      id: 4,
      name: "David Buyer",
      email: "david@example.com",
      password: "david123!",
      role: "buyer"
    }
  ],
  items: [
    {
      id: 1,
      name: "Organic Apples",
      price: 2.5,
      quantity: 100,
      vendorId: 1 // Alice Farmer
    },
    {
      id: 2,
      name: "Fresh Corn",
      price: 1.75,
      quantity: 50,
      vendorId: 1 // Alice Farmer
    },
    {
      id: 3,
      name: "Juicy Tomatoes",
      price: 3.0,
      quantity: 75,
      vendorId: 3 // Charlie Farmer
    }
  ],
  orders: [
    {
      id: 1,
      itemId: 1,
      quantity: 10,
      buyerId: 2, // Bob Buyer
      totalPrice: 25
    },
    {
      id: 2,
      itemId: 3,
      quantity: 5,
      buyerId: 4, // David Buyer
      totalPrice: 15
    }
  ],
  reviews: [
    {
      id: 1,
      itemId: 1,
      userId: 2, // Bob Buyer
      rating: 4,
      comment: "The apples were delicious!"
    },
    {
      id: 2,
      itemId: 3,
      userId: 4, // David Buyer
      rating: 5,
      comment: "Best tomatoes I've ever tasted."
    }
  ]
};

export { database };

