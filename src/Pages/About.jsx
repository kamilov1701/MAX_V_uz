import SpeedIcon from "../assets/Icon.png";
import SectionImage from "../assets/SectionImage.jpg";
import MaxMan from "../assets/Max.jpg";
import StatsSection from "../Components/StatsSection";
import racket from "../assets/racket.png";
import card from "../assets/cardd.png";

function About() {
    return (
        <div>
            {/* Header Section */}
            <header>
                <div className="w-full min-h-screen lg:h-[614px] bg-[#0F131D]">
                    <div className="container mx-auto px-5 sm:px-8 lg:px-0 flex flex-col justify-center min-h-screen lg:h-full py-10 lg:py-0">

                        <div className="flex flex-col gap-6 lg:gap-[18px]">

                            <div className="w-fit px-5 h-[40px] border-2 border-[#ADC6FF] rounded-full bg-[#0F131D] text-[11px] sm:text-[12px] flex items-center justify-center text-[#ADC6FF] font-semibold">
                                <p>ENGINEERING THE FUTURE</p>
                            </div>

                            <div className="flex flex-col gap-5">

                                <h1
                                    className="
                                        text-white
                                        font-bold
                                        leading-tight
                                        text-[42px]
                                        sm:text-[56px]
                                        md:text-[64px]
                                        lg:text-[72px]
                                        max-w-[735px]
                                    "
                                >
                                    The Minds Behind
                                    <span className="text-[#ADC6FF]">
                                        {" "}
                                        The Code.
                                    </span>
                                </h1>

                                <p
                                    className="
                                        text-[#C2C6D6]
                                        text-[16px]
                                        sm:text-[18px]
                                        lg:text-[19px]
                                        max-w-[543px]
                                        leading-7
                                    "
                                >
                                    We are a collective of high-performance
                                    engineers dedicated to building the backbone
                                    of the next digital era through precision,
                                    speed, and luxury design.
                                </p>

                            </div>

                        </div>

                    </div>
                </div>
            </header>

            {/* Statistics */}

            <section className="bg-[#0F131D] py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-5 sm:px-8 lg:px-0">
                    <StatsSection />
                </div>
            </section>
            <main>

                {/* Our Legacy & Mission */}
                <section>
                    <div className="w-full bg-[#0F131D] py-16 lg:py-24">
                        <div className="container mx-auto px-5 sm:px-8 lg:px-0">

                            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-[100px]">

                                {/* Left Content */}
                                <div className="text-white w-full lg:w-1/2">

                                    <div className="flex flex-col gap-6">

                                        <h1 className="text-[34px] sm:text-[40px] lg:text-[48px] font-semibold">
                                            Our Legacy & Mission
                                        </h1>

                                        <p className="text-[15px] sm:text-[16px] text-[#C2C6D6] leading-8 max-w-[568px]">
                                            Founded in the heart of the digital frontier,
                                            MAX V Team emerged as a response to the growing
                                            complexity of modern software requirements.
                                            We don't just write code; we architect experiences
                                            that endure. Our mission is to bridge the gap
                                            between ambitious vision and flawless execution,
                                            providing the world's most innovative brands with
                                            the engineering muscle they need to lead.
                                        </p>

                                    </div>

                                    <div className="flex items-start mt-8">

                                        <div className="w-[48px] h-[48px] rounded-[8px] bg-[#262A35] flex items-center justify-center flex-shrink-0">
                                            <img src={SpeedIcon} alt="Speed Icon" />
                                        </div>

                                        <div className="ml-4">

                                            <h1 className="text-[18px] font-bold">
                                                Velocity
                                            </h1>

                                            <p className="text-[12px] sm:text-[13px] text-[#C2C6D6] leading-6">
                                                Rapid prototyping without compromising
                                                stability.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                {/* Right Image */}

                                <div className="w-full lg:w-1/2 flex justify-center">

                                    <img
                                        className="
                                            w-full
                                            max-w-[568px]
                                            h-[250px]
                                            sm:h-[350px]
                                            lg:h-[400px]
                                            object-cover
                                            rounded-xl
                                        "
                                        src={SectionImage}
                                        alt=""
                                    />

                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                {/* Team Members */}

                <section>
                    <div className="w-full bg-[#0A0E18] py-16 lg:py-24">
                        <div className="container mx-auto px-5 sm:px-8 lg:px-0">

                            {/* Heading */}
                            <div className="flex flex-col items-center text-center">

                                <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] text-[#FFFFFF] font-semibold">
                                    The Visionaries
                                </h2>

                                <p className="max-w-[672px] mt-4 text-[15px] sm:text-[16px] text-[#C2C6D6] leading-7">
                                    Meet the architects of the MAX V ecosystem—
                                    leaders who combine technical mastery with
                                    strategic foresight.
                                </p>

                            </div>

                            {/* Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 mt-12 lg:mt-20">

                                {/* Card 1 */}
                                <div className="bg-[#0F131D] rounded-[16px] overflow-hidden hover:-translate-y-2 transition duration-300">

                                    <img
                                        className="w-full h-[300px] sm:h-[380px] lg:h-[400px] object-cover"
                                        src={MaxMan}
                                        alt="Max Man"
                                    />

                                    <div className="p-6 flex flex-col gap-3">

                                        <h3 className="text-[22px] lg:text-[24px] text-white font-semibold">
                                            Azizbek Kamilov
                                        </h3>

                                        <p className="text-[#ADC6FF] text-[15px] lg:text-[16px]">
                                            FOUNDER & CHIEF ARCHITECT
                                        </p>

                                        <p className="text-[#C2C6D6] text-[14px] leading-7">
                                            "Precision is the foundation of luxury
                                            engineering. We don't build features;
                                            we build standards."
                                        </p>

                                    </div>

                                </div>

                                {/* Card 2 */}
                                <div className="bg-[#0F131D] rounded-[16px] overflow-hidden hover:-translate-y-2 transition duration-300">

                                    <img
                                        className="w-full h-[300px] sm:h-[380px] lg:h-[400px] object-cover"
                                        src={MaxMan}
                                        alt="Max Man"
                                    />

                                    <div className="p-6 flex flex-col gap-3">

                                        <h3 className="text-[22px] lg:text-[24px] text-white font-semibold">
                                            Azizbek Kamilov
                                        </h3>

                                        <p className="text-[#ADC6FF] text-[15px] lg:text-[16px]">
                                            FOUNDER & CHIEF ARCHITECT
                                        </p>

                                        <p className="text-[#C2C6D6] text-[14px] leading-7">
                                            "Precision is the foundation of luxury
                                            engineering. We don't build features;
                                            we build standards."
                                        </p>

                                    </div>

                                </div>

                                {/* Card 3 */}
                                <div className="bg-[#0F131D] rounded-[16px] overflow-hidden hover:-translate-y-2 transition duration-300">

                                    <img
                                        className="w-full h-[300px] sm:h-[380px] lg:h-[400px] object-cover"
                                        src={MaxMan}
                                        alt="Max Man"
                                    />

                                    <div className="p-6 flex flex-col gap-3">

                                        <h3 className="text-[22px] lg:text-[24px] text-white font-semibold">
                                            Azizbek Kamilov
                                        </h3>

                                        <p className="text-[#ADC6FF] text-[15px] lg:text-[16px]">
                                            FOUNDER & CHIEF ARCHITECT
                                        </p>

                                        <p className="text-[#C2C6D6] text-[14px] leading-7">
                                            "Precision is the foundation of luxury
                                            engineering. We don't build features;
                                            we build standards."
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                {/* SEction_2 */}


                <div className="bg-[#0A0E18] py-[48px] lg:py-[80px]">
                    <section className="container">
                        <div className="flex gap-[24px]">
                            <div className="flex bg-[#111827B2] w-[813px] justify-between p-[48px] rounded-[12px] border border-[#FFFFFF1A]">
                                <div>
                                    <img src={racket} alt="" />
                                    <h2 className="text-[#DFE2F1] text-[24px] font-medium mt-[23px]">
                                        Web Platforms
                                    </h2>
                                    <p className="text-[16px] text-[#C2C6D6] font-normal w-[400px] mt-[8px]">
                                        Hyper-fast, SEO-optimized web experiences built for
                                        high-conversion and industrial scale.
                                    </p>
                                    <div className="flex gap-[8px] mt-[24px]">
                                        <p className="text-[#DFE2F1] text-[12px] font-normal bg-[#313540] px-[8px] py-[4px] border border-[#42475466] rounded-[4px] w-[57px] text-center">
                                            Next.js
                                        </p>
                                        <p className="text-[#DFE2F1] text-[12px] font-normal bg-[#313540] px-[8px] py-[4px] border border-[#42475466] rounded-[4px] w-[51px] text-center">
                                            React
                                        </p>
                                        <p className="text-[#DFE2F1] text-[12px] font-normal bg-[#313540] px-[8px] py-[4px] border border-[#42475466] rounded-[4px] w-[77px] text-center">
                                            TypeScript
                                        </p>
                                        <p className="text-[#DFE2F1] text-[12px] font-normal bg-[#313540] px-[8px] py-[4px] border border-[#42475466] rounded-[4px] w-[63px] text-center">
                                            Tailwind
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img src={card} alt="" />
                                </div>
                            </div>
                            <div className="flex bg-[#111827B2] w-[394px] justify-between p-[48px] rounded-[12px] border border-[#FFFFFF1A]">
                                <div>
                                    <img src={racket} alt="" />
                                    <h2 className="text-[#DFE2F1] text-[24px] font-medium mt-[23px]">
                                        UI/UX Design
                                    </h2>
                                    <p className="text-[16px] text-[#C2C6D6] font-normal w-[297px] mt-[8px]">
                                        Immersive interfaces that balance aesthetic beauty with
                                        functional clarity.
                                    </p>
                                    <div className="flex justify-between items-center mt-[24px]">
                                        <p className="text-[#ADC6FF] text-[12px] font-normal">
                                            FIGMA / ADOBE CC / FRAMER
                                        </p>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value="70"
                                            class="w-[64px] h-[10px] rounded-[20px] bg-[#2b3350] accent-[#a7c1fa]"
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[48px] flex gap-[24px]">
                            <div className="flex bg-[#111827B2] w-[394px] justify-between p-[48px] rounded-[12px] border border-[#FFFFFF1A]">
                                <div>
                                    <img src={racket} alt="" />
                                    <h2 className="text-[#DFE2F1] text-[24px] font-medium mt-[23px]">
                                        UI/UX Design
                                    </h2>
                                    <p className="text-[16px] text-[#C2C6D6] font-normal w-[297px] mt-[8px]">
                                        Immersive interfaces that balance aesthetic beauty with
                                        functional clarity.
                                    </p>
                                    <div className="flex justify-between items-center mt-[24px]">
                                        <p className="text-[#ADC6FF] text-[12px] font-normal">
                                            FIGMA / ADOBE CC / FRAMER
                                        </p>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value="70"
                                            class="w-[64px] h-[10px] rounded-[20px] bg-[#2b3350] accent-[#a7c1fa]"
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="flex bg-[#111827B2] w-[813px] justify-between p-[48px] rounded-[12px] border border-[#FFFFFF1A]">
                                <div>
                                    <img src={racket} alt="" />
                                    <h2 className="text-[#DFE2F1] text-[24px] font-medium mt-[23px]">
                                        Web Platforms
                                    </h2>
                                    <p className="text-[16px] text-[#C2C6D6] font-normal w-[400px] mt-[8px]">
                                        Hyper-fast, SEO-optimized web experiences built for
                                        high-conversion and industrial scale.
                                    </p>
                                    <div className="flex gap-[8px] mt-[24px]">
                                        <p className="text-[#DFE2F1] text-[12px] font-normal bg-[#313540] px-[8px] py-[4px] border border-[#42475466] rounded-[4px] w-[57px] text-center">
                                            Next.js
                                        </p>
                                        <p className="text-[#DFE2F1] text-[12px] font-normal bg-[#313540] px-[8px] py-[4px] border border-[#42475466] rounded-[4px] w-[51px] text-center">
                                            React
                                        </p>
                                        <p className="text-[#DFE2F1] text-[12px] font-normal bg-[#313540] px-[8px] py-[4px] border border-[#42475466] rounded-[4px] w-[77px] text-center">
                                            TypeScript
                                        </p>
                                        <p className="text-[#DFE2F1] text-[12px] font-normal bg-[#313540] px-[8px] py-[4px] border border-[#42475466] rounded-[4px] w-[63px] text-center">
                                            Tailwind
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img src={card} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

        </div >
    );
}

export default About;