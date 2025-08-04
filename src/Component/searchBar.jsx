import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../App';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const val=useContext(myContext)

  const searchBarStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px auto',
    maxWidth: '500px',
    padding: '5px',
    backgroundColor: '#e6f0ff',
    borderRadius: '8px',
  };

  const inputStyle = {
    flex: 1,
    padding: '5px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px 0 0 5px',
    outline: 'none',
  };

  const buttonStyle = {
    padding: '5px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const handleSearch = () => {
 
  val.setProducts(()=>{
    return(
      val.products.filter((cur)=>cur.title.toLowerCase().includes(query.toLowerCase()))
    )
  })
  };

  useEffect(()=>{
  if(query ==''){
     fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => val.setProducts(data));
  }
  },[query])

  return (
    <div style={searchBarStyle}>
      <input
        type="text"
        placeholder="Search products..."
        style={inputStyle}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button style={buttonStyle} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
