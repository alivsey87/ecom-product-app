import React from 'react';
import { useState } from 'react';
import ProductList from './Components/ProductList';
import './App.css';

const App = () => {

  const [products, setProducts] = useState(
    [
      {id: 1, name: "Mouse", price: "$20", description: "A mouse peripheral", image: '/mouse.jpg'},
      {id: 2, name: "Keyboard", price: "$25", description: "A keyboard peripheral", image: '/keyboard.jpg'},
      {id: 3, name: "Monitor", price: "$400", description: "A monitor to display UI", image: '/monitor.jpg'}
    ]
  ) 

  const addProduct = product => {
    const newProducts = products;
    setProducts(newProducts.push(product));
  }

  return (
    <>
      <h1>Our Products:</h1>
      <ProductList products={products} />
    </>
  )
}

export default App
