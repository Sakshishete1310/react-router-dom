import "./Contact.css";
import {Link} from "react-router-dom";
function Contact(){
    return(
        <div className="contact-container">
        <h1 className="contact-heading">This is Contact Page</h1>
        <Link to="/Home">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/About">About</Link>
        </div>
    )
    
}
export default Contact