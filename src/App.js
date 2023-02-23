import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Contact from "./Views/Contact/Contact";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      
    </>
  
    
  );
}
export default App;
