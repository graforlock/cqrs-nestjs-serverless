import * as dynamoose from 'dynamoose';

const BasketSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true
  },
  part: {
    type: String,
    rangeKey: true
  },
  userId: {
    type: String
  },
  items: {
    type: Array
  }
})

export { BasketSchema };