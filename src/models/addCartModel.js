class Cart {
    constructor() {
        this.items = []
    }

    addItem (product, quantity) {
        const existProductIndex = this.items.findIndex(item => item.product.id === product.id);
        if(existProductIndex >= 0) {
            this.items[existProductIndex].quantity += quantity;
        } else {
            this.items.push({ product, quantity })
        }
    }
}

module.exports = { Cart }