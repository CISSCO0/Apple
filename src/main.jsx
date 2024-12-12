import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './products.jsx'
import OneProduct from './oneproduct.jsx'
import UpdateProduct from './update.jsx'
import DeleteProduct from './deleteproduct.jsx'

createRoot(document.getElementById('products')).render(
  <StrictMode>
     <App/>
  </StrictMode>
)
createRoot(document.getElementById('AddProuduct')).render(
  <StrictMode>
   <Product/>
  </StrictMode>
)
createRoot(document.getElementById('oneProduct')).render(
  <StrictMode>
  <OneProduct/>
  </StrictMode>
)

createRoot(document.getElementById('updateproduct')).render(
  <StrictMode>
  <UpdateProduct/>
  </StrictMode>
)

createRoot(document.getElementById('deleteProduct')).render(
  <StrictMode>
  <DeleteProduct/>
  </StrictMode>
)