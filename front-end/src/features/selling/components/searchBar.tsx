import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

export interface SearchBarProps {
  onSearch: (value: string) => void;
  onEnter: (selectProductIndex: number) => void;
  onHighlightChange: (index: number) => void;
  resultsCount: number;
  input: string;
  setInput: (text: string) => void;
}

export function SearchBar({ onSearch,
  onEnter,
  onHighlightChange,
  input,
  setInput,
  resultsCount }: SearchBarProps) {

  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const handleChange = (value: string) => {
    setInput(value);
    onSearch(value);
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
      setHighlightedIndex(prev => Math.min(prev + 1, resultsCount - 1));
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
      value={ input }
      onChange={ (e) => handleChange(e.target.value) }
      onKeyDown={ handleKeyDown }
      className="me-2"
    />
  );
}
