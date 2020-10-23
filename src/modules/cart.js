export function addToCart(products) {
    const cart = getCartItems()
    localStorage.setItem('cart', JSON.stringify([
        ...cart, products
    ]));

}

export function getCartItems() {
    const data = localStorage.getItem('cart')
    if (!data) return []
    return JSON.parse(data)
}