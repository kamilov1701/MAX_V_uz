import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";
import "../App.css";
import HeaderLogo from "../assets/Header_BG.png";

function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
        <div style={{ backgroundImage: `url(${HeaderLogo})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }}>
            <div className="container">
                <div className="header_content max-w-[568px] w-full pt-[90px]">
                    <h1 className="text-[72px] font-bold text-[#fff]">Building the Future with Code</h1>
                    <p className="text-[#C2C6D6] text-[18px] max-w-[512px] w-full">We are a team of visionary developers crafting high-performance web applications.</p>
                    <button><a href="#!">Explore Projects</a></button>
                    <button><a href="#!">Apply for MAX - V</a></button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;