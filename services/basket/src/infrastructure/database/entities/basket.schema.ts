import { Schema } from 'dynamoose';

export const BasketSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
  },
  userId: {
    type: String,
  },
  items: {
    type: Array,
  },
});