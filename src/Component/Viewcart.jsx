import React, { useContext } from "react";
import { myContext } from "../App";
import { MdOutlineCancel } from "react-icons/md";

const cardContainerStyle = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "10px",
};

const cardStyle = {
  backgroundColor: "white",
  border: "1px solid #ccc",
  borderRadius: "8px",
  width: "150px",
  padding: "10px",
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



const Viewcart = () => {
  const cartval = useContext(myContext);

  const deleteCart=(val)=>{
  cartval.setAddcart((cur)=>{
    return cur.filter((c)=>c.id !==val)
  })
}

  return (
    <div  style={cardContainerStyle}>
      {cartval.addcart.map((cur) => {
        return (
          <div style={cardStyle}>
           
            <img src={cur.image} alt={cur.image} style={imageStyle} />
            <h3>{cur.title}</h3>
            <h5>{cur.price}</h5>
            <h5>{cur.category}</h5>
            <button style={buttonStyle} onClick={()=>deleteCart(cur.id)}> <MdOutlineCancel/></button>
          </div>
        );
      })}
    </div>
  );
};

export default Viewcart;
