import { Link } from "react-router-dom";
import Navlogo from "../assets/MAX_-_LOAN-logo.png";
import BG_Footer from "../assets/Footer_photo.png";

function Navbar() {
    return (
        <nav style={{ backgroundImage: `url(${BG_Footer})` }} className=" flex flex-nowrap items-center h-[70px]">
            <div className="container nav_div flex items-center">
                <div className="flex items-center mr-[20px]">
                    <img className="w-[75px]" src={Navlogo} alt="" />
                </div>
                <div className="flex ml-[360px] gap-[35px] items-center flex-1 text-[#C2C6D6] text-[19px] font-semibold">
                    <Link to="/">Services</Link> {" "}
                    <Link to="/about">Projects</Link> {" "}
                    <Link to="/projects">Team</Link> {" "}
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="bg-[#1251a3] w-[145px] h-[42px] rounded-[12px] flex items-center justify-center">
                    <a className="text-white text-[16px]" href="#!"><button>Contact with US</button></a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;