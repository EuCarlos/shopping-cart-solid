export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercertDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercertDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class NoDiscount extends Discount {}
