import { useEffect, useState } from 'react'
import axios from 'axios';

function UpdateProduct(){
    return (<div>
    <Update/>
    </div>)
}


function Update ()
{
    const [id,setId]=useState("");
    const [error ,setError]=useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    const updatedata=async(e)=>{
    e.preventDefault(); 
    try{
         const response = await axios.put(`http://localhost:4000/products/update/${id}`,{ name, quantity, price });
         setError("y3m anta tammam")
        }
        catch(error)
        {
            setError(`Error: ${error.response?.data?.message || error.message || 'Request failed'}`);
        }

    }

    return(
        <div>
            <h2 className='subtitle'>want to update any product data </h2>
            <form onSubmit={updatedata}>
             <input type="text" className="input" placeholder="id" value={id} onChange={(e) => setId(e.target.value)} />
             <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
             <input type="number" className="input" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
             <input type="number" className="input" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit" className="btn">Update Product</button>
      </form>
     {error&& <p className="message">{error}</p>}
        </div>
    )
}

export default UpdateProduct