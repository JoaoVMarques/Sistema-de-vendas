import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { getAllProducts } from '../../services/productsService';
import { ProductType } from '../../types/products';

function SellingPage() {
  const [input, setInput] = useState('');
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsList = await getAllProducts();
      setProducts(productsList);
    };

    fetchData();
  }, []);

  const handleChange = (value: string) => {
    setInput(value);

    const result = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    console.log(result);
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

export default SellingPage;
