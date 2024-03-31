let inventory = {};

function addProduct(product) {
    return inventory[product.id] = product;
}

function reduceProductQuantity(productId, quantity) {
    return inventory[productId].quantity -= quantity;
}

function isProductInStock(productId) {
    const product = inventory[productId]
    return product && product.quantity > 0;
}

function resetInventory() {
    inventory = {};
}

module.exports = { isProductInStock, addProduct, reduceProductQuantity, resetInventory }