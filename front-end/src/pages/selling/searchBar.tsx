import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { ProductType } from '../../types/products';

export interface SearchBarProps {
  onSearch: (value: string) => ProductType[];
  onEnter: (selectProductIndex: number) => void;
  onHighlightChange: (index: number) => void;
  input: string;
  setInput: (text: string) => void;
}

function SearchBar({ onSearch, onEnter, onHighlightChange, input, setInput }: SearchBarProps) {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [searchProductsQntd, setSearchResultsQntd] = useState(0);

  const search = (value: string) => {
    const searchedQntd = onSearch(value).length;
    setSearchResultsQntd(searchedQntd);
    setHighlightedIndex(0);
  };

  const handleChange = (value: string) => {
    setInput(value);
    search(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      event.preventDefault();
      onEnter(highlightedIndex);
      setInput('');
      search('');
      setHighlightedIndex(0);
    }

    if(event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlightedIndex(prev => Math.min(prev + 1, searchProductsQntd - 1));
    }

    if(event.key === 'ArrowUp') {
      event.preventDefault();
      setHighlightedIndex(prev => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    onHighlightChange(highlightedIndex);
  }, [highlightedIndex, onHighlightChange]);

  return (
    <Form.Control
      type="search"
      placeholder="pesquise pelo produto"
      value={input}
      onChange={(e) => handleChange(e.target.value)}
      onKeyDown={handleKeyDown}
      className="me-2"
    />
  );
}

export default SearchBar;
