import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';

import ProductModal from '../components/ProductModal.jsx';

import Footer from '../components/Footer.jsx';

const ListProsucts = () => {
  const [show, setShow] = useState();
  const products = useSelector(state => state.product);
  const user = useSelector(state => state.user);

  const [productsAll, setProductsAll] = useState([]);

  const navigate = useNavigate();

  const filterName = data => {
    if (data === '') {
      setProductsAll(products);
    } else {
      setProductsAll(products.filter(e => e.name.includes(data)));
    }
  };

  const order = () => {
    setProductsAll(pulpoCoin.sort((a, b) => a - b));
  };

  useEffect(() => {
    setProductsAll(products);
    if (!user.business) navigate('/');
  }, [products]);

  const [productSelected, setProductSelected] = useState({});

  const showQr = data => {
    setProductSelected(data);
    console.log(productSelected);
    setShow(true);
  };

  return (
    <main className='background list'>
      <ProductModal show={show} onHide={() => setShow(false)} data={productSelected} />
      <Button onClick={() => navigate(-1)} className='btn-back' variant='danger'>
        back
      </Button>
      <Form className='mb-3 filter'>
        <Form.Control type='search' placeholder='Buscar por nombre o puntos' onChange={e => filterName(e.target.value)} />
      </Form>
      <ul className='list-products'>
        {productsAll?.map(product => (
          <li key={product.id} className='item-product'>
            <img src={product.img} />
            <b>{product.name}</b>
            <h5>{product.coinValue}</h5>
            <Button variant='success' disabled={product.coinValue > user.business?.[0].users_business?.coin} onClick={() => showQr(product)}>
              Canjear
            </Button>
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  );
};

export default ListProsucts;
