import { Component } from "react";
import Button from 'react-bootstrap/Button';
class ComposantClass extends Component {
    state = { monTexte: "Hello 4TWIN8",
              valeur: 0 } 
    handleClick = () => {
                this.setState({
                valeur : this.state.valeur + 1
                })
            }
    render() { 
        return (<>
         <input type="button" onClick={()=>this.handleClick()} value="Incrémenter"/>
         <Button variant="primary" onClick={()=>this.handleClick()}>Incrémenter</Button>
        <h2>{this.state.valeur}</h2>
        Ceci est un composant de classe
        <h1>Le contenu de mon texte est:{this.state.monTexte}</h1>    
        </>);
    }
}
 export default ComposantClass;
 