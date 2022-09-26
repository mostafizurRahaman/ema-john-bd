import React, { useEffect, useState } from 'react';
import { addToDb, getStoredProducts } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
   const [products, setProduct] = useState([]); 
   const [cart , setCart] = useState([]); 
   useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProduct(data)); 
   }, []); 
   useEffect(()=>{
      const storedCart = getStoredProducts(); 
      let saveCart = []; 
      if(storedCart){
         for(const id in storedCart){
             const addProduct = products.find(product => product.id === id); 
             if(addProduct){
               const quantity = storedCart[id]; 
               addProduct.quantity = quantity; 
               saveCart.push(addProduct); 
             }
         }
      }
      setCart(saveCart); 

   }, [products])
   const addToCart = selectedProduct => {
         let newCart = []; 
         const exits = products.find(product => product.id === selectedProduct.id); 
         if(!exits){
            selectedProduct.quantity = 1; 
            newCart = [...cart, selectedProduct]; 
         }else{
            const rest = products.filter(product => product.id !== exits.id); 
            exits.quantity = exits.quantity + 1; 
               newCart = [...rest, exits]
         }
         setCart(newCart); 
         addToDb(selectedProduct.id);
          
   }
   return (
      <div className='row'>
         <div className='col-12 col-md-9'>
             <div className='row g-3 m-3'>
             {
               products.map(product => <Product product={product} key={product.id} addToCart={addToCart}></Product>)
             }
             </div>
         </div>
         <div className='col-md-3 cart-container'>
               <Cart cart={cart}></Cart>
         </div>
      </div>
   );
};

export default Shop;