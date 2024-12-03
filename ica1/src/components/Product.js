import React, { useState } from "react";
import "../assets/CSS/layout.css";

export default function Product({ flower, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(flower, quantity);
      setQuantity(0); // Reset input field
    }
  };

  return (
    <div className="grid-item">
      <div className="card">
        <img src={`./assets/images/${flower.img}`} alt={flower.name} />
        <div className="card-body">
          <h5 className="card-title">{flower.name}</h5>
          <p>Price: ${flower.price}</p>
          <div className="quantity-container">
            <label htmlFor={`quantity-${flower.id}`}>Quantity:</label>
            <input
              type="number"
              id={`quantity-${flower.id}`}
              value={quantity}
              onChange={e => setQuantity(parseInt(e.target.value) || 0)}
              min="0"
            />
          </div>
          <button className="card-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
