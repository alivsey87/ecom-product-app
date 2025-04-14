import { useState } from 'react'
import ProductList from './Components/ProductList'
import './App.css'

const App = () => {

  const [products, setProducts] = useState(
    [
      {id: 1, name: "mouse", price: "$20", description: "a mouse peripheral"},
      {id: 2, name: "keyboard", price: "$25", description: "a keyboard peripheral"},
      {id: 3, name: "monitor", price: "$400", description: "a monitor to display UI"}
    ]
  ) 

  const addProduct = product => {
    const newProducts = products;
    setProducts(newProducts.push(product));
  }

  return (
    <ProductList products={products} />
  )
}

export default App
