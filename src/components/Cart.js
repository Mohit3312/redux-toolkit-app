import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/CartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="cardWrapper">
        {products.map((product) => (
          <div className="cardCard">
            <img src={product.image} alt="Product_Image" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <div
              onClick={() => {
                handleRemove(product.id);
              }}
              className="btn"
            >
              Remove
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
