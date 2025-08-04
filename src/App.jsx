import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Setting from "./Pages/Setting";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Contact from "./Pages/Contact";
import { createContext, useState } from "react";
import './style.css'

import Viewcarts from "./Pages/Viewcarts";
import AdminDashboard from "./Pages/AdminDashboard";

export const myContext=createContext()

const App = () => {
  const[user,setUser]=useState([])

  const [products, setProducts] = useState([]);

  const[addcart,setAddcart]=useState([])

  const[checkdet,setCheckdet]=useState([])

  return (
  <div id="main-container">
     <myContext.Provider value={{user,setUser,addcart,setAddcart,checkdet,setCheckdet,products, setProducts}}>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Viewcarts" element={<Viewcarts/>} />
        <Route path="/AdminDashboard" element={<AdminDashboard/>} />
      </Routes>
    </Router>
   </myContext.Provider>
  </div>
  );
};

export default App;
