import { useState } from 'react';
import { Form } from 'react-bootstrap';

function SellingPage() {
  const [input, setInput] = useState('');
  
  return (
    <>
      <Form.Control
        type="search"
        placeholder="pesquise pelo produto"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        className="me-2"
      />
    </>
  );
}

export default SellingPage;
