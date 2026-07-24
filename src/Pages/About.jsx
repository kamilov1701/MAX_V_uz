function About() {
    return (
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
                                speed, and luxury design.</p>
                        </div>
                    </div> 
                </div>
            </div>
        </header>

    );
}

export default About;