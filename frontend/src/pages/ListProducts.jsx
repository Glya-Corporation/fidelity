import { useSelector } from 'react-redux';

import products from '../utils/products.js';

const ListProsucts = () => {
  //const products = useSelector(state => state.products);

  const pulpoCoin = products.map(element => ({ ...element, coinValue: Math.ceil(element.price * (element.price >= 19 ? 15 : 10)) }));

  console.log(products);

  return (
    <main className='background'>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.img} />
            <p>{product.name}</p>
            <h5>{product.coinValue}</h5>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ListProsucts;
