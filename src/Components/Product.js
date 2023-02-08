import { Component } from "react";
class Product extends Component {
    state = {
        produts:[
             {
                "name": "PC Lenovo",
                "price": "1400",
                  "img": "product1.webp",
                  "like":0,
                  "quantity":10,
                  "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
             },
             {
                "name": "Mouse",
                "price": "30",
                "img": "product2.jpg",
                "like":0,
                "quantity":0,
                "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
              },
              {
                "name": "KeyBoard",
                "price": "70",
                "img": "product3.jpg",
                "like":0,
                "quantity":20,
                "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
              }
        ]
      
      }
    render() { 
        return (<>
        {this.state.produts.map((p, i) =><li key={i} >{p.name} -- {p.price}</li>)}
        </>);
    }
}
 
export default Product;<>
</>