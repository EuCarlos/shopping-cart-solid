import { ShoppingCart } from '../../src/dip/classes/shopping-cart';
import { Order } from '../../src/dip/classes/order';
import { Messaging } from '../../src/dip/services/messaging';
import { Persistency } from '../../src/dip/services/persistency';
import { Product } from '../../src/dip/classes/product';
import { NoDiscount } from '../../src/dip/classes/discount';
import { EnterpriseCustomer } from '../../src/dip/classes/customer';

describe('should be ok', () => {
  const noDiscount = new NoDiscount();
  const shoppingCart = new ShoppingCart(noDiscount);
  const messaging = new Messaging();
  const persistency = new Persistency();
  // const individualCustomer = new IndividualCustomer(
  //   'Luiz',
  //   'Miranda',
  //   '111.111.111-11',
  // );
  const enterpriseCustomer = new EnterpriseCustomer(
    'Empresa Gigante',
    '2222222222222222',
  );

  const order = new Order(
    shoppingCart,
    messaging,
    persistency,
    enterpriseCustomer,
  );

  shoppingCart.addItem(new Product('Camiseta', 49.91));
  shoppingCart.addItem(new Product('Caderno', 9.9123));
  shoppingCart.addItem(new Product('Lápis', 1.59));

  it('should return an object with the name and price of the products in the shopping cart', () => {
    const EXPECTED_SHOPPING_CART = [
      { name: 'Camiseta', price: 49.91 },
      { name: 'Caderno', price: 9.9123 },
      { name: 'Lápis', price: 1.59 },
    ];

    expect(EXPECTED_SHOPPING_CART).toMatchObject(shoppingCart.items);
  });

  it('should return the total purchase', () => {
    expect(61.41).toBe(shoppingCart.total());
  });

  it('should return the total purchase with discount', () => {
    expect(61.41).toBe(shoppingCart.totalWithDicount());
  });

  it('should close the purchase of the shopping cart', () => {
    expect('open').toBe(order.orderStatus);
    order.checkout();
    expect('closed').toBe(order.orderStatus);
  });
});
