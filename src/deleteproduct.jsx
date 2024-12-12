import { useState,useEffect } from "react";
import axios from 'axios';
import { set } from "mongoose";

function DeleteProduct()
{
 return(<div>
<Delete/>
 </div>) ;  
}
function Delete()
{
    const [message,setMessage]= useState("");
    const [id ,setId ]=useState("");
const doDelete = async(e)=>
{
    e.preventDefault();
    try{
        const response = await axios.delete(`http://localhost:4000/products/delete/${id}`);
         setMessage('deleted product')


    }
    catch(error)
    {
        setMessage(`Error: ${error.response?.data?.message || error.message || 'Request failed'}`);
    }
}
return (<div>
    
<form onSubmit={doDelete}>
    <input type="text " placeholder="enter id" className="input" value={id} onChange={(e)=>{setId(e.target.value)}}></input>
    <button type="submit" className="btn">delete Product</button>
</form>
{message&&<p className="message">{message}</p>}

</div>)

}
export default DeleteProduct