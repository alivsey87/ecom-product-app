const ProductItem = ({ id, name, price, description }) => {
  return (
    <>
      <ul id={id}>
        <li>Name: {name}</li>
        <li>Price: {price}</li>
        <li>Description: {description}</li>
      </ul>
    </>
  );
};

export default ProductItem
