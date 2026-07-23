import { Link } from "react-router-dom";
import Navlogo from "../assets/MAX_-_LOAN-logo.png";

function Navbar() {
    return (
        <nav>
            <img src={Navlogo} alt="" />
            <div className="container nav_content">
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/projects">Projects</Link> |{" "}
                <Link to="/contact">Contact</Link>
            </div>
            <a href="#!"><button>Contact with US</button></a>
        </nav>
    );
}

export default Navbar;