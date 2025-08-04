import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../App";
import "../style.css";

const cardContainerStyle = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "20px",
};

const cardStyle = {
  backgroundColor: "white",
  border: "1px solid #ccc",
  borderRadius: "8px",
  width: "200px",
  padding: "15px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
};

const imageStyle = {
  width: "100px",
  height:"100px",
  borderRadius: "6px",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "8px 12px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const userProduct = () => {
  const cartval = useContext(myContext);

  const [products, setProducts] = useState([]);

  const [btn, setBtn] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function addingCart(val) {
    products.forEach((cur) => {
      if (cur.id === val) {
        cartval.setAddcart((c) => [
          ...c,
          {
            id:cur.id,
            title: cur.title,
            price: cur.price,
            image: cur.image,
            category: cur.category,
          },
        ]);

        cur.active = true;
      }
    });
    setBtn((btn) => !btn);
  }

  return (
    <div style={cardContainerStyle}>
      {products.map((cur, i) => {
        return (
          <div style={cardStyle} key={i}>
            <img src={cur.image} alt={cur.image} style={imageStyle} />
            <h3>{cur.title}</h3>
            <h5>{cur.price}</h5>
            <h5>{cur.category}</h5>
            <button id="btn-1" value={cur.active} onClick={() => addingCart(cur.id)}>
              {cur.active ? <p>Added</p> : <p>Add to cart</p>}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default userProduct;
