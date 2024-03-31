const { isProductInStock, addProduct, resetInventory, reduceProductQuantity, Cart } = require("./inventory");

describe("Inventory Management", () => {

    addProduct({id: 1, name: "Apple", quantity: 5 })

    test("return true if product is in stock", () => {
        expect(isProductInStock(1)).toBe(true)
    });

    test("return false if product is out of stock", () => {
        reduceProductQuantity(1, 5)
        expect(isProductInStock(1)).toBe(false)
    })
})