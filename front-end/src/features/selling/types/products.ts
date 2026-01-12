export interface ProductType {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export interface SelectedProductType extends ProductType {
  quantity: number;
}

export interface CartItemState {
  id: number;
  quantity: number;
}

export interface ProductTypeAPI {
  content: ProductType[];
}
