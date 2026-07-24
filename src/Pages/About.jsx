import "../app.css";
import SpeedIcon from "../assets/Icon.png";
import SectionImage from "../assets/SectionImage.jpg";
import MaxMan from "../assets/Max.jpg";

function About() {
    return (
        <div>
            <header>
                <div className="w-full h-[614px] bg-[#0F131D]">
                    <div className="container flex flex-col justify-center h-full">
                        <div className="flex gap-[18px] flex-col h-[310px]">
                            <div className="w-[193px] h-[22px] border-[2px] border-[#ADC6FF] rounded-[99999px] bg-[#0F131D] text-[12px] flex items-center justify-center text-[#ADC6FF] font-semibold">
                                <p>ENGINEERING THE FUTURE</p>
                            </div>
                            <div className="flex flex-col gap-[18px]">
                                <h1 className="text-white text-[72px] font-bold leading-[80px] max-w-[735px] w-full">
                                    The Minds Behind
                                    <span className="text-[#ADC6FF]"> The Code.</span>
                                </h1>
                                <p className="text-[#C2C6D6] text-[19px] w-[543px]">
                                    We are a collective of high-performance engineers dedicated to
                                    building the backbone of the next digital era through precision,
                                    speed, and luxury design.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section>
                <div className="w-full h-[764px] bg-[#0F131D]">
                    <div className="container flex flex-col justify-center h-[604px] h-full">
                        <div className="h-[124px]">
                            {/* animation */}
                        </div>
                        <div className="flex gap-[100px]">
                            <div className="text-[#fff] ">
                                <div className="flex flex-col gap-[24px]">
                                    <h1 className="text-[48px] font-semibold">Our Legacy & Mission</h1>
                                    <p className="w-[568px] h-[156px] text-[16px] text-[#C2C6D6]">Founded in the heart of the digital frontier, MAX V Team emerged as a
                                        response to the growing complexity of modern software requirements. We
                                        don't just write code; we architect experiences that endure. Our mission is
                                        to bridge the gap between ambitious vision and flawless execution,
                                        providing the world's most innovative brands with the engineering muscle
                                        they need to lead.
                                    </p>
                                </div>

                                <div className="flex mt-[10px]">
                                    <div className="w-[48px] h-[48px] rounded-[8px] bg-[#262A35] flex items-center justify-center">
                                        <img src={SpeedIcon} alt="Speed Icon" />
                                    </div>
                                    <div className="ml-[16px]">
                                        <h1 className="text-[18px] font-bold">Velocity</h1>
                                        <p className="text-[12px] text-[#C2C6D6]">Rapid prototyping without compromising stability.</p>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <img className="w-[568px] h-[400px]" src={SectionImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="w-full h-[980px] bg-[#0A0E18]">
                    <div className="container flex flex-col justify-center h-[604px] h-full">
                        <div className="flex flex-col items-center">
                            <h2 className="text-[48px] text-[#FFFFFF]">The Visionaries</h2>
                            <p className=" max-w-[672px] h-full text-center text-[#C2C6D6]">Meet the architects of the MAX V ecosystem—leaders who combine technical mastery
                                with strategic foresight.</p>
                        </div>
                        <div className="flex gap-[48px] mt-[80px]">
                            <div>
                                <div className="w-[371px] h-[609px] bg-[#0F131D] rounded-[16px] flex flex-col items-center gap-[8px] mt-[16px]">
                                    <div className="w-[371px] h-[400px]">
                                        <img className="w-full h-full object-cover rounded-t-[16px]" src={MaxMan} alt="Max Man" />
                                    </div>
                                    <div className="w-[323px] flex flex-col gap-[8px] ">
                                        <h3 className="text-[24px] text-[#FFFFFF]">Azizbek Kamilov</h3>
                                        <p className="text-[16px] text-[#ADC6FF]">FOUNDER & CHIEF ARCHITECT</p>
                                        <p className="text-[14px] text-[#C2C6D6] w-[323px]">"Precision is the foundation of luxury
                                            engineering. We don't build features; we build
                                            standards."</p>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="w-[371px] h-[609px] bg-[#0F131D] rounded-[16px] flex flex-col items-center gap-[8px] mt-[16px]">
                                    <div className="w-[371px] h-[400px]">
                                        <img className="w-full h-full object-cover rounded-t-[16px]" src={MaxMan} alt="Max Man" />
                                    </div>
                                    <div className="w-[323px] flex flex-col gap-[8px] ">
                                        <h3 className="text-[24px] text-[#FFFFFF]">Azizbek Kamilov</h3>
                                        <p className="text-[16px] text-[#ADC6FF]">FOUNDER & CHIEF ARCHITECT</p>
                                        <p className="text-[14px] text-[#C2C6D6] w-[323px]">"Precision is the foundation of luxury
                                            engineering. We don't build features; we build
                                            standards."</p>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="w-[371px] h-[609px] bg-[#0F131D] rounded-[16px] flex flex-col items-center gap-[8px] mt-[16px]">
                                    <div className="w-[371px] h-[400px]">
                                        <img className="w-full h-full object-cover rounded-t-[16px]" src={MaxMan} alt="Max Man" />
                                    </div>
                                    <div className="w-[323px] flex flex-col gap-[8px] ">
                                        <h3 className="text-[24px] text-[#FFFFFF]">Azizbek Kamilov</h3>
                                        <p className="text-[16px] text-[#ADC6FF]">FOUNDER & CHIEF ARCHITECT</p>
                                        <p className="text-[14px] text-[#C2C6D6] w-[323px]">"Precision is the foundation of luxury
                                            engineering. We don't build features; we build
                                            standards."</p>
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

export default About;