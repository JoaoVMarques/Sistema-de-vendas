export interface ProductType {
  id: string;
  name: string;
  price: number;
  stock: number;
}

export interface SelectedProductType extends ProductType {
  quantity: number;
}

export interface CartItemState {
  id: string;
  quantity: number;
}

export interface ProductTypeAPI {
  content: ProductType[];
}
