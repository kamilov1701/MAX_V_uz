// import { Link } from "react-router-dom";
// import Navlogo from "../assets/MAX_-_LOAN-logo.png";
// import BG_Footer from "../assets/Footer_photo.png";

// function Navbar() {
//     return (
//         <nav style={{ backgroundImage: `url(${BG_Footer})` }} className=" flex flex-nowrap items-center h-[70px]">
//             <div className="container nav_div flex items-center">
//                 <div className="flex items-center mr-[20px]">
//                     <img className="w-[75px]" src={Navlogo} alt="" />
//                 </div>
//                 <div className="flex ml-[360px] gap-[35px] items-center flex-1 text-[#C2C6D6] text-[19px] font-semibold">
//                     <Link to="/">Home</Link> {" "}
//                     <Link to="/about">About</Link> {" "}
//                     <Link to="/projects">Projects</Link> {" "}
//                     <Link to="/contact">Contact</Link>
//                 </div>
//                 <div className="bg-[#1251a3] w-[145px] h-[42px] rounded-[12px] flex items-center justify-center">
//                     <a className="text-white text-[16px]" href="#!"><button>Contact with US</button></a>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;













import { useState } from "react";
import { Link } from "react-router-dom";
import Navlogo from "../assets/MAX_-_LOAN-logo.png";
import BG_Footer from "../assets/Footer_photo.png";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav
                style={{ backgroundImage: `url(${BG_Footer})` }}
                className="w-full bg-cover bg-center h-[70px] relative z-50"
            >
                <div className="container mx-auto px-4 h-full flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            className="w-[60px] sm:w-[65px] lg:w-[75px]"
                            src={Navlogo}
                            alt="Logo"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8 text-[#C2C6D6] text-[19px] font-semibold">
                        <Link to="/" className="hover:text-white transition">
                            Home
                        </Link>

                        <Link to="/about" className="hover:text-white transition">
                            About
                        </Link>

                        <Link to="/projects" className="hover:text-white transition">
                            Projects
                        </Link>

                        <Link to="/contact" className="hover:text-white transition">
                            Contact
                        </Link>
                    </div>

                    {/* Desktop Button */}
                    <div className="hidden lg:flex bg-[#1251a3] w-[145px] h-[42px] rounded-[12px] items-center justify-center">
                        <button className="text-white text-[16px]">
                            Contact with US
                        </button>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(true)}
                        className="lg:hidden text-white text-3xl"
                    >
                        ☰
                    </button>

                </div>
            </nav>

            {/* Overlay */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-screen w-[280px] bg-[#08111f] shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-5 border-b border-gray-700">
                    <img
                        src={Navlogo}
                        alt=""
                        className="w-[55px]"
                    />

                    <button
                        onClick={() => setOpen(false)}
                        className="text-white text-3xl"
                    >
                        ✕
                    </button>
                </div>

                <div className="flex flex-col mt-6">

                    <Link
                        to="/"
                        onClick={() => setOpen(false)}
                        className="px-8 py-4 text-[#C2C6D6] hover:bg-[#1251a3] hover:text-white transition"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        onClick={() => setOpen(false)}
                        className="px-8 py-4 text-[#C2C6D6] hover:bg-[#1251a3] hover:text-white transition"
                    >
                        About
                    </Link>

                    <Link
                        to="/projects"
                        onClick={() => setOpen(false)}
                        className="px-8 py-4 text-[#C2C6D6] hover:bg-[#1251a3] hover:text-white transition"
                    >
                        Projects
                    </Link>

                    <Link
                        to="/contact"
                        onClick={() => setOpen(false)}
                        className="px-8 py-4 text-[#C2C6D6] hover:bg-[#1251a3] hover:text-white transition"
                    >
                        Contact
                    </Link>

                    <div className="px-6 mt-8">
                        <button className="w-full h-[45px] bg-[#1251a3] rounded-xl text-white">
                            Contact with US
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Navbar;