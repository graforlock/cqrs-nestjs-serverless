export class UpdateServiceItemDto {
  constructor(
    public readonly sku: string,
    public readonly price: number,
    public readonly salePrice: number,
    public readonly onSale: boolean,
    public readonly createdAt: Date,
    public readonly updatedAt: Date
  ) {}
}
