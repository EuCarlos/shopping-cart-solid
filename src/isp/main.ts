import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { TenPercertDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

// const fiftyPercertDiscount = new FiftyPercertDiscount();
const tenPercertDiscount = new TenPercertDiscount();
const shoppingCart = new ShoppingCart(tenPercertDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Carlos',
  'Alves',
  '111.111.111-11',
);

// const enterpriseCustomer = new EnterpriseCustomer('A. Soft', '111.111.111-11');

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
