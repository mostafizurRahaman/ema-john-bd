import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Product.css';
const Product = ({product, addToCart}) => {
      const {name, img, price, ratings, seller} = product; 
   return (
      <div className="col-12 col-sm-6  col-lg-4">
         <Card style={{height: "520px"}} className="card position-relative">
            <Card.Img variant="top" src={img} alt={name} className="p-2 product-img"/>
            <Card.Body>
               <Card.Title>{name}</Card.Title>
               <Card.Text className="fs-5 fw-bold my-2">Price $: {price}</Card.Text>
               <Card.Text className="fs-6 fw-bold"> <small>Seller: {seller}</small></Card.Text>
               <Card.Text className="fs-6 fw-bold mb-2"> <small>Ratings: {ratings} stars</small></Card.Text>               
            </Card.Body>
            <Button  className="w-100 position-absolute left-0 bottom-0 CartButton" onClick={()=> addToCart(product)}><p className="me-2">add to card</p> <FontAwesomeIcon icon={faShoppingCart} spin></FontAwesomeIcon></Button>
         </Card>
      </div>
   );
};

export default Product;
