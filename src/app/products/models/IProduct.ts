export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  quantity: number;
}

export class Product implements IProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  quantity: number;
}
