// import logo from './logo.svg';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { Suspense } from 'react';
import Acceuil from './Components/Acceuil';
import ComposantClass from './Components/ComposantClass';
import Composantcycle from './Components/Composantcycle';
import ComposantFunct from './Components/ComposantFunct';
import Contact from './Components/Contact';
import Home from './Components/Home';
// import NotFound from './ComposantFonctionnelle/NotFound';
import Personne from './Components/Personne';
import Product from './Components/Product';
import Product1 from './Components/Product1';
import Products from './Components/Products';
// import ProductsFunc from './ComposantFonctionnelle/ProductsFunc';
// import NavbarComponent from './ComposantFonctionnelle/NavigationBar';
import ProductFunc from './ComposantFonctionnelle/ProductFunc';
// import ProductDetails from './ComposantFonctionnelle/ProductDetails';
const ProductsFunc = React.lazy(()=> import('./ComposantFonctionnelle/ProductsFunc'))
const ProductDetails = React.lazy(()=> import('./ComposantFonctionnelle/ProductDetails'))
const NavbarComponent = React.lazy(()=> import('./ComposantFonctionnelle/NavigationBar'))
const NotFound = React.lazy(()=> import('./ComposantFonctionnelle/NotFound'))
const option=(
  <ol>
    <li>TWIN</li>
    <li>BI</li>
    <li>SAE</li>
  </ol>
)
let x="Bonjour" 
var y="tout"
const z="le monde"
const  expression  =  <p>  1  +  1  =  {  1  +  1  }  </p>
var nom="Ghada"
var prenom="BK"
var photo=<img src="logo192.png"></img>
const user={
  username: "test",
  lastname: "test"
}

function formatName(user){
  return user.lastname+ "--- "+ user.lastname
}
var myStyle={
  fontsize: 100,
  color: 'red'
}
function App() {
  return (
    <div className="App">
      {/* <ComposantClass />
      <ComposantFunct />
      <Product1 />
      <Personne/>
      <Personne nom="test" prenom="ceci est un test" />
      <Composantcycle /> */}
      
      {/* <h1 style={myStyle}>Code CSS</h1>
      {formatName(user)}
       Ceci un objet
      {user.lastname} - {user.lastname}
      Hello 4TWIN8
      {option}
      la valeur de x est {x}
      la valeur de y est {y}
      la valeur de z est {z}
      la contenu de l'expression est {expression}
      <br>
      </br>
      Hello {nom} {prenom} {photo} */}
      {/* <Products /> */}
    {/* <ProductsFunc /> */}
    {/* <ul>
      <li><Link to="/home" reloadDocument>Home</Link></li>
      <li><Link to="/Contact/:id">Contact</Link></li>
      <li><Link to="/acceuil">Acceuil</Link></li>
     

    </ul> */}
    {/* <ul>
      <li><NavLink to="/home" reloadDocument>Home</NavLink></li>
      <li><NavLink to="/acceuil">Acceuil</NavLink></li>
     

    </ul> */}
    <Suspense fallback={<p>Chargement ...</p>}>
    <NavbarComponent/>
    <Routes>
      {/* <Route path="/home" element={<Home/>} ></Route>
      <Route path="/Contact/:id" element={<Contact/>}></Route>
      <Route path="/acceuil" element={<Acceuil/>}></Route> */}
       <Route path='/products'>
      <Route index element={<ProductsFunc />}/>

      {/* ProductDetails est un composant fonctionnel ProductDetails qui permet d'afficher un produit selon le nom */}
      <Route path=':name' element={<ProductDetails />}/>
    </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </Suspense>
      
    </div>
  );
}

export default App;
