import React from "react";

export default function Cart({ cartItems }) {
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <div className="table-container">
      <h4 className="card-title">Cart</h4>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>QTY</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>${item.price * item.qty}</td>
            </tr>
          ))}
          <tr>
            <td>Grand Total:</td>
            <td colSpan={2}>${calculateTotal()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}