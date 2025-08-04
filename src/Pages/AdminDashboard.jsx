import React, { useState } from "react";
import AdminOrders from "../Component/AdminOrders";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

  const buttonStyle = {
  marginTop: "10px",
  padding: "8px 12px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginLeft:'900px'
};



  const navi=useNavigate()

  const [activePage, setActivePage] = useState("Dashboard");

  const styles = {
    layout: {
      display: "flex",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
    },
    sidebar: {
      width: "220px",
      backgroundColor: "#007bffff", // Deep Blue
      color: "#fff",
      padding: "20px 10px",
    },
    navItem: {
      padding: "12px 20px",
      cursor: "pointer",
      borderRadius: "4px",
      marginBottom: "10px",
    },
    navItemActive: {
      backgroundColor: "#1565c0", // Slightly lighter blue
    },
    header: {
      backgroundColor: "#fff",
      padding: "15px 20px",
      borderBottom: "1px solid #ddd",
      fontWeight: "bold",
      fontSize: "18px",
    },
    contentArea: {
      flex: 1,
      backgroundColor: "#f5faff", // Very light blue/white
      display: "flex",
      flexDirection: "column",
    },
    content: {
      padding: "20px",
      flex: 1,
    },
  };

  const pages = ["Dashboard", "Users", "Settings"];

  return (
    <div style={styles.layout}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Admin</h2>
        {pages.map((page) => (
          <div
            key={page}
            style={{
              ...styles.navItem,
              ...(activePage === page ? styles.navItemActive : {}),
            }}
            onClick={() => setActivePage(page)}
          >
            {page}
          </div>
        ))}
      </div>

      {/* Main Area */}
      <div style={styles.contentArea}>
       
        <div style={styles.header}>{activePage}   <button style={buttonStyle} onClick={()=>navi('/')}>Logout</button></div>
       
        <div style={styles.content}>
          <p>Welcome to the {activePage} page!</p>
          <AdminOrders/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
