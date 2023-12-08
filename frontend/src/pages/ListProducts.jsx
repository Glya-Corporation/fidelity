import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import products from '../utils/products.js';

import { Button } from 'react-bootstrap'

const ListProsucts = () => {
  //const products = useSelector(state => state.products);
  //const user = useSelector(state => state.user);


  const [productsAll, setProductsAll] = useState();

  const pulpoCoin = products.map(element => ({ ...element, coinValue: Math.ceil(element.price * (element.price >= 19 ? 15 : 10)) }));

  console.log(products);

  const filterName= () => {

  }

  const order = () => {
    setProductsAll(pulpoCoin.sort((a, b) => a - b))
  }

  useEffect(() => {
    setProductsAll(pulpoCoin)
  }, [])

  return (
    <main className='background'>
      <form>
        <input type='search'/>
      </form>
      <ul className='list-products'>
        {productsAll?.map(product => (
          <li key={product.id} className='item-product'>
            <img src={product.img} />
            <p>{product.name}</p>
            <h5>{product.coinValue}</h5>
            <Button variant='success' disabled={product.coinValue > 25}>Canjear</Button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ListProsucts;
