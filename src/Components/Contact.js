import { useNavigate, useParams } from "react-router-dom";
function Contact() {
    const {id}=useParams();
    const navigate=useNavigate();
     return ( <h1>Ceci est une page contact {id}
                 <button onClick={()=>navigate('/home')}>Go to the Home</button>
    </h1> );
}

export default Contact;

