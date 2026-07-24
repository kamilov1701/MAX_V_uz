// import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "../assets/vite.svg";
// import heroImg from "../assets/hero.png";
// import "../App.css";
// import HeaderLogo from "../assets/Header_BG.png";

// function Home() {
//     const [count, setCount] = useState(0);

//     return (
//         <>
//         <div style={{ backgroundImage: `url(${HeaderLogo})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }}>
//             <div className="container">
//                 <div className="header_content max-w-[568px] w-full pt-[90px]">
//                     <h1 className="text-[72px] font-bold text-[#fff]">Building the Future with Code</h1>
//                     <p className="text-[#C2C6D6] text-[18px] max-w-[512px] w-full">We are a team of visionary developers crafting high-performance web applications.</p>
//                     <button><a href="#!">Explore Projects</a></button>
//                     <button><a href="#!">Apply for MAX - V</a></button>
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// }

// export default Home;



















import { useState } from "react";
import "../App.css";
import HeaderLogo from "../assets/Header_BG.png";

function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${HeaderLogo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="min-h-screen flex items-center"
            >
                <div className="container mx-auto px-5 sm:px-8 lg:px-0">
                    <div className="header_content max-w-[568px] w-full py-20 lg:py-0">

                        <h1
                            className="
                                text-white
                                font-bold
                                leading-tight
                                text-[40px]
                                sm:text-[52px]
                                md:text-[60px]
                                lg:text-[72px]
                            "
                        >
                            Building the Future with Code
                        </h1>

                        <p
                            className="
                                text-[#C2C6D6]
                                mt-5
                                max-w-[512px]
                                text-[16px]
                                sm:text-[17px]
                                lg:text-[18px]
                            "
                        >
                            We are a team of visionary developers crafting
                            high-performance web applications.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">

                            <button
                                className="
                                    bg-[#1251a3]
                                    text-white
                                    px-8
                                    py-3
                                    rounded-xl
                                    hover:bg-[#0f458d]
                                    transition
                                    w-full
                                    sm:w-auto
                                "
                            >
                                <a href="#!">Explore Projects</a>
                            </button>

                            <button
                                className="
                                    border
                                    border-white
                                    text-white
                                    px-8
                                    py-3
                                    rounded-xl
                                    hover:bg-white
                                    hover:text-black
                                    transition
                                    w-full
                                    sm:w-auto
                                "
                            >
                                <a href="#!">Apply for MAX - V</a>
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;