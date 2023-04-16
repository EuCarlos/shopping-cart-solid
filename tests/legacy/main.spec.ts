import { ShoppingCartLegacy } from '../../src/legacy/shopping-cart-legacy';

describe('should be ok', () => {
  const shoppingCartLegaShoppingCartLegacy = new ShoppingCartLegacy();

  shoppingCartLegaShoppingCartLegacy.addItem({
    name: 'Camiseta',
    price: 49.91,
  });

  shoppingCartLegaShoppingCartLegacy.addItem({
    name: 'Caderno',
    price: 9.9123,
  });

  shoppingCartLegaShoppingCartLegacy.addItem({
    name: 'Lápis',
    price: 1.59,
  });

  it('should return an object with the name and price of the products in the shopping cart', () => {
    // shoppingCartLegaShoppingCartLegacy.items[0] = { name: 'João', price: 49 }; // Readonly
    expect('open').toBe(shoppingCartLegaShoppingCartLegacy.items);
  });

  it('should return the total purchase', () => {
    expect(61.41).toBe(shoppingCartLegaShoppingCartLegacy.total());
  });

  it('should close the purchase of the shopping cart', () => {
    const EXPECTED_SHOPPING_CART = [
      { name: 'Camiseta', price: 49.91 },
      { name: 'Caderno', price: 9.9123 },
      { name: 'Lápis', price: 1.59 },
    ];

    expect(EXPECTED_SHOPPING_CART).toMatchObject(
      shoppingCartLegaShoppingCartLegacy.orderStatus,
    );
    shoppingCartLegaShoppingCartLegacy.checkout();
    expect([]).toMatchObject(shoppingCartLegaShoppingCartLegacy.orderStatus);
  });
});
