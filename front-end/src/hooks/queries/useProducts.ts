import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../../services/productsService';

export function useProducts() {
  const query = useQuery({
    queryKey: ['getProducts'],
    queryFn: getAllProducts,
    staleTime: 1000 * 60 * 5,
  });

  return {
    data: query.data,
    loading: query.isLoading,
  };
}