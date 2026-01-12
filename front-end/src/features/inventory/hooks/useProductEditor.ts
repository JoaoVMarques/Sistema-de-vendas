import { useState } from 'react';
import { ProductType } from '../../selling/types/Products';
import { useProducts } from '../../../hooks/queries/useProducts';

export function useProductEditor() {
  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const {
    data,
  } = useProducts();

  const saveEditedProduct = (newProduct: ProductType) => {
    const oldProduct = data!.find((product) => product.id === newProduct.id);
    setEditingProductId(0);

    if (!oldProduct) { return; }
    // Sei que essa função vai precisar ser refatorada e vai quebrar a cada vez que atualizar
    // porém vai ficar assim para eu mesmo do futuro consertar, até o momento é somente para
    // testes e continuar o codigo, Boa-sorte eu mesmo do futuro :)
    const isSameProduct
    = oldProduct.name === newProduct.name
    && oldProduct.price === newProduct.price
    && oldProduct.stock === newProduct.stock;

    if (isSameProduct) { return; }
    console.log(newProduct);
  };

  return {
    editingProductId,
    setEditingProductId,
    saveEditedProduct,
  };
}