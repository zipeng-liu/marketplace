const { Cart } = require("./inventory");

describe("Add items on cart", () => {
    const cart = new Cart();
    const product = { id: 2, name: "egg", quantity: 1 }
    const otherProduct = { id: 3, name: "bread", quantity: 1}
    cart.addItem(product, 1);
    cart.addItem(product, 3);
    cart.addItem(otherProduct, 1);

    test("return true if the cart only adds egg quantity if egg is already in cart", () => {
        // addItem 3 times (2 times for egg, 1 time for bread), but expect 2 items in the cart
        expect(cart.items.length).toBe(2) 

        // check quantity of egg
        expect(cart.items[0].quantity).toBe(4);
       
    })

    test("return true if bread added in cart with quantity 1", () => {
        expect(cart.items[1].quantity).toBe(1)
    })
})