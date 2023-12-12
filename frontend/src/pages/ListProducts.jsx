import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import products from '../utils/products.js';

import { Button } from 'react-bootstrap';

import ProductModal from '../components/ProductModal.jsx'

const ListProsucts = () => {
  const [show, setShow] = useState()
  const products = useSelector(state => state.product);
  const user = useSelector(state => state.user);

  const [productsAll, setProductsAll] = useState();

  const pulpoCoin = products.map(element => ({ ...element, coinValue: Math.ceil(element.price * (element.price >= 19 ? 15 : 10)) }));

  const navigate = useNavigate();

  const filterName = () => {};

  const order = () => {
    setProductsAll(pulpoCoin.sort((a, b) => a - b));
  };

  useEffect(() => {
    setProductsAll(products);
  }, [products]);
  
  const [productSelected, setProductSelected] = useState({})

  return (
    <main className='background'>
    <ProductModal show={show}
        onHide={() => setShow(false)} data={productSelected} />
      <button onClick={() => navigate(-1)}>back</button>
      <form>
        <input type='search' />
      </form>
      <ul className='list-products'>
        {productsAll?.map(product => (
          <li key={product.id} className='item-product'>
            <img src={product.img} />
            <p>{product.name}</p>
            <h5>{product.coinValue}</h5>
            <Button variant='success' disabled={product.coinValue > user.business?.[0].users_business?.coin} onClick={() => setProductSelected(product)} >
              Canjear
            </Button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ListProsucts;
