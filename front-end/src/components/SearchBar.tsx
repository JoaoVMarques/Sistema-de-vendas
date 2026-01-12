import { Form } from 'react-bootstrap';

interface SearchBarProps {
  input: string
  handleSearch: (value: string) => void;
  onKeyPress: (event: React.KeyboardEvent) => void;
}

export function SearchBar({ input, handleSearch, onKeyPress } : SearchBarProps) {
  return (
    <>
      <Form.Control
        type="search"
        placeholder="pesquise pelo produto"
        value={ input }
        onChange={ (e) => handleSearch(e.target.value) }
        onKeyDown={ (event) => onKeyPress(event) }
        className="me-2"
      />
    </>
  );
}
