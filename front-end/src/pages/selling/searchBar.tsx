import { useState } from 'react';
import { Form } from 'react-bootstrap';

export interface SearchBarProps {
  onSearch: (value: string) => void
  onEnter: () => void
}

function SearchBar({ onSearch, onEnter }: SearchBarProps) {
  const [input, setInput] = useState('');

  const handleChange = (value: string) => {
    setInput(value);
    onSearch(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      event.preventDefault();
      onEnter();
      setInput('');
      onSearch('');
    }
  };

  return (
    <>
      <Form.Control
        type="search"
        placeholder="pesquise pelo produto"
        value={input}
        onChange={(event) => handleChange(event.target.value)}
        onKeyDown={handleKeyDown}
        className="me-2"
      />
    </>
  );
}

export default SearchBar;
