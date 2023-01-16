export interface ServiceItemProps {
 readonly sku: string,
 readonly price: number,
 readonly salePrice: number,
 readonly onSale: boolean,
 readonly createdAt: Date,
 readonly updatedAt: Date
}