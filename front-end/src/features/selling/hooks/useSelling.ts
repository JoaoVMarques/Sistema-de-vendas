import { useEffect, useState } from 'react';
import { CartItemState, ProductType } from '../types/Products';
import { getAllProducts } from '../../../services/productsService';

export function useSelling() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);
  const [cartItems, setCartItems] = useState<CartItemState[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [searchbarInput, setSearchbarInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const productsList = await getAllProducts();
      setProducts(productsList);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [searchbarInput]);

  const availableProducts = searchResults.filter(
    (product) => !cartItems.some((item) => item.id === product.id),
  );

  const selectedProducts = cartItems.map((cartItem) => {
    const productDetails = products.find((p) => p.id === cartItem.id) as ProductType;

    return {
      ...productDetails,
      quantity: cartItem.quantity,
    };
  });

  const handleSearch = (value: string) => {
    if (!value.trim()) {
      setSearchResults([]);
      return;
    }

    const result = products.filter(product =>
      product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
    );

    setSearchResults(result);
  };

  const SetCartProduct = (productId: number) => {
    setCartItems(prev => [...prev, { id: productId, quantity: 1}]);
    setSearchbarInput('');
    handleSearch('');
  };

  const onEnter = (selectProductIndex: number) => {
    if (availableProducts.length > 0) {
      const selectedProduct = availableProducts[selectProductIndex];
      SetCartProduct(selectedProduct.id);
      setSearchResults([]);
    }
  };

  const ChangeProductQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1 || Number.isNaN(newQuantity) ) {return;}

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeProduct = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return {
    availableProducts,
    selectedProducts,
    highlightedIndex,
    searchbarInput,

    setHighlightedIndex,
    setSearchbarInput,

    handleSearch,
    removeProduct,
    onEnter,
    SetCartProduct,
    ChangeProductQuantity,
  };
}