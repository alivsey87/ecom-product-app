import React from 'react';
import { useState } from 'react';
import ProductList from './Components/ProductList';
import './App.css';

const App = () => {
  const originalProducts = [
    { id: 1, name: "Mouse", price: "$20", description: "A mouse peripheral", image: '/mouse.jpg' },
    { id: 2, name: "Keyboard", price: "$25", description: "A keyboard peripheral", image: '/keyboard.jpg' },
    { id: 3, name: "Monitor", price: "$400", description: "A monitor to display UI", image: '/monitor.jpg' },
    { id: 4, name: "Clock", price: "$80", description: "A digital clock", image: '/digi-clock.jpg' },
    { id: 5, name: "Speakers", price: "$250", description: "A set of two speakers", image: '/speakers.jpg' }
  ];

  const [products, setProducts] = useState(originalProducts);
  const [hasItems, setHasItems] = useState(true);

  const removeProduct = () => {
    if (products.length > 0) {
      const newProducts = products.slice(0, -1); // Create a new array without the last item
      setProducts(newProducts); // Update the state with the new array
      if (newProducts.length === 0) {
        setHasItems(false);
      }
    }
  };

  const restoreProducts = () => {
    setProducts(originalProducts); // Restore the original list of products
    setHasItems(true); // Reset the hasItems state
  };

  return (
    <>
      <h1>Welcome to Comp-Pheral</h1>
      <h2>Our Products:</h2>
      <ProductList products={products} />
      <button className='remove-button' onClick={removeProduct} disabled={!hasItems}>Remove item</button>
      {!hasItems && (
        <div>
          <p className='items-warning'>THERE ARE NO ITEMS!</p>
          <button className='restore-button' onClick={restoreProducts}>Restore list</button>
        </div>
      )}
    </>
  );
};

export default App;