import { useState } from "react";
import "./products.css";

const ProductItem = ({ id, name, price, description, image }) => {
  const [showImage, setShowImage] = useState(false);

  const handleButtonClick = () => {
    setShowImage(!showImage);
  };

  return (
    <>
      <button className="product-button" onClick={handleButtonClick}>
        <ul id={id} className="product">
          <li>{name}</li>
          <li>{price}</li>
          <li>{description}</li>
        </ul>
      </button>
      {showImage && (
        <div className="image-container">
          <img className="product-image" src={image} alt={`Photo of ${name}`} />
        </div>
      )}
    </>
  );
};

export default ProductItem;
