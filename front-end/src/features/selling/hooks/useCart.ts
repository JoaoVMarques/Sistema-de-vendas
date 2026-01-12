import { useState } from 'react';
import { useProducts } from '../../../hooks/queries/useProducts';
import { CartItemState, ProductType } from '../types/Products';

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItemState[]>([]);
  const { data: productsData } = useProducts();

  const removeCartItemsFromList = (productList: ProductType[]) => {
    if (!productList) { return []; }
    const cartIds = new Set(cartItems.map((item) => item.id));
    return productList.filter((product) => !cartIds.has(product.id));
  };

  const selectedProduct = cartItems.flatMap((cartItem) => {
    const productDetails = productsData?.find((product) => product.id === cartItem.id);
    if (!productDetails) { return []; }

    return {
      ...productDetails,
      quantity: cartItem.quantity,
    };
  });

  const changeProductQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1 || Number.isNaN(newQuantity)) { return; }

    setCartItems((prev) => prev.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item ),
    );
  };

  const removeProduct = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const setCartProduct = (productId: number) => {
    setCartItems((prev) => {
      const exists = prev.some(item => item.id === productId);
      if (exists) {return prev;}

      return [...prev, { id: productId, quantity: 1 }];
    });
  };

  return {
    removeCartItemsFromList,
    selectedProduct,
    changeProductQuantity,
    removeProduct,
    setCartProduct,
  };
}