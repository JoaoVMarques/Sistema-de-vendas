import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

export interface SearchBarProps {
  onSearch: (value: string) => void;
  onEnter: (selectProductIndex: number) => void;
  onHighlightChange: (index: number) => void;
}

function SearchBar({ onSearch, onEnter, onHighlightChange }: SearchBarProps) {
  const [input, setInput] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const handleChange = (value: string) => {
    setInput(value);
    onSearch(value);
    setHighlightedIndex(0);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onEnter(highlightedIndex);
      setInput('');
      onSearch('');

      
      setHighlightedIndex(0);
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlightedIndex(prev => prev + 1);
    }

    if (event.key === 'ArrowUp') {
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
