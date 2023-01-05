export class BasketItem {
  constructor(
    public readonly id: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly basketId: string,
    public readonly price: number,
    public readonly description: string,
    public readonly attributes: object
  ) {}
}
