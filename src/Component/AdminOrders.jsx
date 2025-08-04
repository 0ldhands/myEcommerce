import React, { useContext } from 'react';
import { myContext } from '../App';

const AdminOrders = () => {
  const val = useContext(myContext);

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: 'Arial, sans-serif',
  };

  const thStyle = {
    backgroundColor: '#007BFF', // Blue
    color: 'white',
    padding: '10px',
    border: '1px solid #ccc',
    textAlign: 'left',
  };

  const tdStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    backgroundColor: 'white',
  };

  const rowAltStyle = {
    backgroundColor: '#f2f8ff', // Light blue tint
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px', color: '#007BFF' }}>Admin Orders</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>S.no</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Mobile</th>
            <th style={thStyle}>Mail</th>
            <th style={thStyle}>Address</th>
            <th style={thStyle}>Payment</th>
            <th style={thStyle}>Product</th>
          </tr>
        </thead>
        <tbody>
          {val.checkdet.map((cur, index) => (
            <tr key={index} style={index % 2 === 0 ? null : rowAltStyle}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{cur.cname}</td>
              <td style={tdStyle}>{cur.cmobile}</td>
              <td style={tdStyle}>{cur.cmail}</td>
              <td style={tdStyle}>{cur.cadd}</td>
              <td style={tdStyle}>{cur.cpayment}</td>
              <td style={tdStyle}>
                <ol style={{ paddingLeft: '20px', margin: 0 }}>
                  {cur.cproduct.map((c, i) => (
                    <li key={i}>{c.title}</li>
                  ))}
                </ol>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
