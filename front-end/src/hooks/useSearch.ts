import { useState } from 'react';
import { ProductType } from '../features/selling/types/Products';
import { useProducts } from './queries/useProducts';

export function useSearch() {
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [input, setInput] = useState('');
  const { data: productsData } = useProducts();

  const handleSearch = (value: string) => {
    setInput(value);

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

  const onKeyPress = (event: React.KeyboardEvent, maxIndex: number) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch();
      setHighlightedIndex(0);
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlightedIndex(Math.min(highlightedIndex + 1, maxIndex - 1));
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setHighlightedIndex(Math.max(highlightedIndex - 1, 0));
    }
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