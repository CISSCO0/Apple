import { useState } from 'react';
import axios from 'axios';

function OneProduct() {
  return (
    <div>
      <GetOneProduct />
    </div>
  );
}

function GetOneProduct() {
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const [product, setProduct] = useState("");

  const fetch = async (e) => {
    // e.preventDefault(); 
    try {
      const response = await axios.get(`http://localhost:4000/products/get/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error details:', error);
      setError(`Error: ${error.response?.data?.message || error.message || 'Request failed'}`);
    }
  };

  return (
    <div>
      <form className='form' onSubmit={(e) => {
      e.preventDefault();
      if (id.trim() === "") {
        setProduct("");
        setError("Please enter a product ID.");
        return; 
      }
      fetch(); 
    }}>
      <h2 className='subtitle'>Get certain Prouduct</h2>
        <input
          type="text"
          placeholder="Enter product ID"
          className="input"
          value={id}
          onChange={(e) => {setId(e.target.value);
            setProduct("");
          }}
        />
      </form>
      {product && <div>{JSON.stringify(product)}</div>}
      {error && <p className="message">{error}</p>}
    </div>
  );
}

export default OneProduct;
