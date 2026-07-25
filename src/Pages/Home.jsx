import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";
import "../App.css";
import HeaderLogo from "../assets/Header_BG.png";
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";
import Icon4 from "../assets/Icon4.png";
import Icon5 from "../assets/Icon5.png";
import Icon6 from "../assets/Icon6.png";

function Home() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div style={{ backgroundImage: `url(${HeaderLogo})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }}>
                <div className="container">
                    <div className="header_content max-w-[568px] w-full pt-[90px] flex flex-col gap-[23px]">
                        <div className="flex items-center justify-center gap-[8px] border border-[#ADC6FF] rounded-full w-[219px] h-[22px] ">
                            <div className="rounded-full bg-[#ADC6FF] w-[8px] h-[8px]"></div>
                            <p className="text-[#ADC6FF] text-[12px]">NOW ACCEPTING PROJECTS</p>
                        </div>
                        <h1 className="text-[72px] font-bold text-[#fff] leading-[80px]">Building the Future with Code</h1>
                        <p className="text-[#C2C6D6] text-[18px] max-w-[512px] w-full">We are a team of visionary developers crafting high-performance web applications.</p>
                        <button className="w-[286px] h-[72px] bg-[#ADC6FF] rounded-[12px] text-[#002E6A] font-bold text-[16px] border border-black"><a href="#!">Explore Projects</a></button>
                        <button className="w-[286px] h-[72px] bg-[#111827] rounded-[12px] text-[#ADC6FF] font-bold text-[16px] border border-[#ADC6FF]"><a href="#!">Apply for MAX - V</a></button>
                    </div>
                </div>
            </div>


            <section>
                <div className=" bg-[#111827]  ">
                    <div className="container">
                        <div className="w-[632px] flex flex-col gap-[15px] py-[80px]">
                            <h1 className="text-[48px] text-[#ADC6FF] font-semibold">Specialized Services</h1>
                            <p className="text-[#C2C6D6] text-[18px]">We don't just build software; we engineer competitive advantages through
                                technological excellence and precise implementation.</p>
                        </div>
                        <div>
                            <div className="flex gap-[24px]">
                                <div className="w-[389px] h-[258px] bg-[#111827] border border-[#1F2937] rounded-[12px] ">
                                    <div className="w-[339px] px-[24px] pt-[24px] flex flex-col gap-[15px]">
                                        <img className="w-[30px] h-[30px]" src={Icon1} alt="Icon1" />
                                        <h3 className="text-[24px] text-[#DFE2F1] font-[500]">Web Platforms</h3>
                                        <p className="text-[16px] text-[#C2C6D6] font-regular">Enterprise-grade web applications built with
                                            React and Next.js, optimized for scale and
                                            SEO.</p>
                                    </div>
                                </div>
                                <div className="w-[389px] h-[258px] bg-[#111827] border border-[#1F2937] rounded-[12px] ">
                                    <div className="w-[339px] px-[24px] pt-[24px] flex flex-col gap-[15px]">
                                        <img className="w-[22.5px] h-[30px]" src={Icon2} alt="Icon2" />
                                        <h3 className="text-[24px] text-[#DFE2F1] font-[500]">Mobile Native</h3>
                                        <p className="text-[16px] text-[#C2C6D6] font-regular">High-performance iOS and Android apps
                                            using Flutter and Swift for seamless cross-
                                            platform experiences.</p>
                                    </div>
                                </div>
                                <div className="w-[389px] h-[258px] bg-[#111827] border border-[#1F2937] rounded-[12px] ">
                                    <div className="w-[339px] px-[24px] pt-[24px] flex flex-col gap-[15px]">
                                        <img className="w-[30px] h-[30px]" src={Icon3} alt="Icon3" />
                                        <h3 className="text-[24px] text-[#DFE2F1] font-[500]">UI/UX Design</h3>
                                        <p className="text-[16px] text-[#C2C6D6] font-regular">Futuristic, user-centric designs focused on
                                            conversion and technical precision.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="flex gap-[24px] mt-[31px]">
                                <div className="w-[389px] h-[258px] bg-[#111827] border border-[#1F2937] rounded-[12px] ">
                                    <div className="w-[339px] px-[24px] pt-[24px] flex flex-col gap-[15px]">
                                        <img className="w-[27px] h-[28.5px]" src={Icon4} alt="Icon4" />
                                        <h3 className="text-[24px] text-[#DFE2F1] font-[500]">Backend Architecture</h3>
                                        <p className="text-[16px] text-[#C2C6D6] font-regular">Robust, secure, and distributed systems
                                            built with Go, Python, and Node.js.</p>
                                    </div>
                                </div>
                                <div className="w-[389px] h-[258px] bg-[#111827] border border-[#1F2937] rounded-[12px] ">
                                    <div className="w-[339px] px-[24px] pt-[24px] flex flex-col gap-[15px]">
                                        <img className="w-[28.5px] h-[30px]" src={Icon5} alt="Icon5" />
                                        <h3 className="text-[24px] text-[#DFE2F1] font-[500]">AI Integration</h3>
                                        <p className="text-[16px] text-[#C2C6D6] font-regular">Empowering businesses with LLM custom
                                            agents, computer vision, and predictive
                                            analytics.</p>
                                    </div>
                                </div>
                                <div className="w-[389px] h-[258px] bg-[#111827] border border-[#1F2937] rounded-[12px] ">
                                    <div className="w-[339px] px-[24px] pt-[24px] flex flex-col gap-[15px]">
                                        <img className="w-[33px] h-[24px]" src={Icon6} alt="Icon6" />
                                        <h3 className="text-[24px] text-[#DFE2F1] font-[500]">Cloud DevOps</h3>
                                        <p className="text-[16px] text-[#C2C6D6] font-regular">Automated deployments and zero-downtime
                                            infrastructure on AWS and GCP.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;



















// import { useState } from "react";
// import "../App.css";
// import HeaderLogo from "../assets/Header_BG.png";

// function Home() {
//     const [count, setCount] = useState(0);

//     return (
//         <>
//             <div
//                 style={{
//                     backgroundImage: `url(${HeaderLogo})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                 }}
//                 className="min-h-screen flex items-center"
//             >
//                 <div className="container mx-auto px-5 sm:px-8 lg:px-0">
//                     <div className="header_content max-w-[568px] w-full py-20 lg:py-0">

//                         <h1
//                             className="
//                                 text-white
//                                 font-bold
//                                 leading-tight
//                                 text-[40px]
//                                 sm:text-[52px]
//                                 md:text-[60px]
//                                 lg:text-[72px]
//                             "
//                         >
//                             Building the Future with Code
//                         </h1>

//                         <p
//                             className="
//                                 text-[#C2C6D6]
//                                 mt-5
//                                 max-w-[512px]
//                                 text-[16px]
//                                 sm:text-[17px]
//                                 lg:text-[18px]
//                             "
//                         >
//                             We are a team of visionary developers crafting
//                             high-performance web applications.
//                         </p>

//                         <div className="flex flex-col sm:flex-row gap-4 mt-8">

//                             <button
//                                 className="
//                                     bg-[#1251a3]
//                                     text-white
//                                     px-8
//                                     py-3
//                                     rounded-xl
//                                     hover:bg-[#0f458d]
//                                     transition
//                                     w-full
//                                     sm:w-auto
//                                 "
//                             >
//                                 <a href="#!">Explore Projects</a>
//                             </button>

//                             <button
//                                 className="
//                                     border
//                                     border-white
//                                     text-white
//                                     px-8
//                                     py-3
//                                     rounded-xl
//                                     hover:bg-white
//                                     hover:text-black
//                                     transition
//                                     w-full
//                                     sm:w-auto
//                                 "
//                             >
//                                 <a href="#!">Apply for MAX - V</a>
//                             </button>

//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Home;