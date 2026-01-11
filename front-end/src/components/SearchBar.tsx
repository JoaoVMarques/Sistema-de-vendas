import { Form } from 'react-bootstrap';

interface SearchBarProps {
  input: string
  setInput: (value: string) => void;
  onKeyPress: (keyPress: React.KeyboardEvent) => void;
}

export function SearchBar({ input, setInput, onKeyPress } : SearchBarProps) {
  return (
    <>
      <Form.Control
        type="search"
        placeholder="pesquise pelo produto"
        value={ input }
        onChange={ (e) => setInput(e.target.value) }
        onKeyDown={ (e) => onKeyPress(e) }
        className="me-2"
      />
    </>
  );
}
