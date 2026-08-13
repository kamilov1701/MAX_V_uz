import { Mail } from "lucide-react";

function Contact() {
    return (
        <div>
            <header className="bg-[#111827]">
                <div>
                    <div className="container flex flex-col items-center">
                        <div className="flex gap-[8px] justify-center rounded-full items-center w-[243px] h-[26px] bg-[#adc6ff33] border border-[#adc6ff8f]">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#ADC6FF] "></div>
                            <p className="text-[12px] font-medium text-[#ADC6FF]">
                                CONNECT WITH THE FUTURE
                            </p>
                        </div>
                    </div>
                    <h1 className="text-[72px] text-[#DFE2F1] font-bold text-center textt">
                        Let's build something <br /> extraordinary together.
                    </h1>
                    <p className="text-[18px] text-[#C2C6D6] font-normal mt-[23px] text-center pb-[138px]">
                        Engineering high-performance solutions for visionaries and industry
                        leaders.
                    </p>
                </div>
            </header>
            <main>
                <section className="bg-[#111827] ">
                    <div className="container flex gap-[80px] pb-[80px]">
                        <div className="">
                            <h2 className="text-[#ADC6FF] text-[24px] font-medium">Get in touch</h2>
                            <p className="text-[#C2C6D6] text-[14px] font-normal w-[400px] mt-[7px]">
                                Bizning jamoamiz sizning loyihangizni yangi bosqichga olib
                                chiqishga tayyor. Bog'laning va kelajakni birga quramiz.
                            </p>
                            <div className="h-[302px] w-[460px]">
                                <a className="inline-block mt-[24px]" href="">
                                    <div className="bg-[#171B2680] flex gap-[16px] px-[16px] py-[16px] border-[#42475433] border w-[400px] rounded-[12px]">
                                        <Mail className="text-[#ADC6FF] bg-[#0053DB33] px-[10px] py-[10px] rounded-[8px] w-[48px] h-[48px]" />
                                        <span>
                                            <p className="text-[#C2C6D6] text-[12px] font-medium">EMAIL</p>
                                            <p className="text-[#DFE2F1] text-[16px] font">hello@maxvteam.com</p>
                                        </span>
                                    </div>
                                </a>
                                <a href="https://t.me/MAX_V_uzbot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-[24px]"
                                >
                                    <div className="bg-[#171B2680] flex gap-[16px] px-[16px] py-[16px] border-[#42475433] border w-[400px] rounded-[12px]">
                                        <Mail className="text-[#ADC6FF] bg-[#0053DB33] px-[10px] py-[10px] rounded-[8px] w-[48px] h-[48px]" />
                                        <span>
                                            <p className="text-[#C2C6D6] text-[12px] font-medium">TELEGRAM</p>
                                            <p className="text-[#DFE2F1] text-[16px] font">@MAX_V_uzbot</p>
                                        </span>
                                    </div>
                                </a>
                                <a className="inline-block mt-[24px]" href="https://maps.app.goo.gl/zSjw9ssUi5s7c3vN7" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-[#171B2680] flex gap-[16px] px-[16px] py-[16px] border-[#42475433] border w-[400px] rounded-[12px]">
                                        <Mail className="text-[#ADC6FF] bg-[#0053DB33] px-[10px] py-[10px] rounded-[8px] w-[48px] h-[48px]" />
                                        <span>
                                            <p className="text-[#C2C6D6] text-[12px] font-medium">LOCATION</p>
                                            <p className="text-[#DFE2F1] text-[16px] font">Bog'ot tumani, IT Park binosi</p>
                                        </span>
                                    </div>
                                </a>
                                <a className="inline-block mt-[24px]" href="https://www.instagram.com/max_v.uz/" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-[#171B2680] flex gap-[16px] px-[16px] py-[16px] border-[#42475433] border w-[400px] rounded-[12px]">
                                        <Mail className="text-[#ADC6FF] bg-[#0053DB33] px-[10px] py-[10px] rounded-[8px] w-[48px] h-[48px]" />
                                        <span>
                                            <p className="text-[#C2C6D6] text-[12px] font-medium">INSTAGRAM</p>
                                            <p className="text-[#DFE2F1] text-[16px] font">max_v.uz</p>
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <p className="text-[12px] text-[#C2C6D6] font-medium mt-[150px] mb-[16px]">FOLLOW OUR JOURNEY</p>
                        </div>

                        <div className="w-full max-w-[676px] h-[580px] rounded-[22px] bg-[#111724] border border-[#202838] p-[42px]">

                            <div className="grid grid-cols-2 gap-[16px]">

                                <div>
                                    <label className="block mb-[10px] ml-[3px] text-[11px] font-medium tracking-[0.4px] text-[#C2C6D6]">
                                        ISMINGIZ / NAME
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full h-[43px] rounded-[10px] border border-[#1D2635] bg-[#090E18] px-[14px] text-[14px] text-[#DFE2F1] placeholder:text-[#454B59] outline-none transition-all focus:border-[#719CF5]"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-[10px] ml-[3px] text-[11px] font-medium tracking-[0.4px] text-[#C2C6D6]">
                                        EMAIL MANZILINGIZ
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full h-[43px] rounded-[10px] border border-[#1D2635] bg-[#090E18] px-[14px] text-[14px] text-[#DFE2F1] placeholder:text-[#454B59] outline-none transition-all focus:border-[#719CF5]"
                                    />
                                </div>

                            </div>

                            <div className="mt-[18px]">

                                <label className="block mb-[10px] ml-[3px] text-[11px] font-medium tracking-[0.4px] text-[#C2C6D6]">
                                    PROJECT TYPE
                                </label>

                                <select
                                    className="w-full h-[43px] appearance-none rounded-[10px] border border-[#1D2635] bg-[#090E18] px-[14px] text-[14px] text-[#C2C6D6] outline-none transition-all focus:border-[#719CF5]"
                                    defaultValue="Enterprise Web Application"
                                >
                                    <option>Enterprise Web Application</option>
                                    <option>Mobile Application</option>
                                    <option>E-commerce Website</option>
                                    <option>Landing Page</option>
                                    <option>UI/UX Design</option>
                                    <option>Other</option>
                                </select>

                            </div>

                            <div className="mt-[18px]">

                                <label className="block mb-[10px] ml-[3px] text-[11px] font-medium tracking-[0.4px] text-[#C2C6D6]">
                                    XABARINGIZ / MESSAGE
                                </label>

                                <textarea
                                    rows="4"
                                    placeholder="Briefly describe your vision..."
                                    className="w-full h-[104px] resize-none rounded-[10px] border border-[#1D2635] bg-[#090E18] px-[14px] py-[13px] text-[14px] text-[#DFE2F1] placeholder:text-[#454B59] outline-none transition-all focus:border-[#719CF5]"
                                />

                            </div>

                            <button
                                type="submit"
                                className="mt-[34px] flex h-[57px] w-full items-center justify-center gap-[10px] rounded-[11px] bg-[#ADC6FF] text-[21px] font-bold text-[#073675] shadow-[0_0_25px_rgba(120,160,255,0.25)] transition-all duration-300 cursor-pointer"
                            >
                                SUBMIT PROJECT REQUEST
                                <span className="text-[23px]">🚀</span>
                            </button>

                            <p className="mt-[12px] text-center text-[11px] tracking-[0.3px] text-[#C2C6D6]">
                                We typically respond within 12 business hours.
                            </p>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Contact;
