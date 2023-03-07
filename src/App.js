// import logo from './logo.svg';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { Suspense } from 'react';


const UpdateProduct = React.lazy(()=> import('./ComposantFonctionnelle/UpdateProduct'))
const AddProduct = React.lazy(()=> import('./ComposantFonctionnelle/AddProduct'))
const ProductsFunc = React.lazy(()=> import('./ComposantFonctionnelle/ProductsFunc'))
const ProductDetails = React.lazy(()=> import('./ComposantFonctionnelle/ProductDetails'))
const NavbarComponent = React.lazy(()=> import('./ComposantFonctionnelle/NavigationBar'))
const NotFound = React.lazy(()=> import('./ComposantFonctionnelle/NotFound'))

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
      <Route path='add' element={<AddProduct />}/>
      <Route path=':id' element={<ProductDetails />}/>
      <Route path='update/:id' element={<UpdateProduct />}/>
    </Route>
  
    


      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </Suspense>
      {/* <UserManagment /> */}
    </div>
  );
}

export default App;
