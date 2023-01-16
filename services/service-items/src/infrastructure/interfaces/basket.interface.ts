export interface IBasketRepository<T> {
  findOneById(id: string): Promise<T>;
  findAll(): Promise<T[]>;
  save(basket: T): Promise<T>;
}
