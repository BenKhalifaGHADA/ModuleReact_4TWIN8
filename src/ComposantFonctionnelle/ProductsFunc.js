import { useEffect, useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import products from "../products.json";
import ProductFunc from "./ProductFunc";
import Alert from 'react-bootstrap/Alert';
function ProductsFunc(props) {
    const [showAlert,setshowAlert]=useState(false);
    const [showWelcome,setshowWelcome]=useState(true);
    
    const buy = (product,updateQuantity) => {
        product.quantity--;
        updateQuantity(product.quantity);
        console.log( product.quantity--)
        showAlert1();
        
       };
    
       
       const showAlert1 = () => {
        setshowAlert(true);
        setTimeout(()=>{
            setshowAlert(false)
        },2000);
      
      };
      useEffect(()=>{
       
        setTimeout(()=>{
            setshowWelcome(false)
        },3000);
      
      })
    return ( <>
     {showWelcome && (
          <Alert variant="success">Welcome to our store!</Alert>
        )}
        <CardGroup>
          {products.map((p, i) => (
             <ProductFunc key={i} product={p} buyFunction={buy}/>))}
             
         </CardGroup>
         {showAlert && (
          <Alert variant="success">You bought an Item</Alert>
        )}
        
    </> );
}

export default ProductsFunc;