import { useState } from 'react';
import { Form } from 'react-bootstrap';

export interface SearchBarProps {
  onSearch: (value: string) => void
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [input, setInput] = useState('');

  const handleChange = (value: string) => {
    setInput(value);
    onSearch(value);
  };

  return (
    <>
      <Form.Control
        type="search"
        placeholder="pesquise pelo produto"
        value={input}
        onChange={(event) => handleChange(event.target.value)}
        className="me-2"
      />
    </>
  );
}

export default SearchBar;
