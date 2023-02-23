import "./About.css";
import {Link} from "react-router-dom";
function About(){
    return(
        <div className="about-container">
        <h1 className="about-heading">This is About Page</h1>
        <Link to="/Home">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/About">About</Link>
        </div>
    )
    
}
export default About