
import { useEffect, useState } from 'react'
import axios from 'axios';

function Product() {
  return (
   <div>
    <GetAllProducts/>
   </div>
   
  )

}

 function GetAllProducts()
{
  const [products,setProducts]=useState([]);
  const [error ,setError]=useState("");
  useEffect(()=>{
  const fetch = async()=>{
    try{
    const response =await axios.get('http://localhost:4000/products/get');
    setProducts(response.data);
    }
    catch (err)
    {
      setError('Error fetching ');

    }
  };
  fetch();
  },[products]);

  return(
    <div>
  <h2 className="subtitle">All products</h2>
  {error && <p className="Message">{error}</p>}

  <ul className="products">
    {products.map((product) => (
      <li>
      <div className="flip-card" key={product._id}>
       
        <div className="flip-card-inner">
        
          <div className="flip-card-front">
          
              {product.name} - ${product.price}
            
          </div>
          
          <div className="flip-card-back">
          <p><strong>ID:</strong> {product._id}</p>
            <p>{product.description}</p>
          </div>
        </div> 
      </div>
      </li>
    ))}
  </ul>
</div>

  )

}



export default Product
