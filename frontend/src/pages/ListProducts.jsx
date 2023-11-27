import {useSelector} from 'react-redux'

const ListProsucts = () => {
  const products = useSelector(state => state.products)
  
  return (
    <main>
      <ul>
        {
          products.map(product => (
            <li key={product.id}>
              <img src={product.img}/>
              <p>{product.name}</p>
              <h5>{product.coinValue}</h5>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export default ListProsucts;