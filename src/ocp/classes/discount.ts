export abstract class Discount {
  abstract calculate(value: number): number;
}

export class FiftyPercertDiscount extends Discount {
  private readonly discount = 0.5;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class TenPercertDiscount extends Discount {
  private readonly discount = 0.5;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
