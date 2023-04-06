import { ShoppingCartLegacy } from './shopping-cart-legacy';

const shoppingCartLegaShoppingCartLegacy = new ShoppingCartLegacy();
shoppingCartLegaShoppingCartLegacy.addItem({ name: 'Camiseta', price: 49.91 });
shoppingCartLegaShoppingCartLegacy.addItem({ name: 'Caderno', price: 9.9123 });
shoppingCartLegaShoppingCartLegacy.addItem({ name: 'Lápis', price: 1.59 });
// shoppingCartLegaShoppingCartLegacy.clear();

// shoppingCartLegaShoppingCartLegacy.items[0] = { name: 'João', price: 49 }; // Readonly

console.log(shoppingCartLegaShoppingCartLegacy.items);
console.log(shoppingCartLegaShoppingCartLegacy.total());
shoppingCartLegaShoppingCartLegacy.checkout();
console.log(shoppingCartLegaShoppingCartLegacy.orderStatus);
