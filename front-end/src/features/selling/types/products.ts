export interface ProductType {
  id: number;
  name: string;
  price: number;
}

export interface SelectedProductType extends ProductType {
  quantity: number,
}

export interface ProductTypeAPI {
  content: ProductType[];
}
