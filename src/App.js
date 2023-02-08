// import logo from './logo.svg';
import './App.css';
import ComposantClass from './Components/ComposantClass';
import ComposantFunct from './Components/ComposantFunct';
import Product from './Components/Product';

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
      <ComposantClass />
      <ComposantFunct />
      <Product />
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
      
    </div>
  );
}

export default App;
