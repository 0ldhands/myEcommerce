import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Viewcart from "../Component/Viewcart";
import Footer from "../Component/Footer";
import Tickanimation from '../Component/Tickanimation'
import '../style.css'
import Checkoutform from "../Component/Checkoutform";
import { useNavigate } from "react-router-dom";

const Viewcarts = () => {


  const navi=useNavigate()

  const[toggle,setToggle]=useState(false)

  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundColor: "#007bff4f",
          padding: "2px",
          textAlign: "center",
        }}
      >
        <h1>My cart</h1>
      </div>
      <div
        style={{
          margin: "20px",
          
          backgroundColor:"#bdbdbd83",
          marginBottom: "60px",
          width: "700px",
          height: "400px",
          overflow:'scroll',
         marginLeft:'300px',
         borderRadius:'10px'
        }}
      >
       
        {toggle ? <Checkoutform/>:<Viewcart/> }

        

        {!toggle && <button style={{position:"fixed",bottom:'100px',left:"550px"}} className="place-button" onClick={()=>setToggle((cur)=>!cur)}>Check out</button>}
      </div>
     
      <Footer />
    </div>
  );
};

export default Viewcarts;
