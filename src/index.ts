import { ShoppingCart } from './srp/shopping-cart';

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.91 });
shoppingCart.addItem({ name: 'Caderno', price: 9.9123 });
shoppingCart.addItem({ name: 'Lápis', price: 1.59 });
// shoppingCart.clear();

// shoppingCart.items[0] = { name: 'João', price: 49 }; // Readonly

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
