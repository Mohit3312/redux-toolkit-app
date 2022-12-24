import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import { fetchProducts } from "../store/ProductSlice";
import { STATUSES } from "../store/ProductSlice";

const Products = () => {
  const { data: products, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
    dispatch(fetchProducts());
    // eslint-disable-next-line
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="Product_Image" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className="btn">
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
