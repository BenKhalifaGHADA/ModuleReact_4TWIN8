import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from 'react-router-dom';
//import products from "../products.json";
import { getProductById } from '../service/api';
import { useState,useEffect } from 'react';
function ProductDetails() {
   const {id} = useParams();
   const [product, setProduct] = useState([]);
    
   useEffect(() => {
     getProductById(id).then((data) => {
       console.log(data)
       setProduct(data);
     });
     
   },[]);
   console.log(product.img);

 
  return (
    <Container style={{ marginTop: "30px" }}>
      {product.id !== undefined? <Row>
          <Col md={4}>
         
            <Card.Img
              variant="top"
              src={require("../assets/images/"+ product.img)}
              alt="Product Img"
              height="50"
              
            />
          </Col>
          <Col md={8}>
          <Row>
          <Col md={12}>
            <h1>{product.name}</h1>
            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Description</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>
            {product.description}
            </p>
            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Price</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>{product.price} DT</p>

            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Likes</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>{product.like}</p>
            </Col>
            </Row>
          </Col>
        </Row>
      : "Product does not exist" }
        
      </Container>
  )
}

export default ProductDetails