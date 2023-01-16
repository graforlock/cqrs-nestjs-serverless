export interface ServiceItemEntityKey {
  id: String;
}

export interface ServiceItemEntity extends ServiceItemEntityKey {
  id: string,
  sku: string,
  price: number,
  salePrice: number,
  onSale: boolean,
  createdAt: Date,
  updatedAt: Date
}