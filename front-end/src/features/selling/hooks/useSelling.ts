import { useEffect, useState } from 'react';
import { ProductType } from '../types/Products';
import { getAllProducts } from '../../../services/productsService';

export function useSelling() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);
  const [selectedProductIds, setSelectedProductsIds] = useState<number[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [searchbarInput, setSearchbarInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const productsList = await getAllProducts();
      setProducts(productsList);
    };

    fetchData();
  }, []);

  const availableProducts = searchResults.filter(
    product => !selectedProductIds.includes(product.id),
  );

  const selectedProducts = products.filter(product =>
    selectedProductIds.includes(product.id),
  );

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

  const onEnter = (selectProductIndex: number) => {
    if (availableProducts.length > 0) {
      const firstProduct = availableProducts[selectProductIndex];
      setSelectedProductsIds(prev => [... prev, firstProduct.id]);
      setSearchResults([]);
    }
  };

  const clickOnProduct = (product: ProductType) => {
    setSelectedProductsIds(prev => [...prev, product.id]);
    setSearchbarInput('');
    handleSearch('');
  };

  return {
    availableProducts,
    selectedProducts,
    highlightedIndex,
    searchbarInput,

    setHighlightedIndex,
    setSearchbarInput,

    handleSearch,
    onEnter,
    clickOnProduct,
  };
}