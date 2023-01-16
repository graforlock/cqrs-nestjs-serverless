import { Schema } from 'dynamoose';

export const ServiceItemSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
  },
  sku: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  salePrice: {
    type: Number,
    required: true
  },
  onSale: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  }
});