import React from 'react';
import "./Cart.css"
const Cart = ({cart}) => {
   let total = 0; 
   let shipping = 0; 
   let quantity = 0; 
   for(const product of cart){
      quantity  = quantity + product.quantity; 
      total = total + product.price * product.quantity; 
      shipping =shipping + product.shipping;
   }
   const tax = (total * 0.1).toFixed(2); 
   const grandTotal = total + shipping+ parseFloat(tax); 
   return (
      <div className='position-sticky top-50 cart text-center text-md-left'>
         <h3 className='text-center mt-3 fw-bold'>Order Summary:</h3>
         <p className='mt-3'>Product Added : {quantity} </p>
         <p>Total Price : ${total}</p>
         <p>Shipping Price : ${shipping}</p>
         <p>Tax: ${tax}</p>
         <h5 className='mt-3 fw-bold'>Grand Total: ${grandTotal}</h5>
      </div>
   );
};

export default Cart;