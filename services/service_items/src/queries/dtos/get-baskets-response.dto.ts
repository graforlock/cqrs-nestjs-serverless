export interface GetBasketsResponseDto {
  id: string;
  userId: string;
  currency: string;
  items: object[];
  createdAt: Date;
  updatedAt: Date;
}