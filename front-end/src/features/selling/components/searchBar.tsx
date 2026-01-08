import { Form } from 'react-bootstrap';

export interface SearchBarProps {
  onSearch: (value: string) => void;
  onEnter: (selectProductIndex: number) => void;
  setHighlightedIndex: (index: number) => void;
  highlightedIndex: number;
  resultsCount: number;
  input: string;
  setInput: (text: string) => void;
}

export function SearchBar({ onSearch,
  onEnter,
  setHighlightedIndex,
  highlightedIndex,
  input,
  setInput,
  resultsCount }: SearchBarProps) {

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
      setHighlightedIndex(Math.min(highlightedIndex + 1, resultsCount - 1));
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setHighlightedIndex(Math.max(highlightedIndex - 1, 0));
    }
  };

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
