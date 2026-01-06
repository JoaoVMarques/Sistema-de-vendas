export interface ProductType {
  id: number;
  name: string;
  price: number;
}

export interface ProductTypeAPI {
  content: ProductType[];
}
