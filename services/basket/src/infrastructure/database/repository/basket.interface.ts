export interface BasketKey {
  id: String;
}

export interface Basket extends BasketKey {
  userId: String;
  items: Array<object>;
}