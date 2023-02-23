import "./Home.css";
import {Link} from "react-router-dom";
function Home(){
    return(
        <div className="home-container">
        <h1 className="home-heading">This is Home Page</h1>
        <Link to="/Home">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/About">About</Link>
        
        
      
        </div>
    )
    
}
export default Home