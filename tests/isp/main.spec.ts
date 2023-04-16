import { Messaging } from '../../src/isp/services/messaging';
import { Order } from '../../src/isp/classes/order';
import { Persistency } from '../../src/isp/services/persistency';
import { Product } from '../../src/isp/classes/product';
import { ShoppingCart } from '../../src/isp/classes/shopping-cart';
import { TenPercertDiscount } from '../../src/isp/classes/discount';
import { IndividualCustomer } from '../../src/isp/classes/customer';

describe('should be ok', () => {
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
    expect(55.269).toBe(shoppingCart.totalWithDicount());
  });

  it('should close the purchase of the shopping cart', () => {
    expect('open').toBe(order.orderStatus);
    order.checkout();
    expect('closed').toBe(order.orderStatus);
  });
});
