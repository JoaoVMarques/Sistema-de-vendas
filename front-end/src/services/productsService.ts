import { ProductTypeAPI } from '../features/selling/types/Products';
import api from './api';

export async function getAllProducts() {
  const response = await api.get<ProductTypeAPI>('/products');
  return response.data;
}
