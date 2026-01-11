import { useState } from 'react';
import { ProductType } from '../features/selling/types/Products';
import { useProducts } from './queries/useProducts';

export function useSearch() {
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [input, setInput] = useState('');
  const { data: productsData } = useProducts();

  const handleSearch = (value: string) => {
    if (!value.trim()) {
      setSearchResults([]);
      return;
    }

    if (!productsData) { return; }

    const result = productsData.filter((product) =>
      product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
    );
    setSearchResults(result);
  };

  const onSearch = () => {
    setSearchResults([]);
    setInput('');
    setHighlightedIndex(0);
  };

  const onKeyPress = (pressedKey: React.KeyboardEvent) => {
    console.log(pressedKey);
  };

  return {
    searchResults,
    input,
    highlightedIndex,

    setInput,
    setHighlightedIndex,

    handleSearch,
    onSearch,
    onKeyPress,
  };
}