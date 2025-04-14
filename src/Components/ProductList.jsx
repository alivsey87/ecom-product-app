import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return products.map((product) => (
    <ProductItem
      id={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
    />
  ));
};

export default ProductList;
