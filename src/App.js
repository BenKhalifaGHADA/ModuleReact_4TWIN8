// import logo from './logo.svg';
import './App.css';
import ComposantClass from './Components/ComposantClass';
import Composantcycle from './Components/Composantcycle';
import ComposantFunct from './Components/ComposantFunct';
import Personne from './Components/Personne';
import Product from './Components/Product';
import Product1 from './Components/Product1';
import Products from './Components/Products';


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
      <Products />
      
      
    </div>
  );
}

export default App;
