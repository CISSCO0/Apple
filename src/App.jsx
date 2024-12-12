import { useState } from 'react';
import axios from 'axios';

function App() {
  return (
    <div>
      <ProductForm />
    </div>
  );
}

function ProductForm() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/products/addproduct', { name, quantity, price });
      setMessage(`Product added: ${response.data.name}`);
    } catch (error) {
      console.error('Error details:', error);
      setMessage(`Error: ${error.response?.data?.message || error.message || 'Request failed'}`);
    }
  };

  return (
    <div className="form">
      <h2 className="subtitle">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" className="input" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <input type="number" className="input" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit" className="btn">Add Product</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

// Optional Component for Future Use
// function GetAllProducts() {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState("");

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/api/get');
//       setProducts(response.data);
//     } catch (err) {
//       setError("Error fetching products");
//     }
//   };

//   return (
//     <div>
//       <h2 className="text">All Products</h2>
//       {error && <p className="error">{error}</p>}
//       <button className="btn" onClick={fetchProducts}>Get All Products</button>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>{product.name} - ${product.price}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default App;
