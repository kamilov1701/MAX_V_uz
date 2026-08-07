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
          <div className="container">
            <div>
              <h2 className="text-[#ADC6FF] text-[24px] font-medium">Get in touch</h2>
              <p className="text-[#C2C6D6] text-[14px] font-normal w-[400px] mt-[7px]">
                Bizning jamoamiz sizning loyihangizni yangi bosqichga olib
                chiqishga tayyor. Bog'laning va kelajakni birga quramiz.
              </p>

              <div>
                <div className="bg-[#171B2680] flex gap-[16px] px-[16px] py-[16px] border-[#42475433] border w-[400px] mt-[24px] rounded-[12px]">
                    <Mail className="text-[#ADC6FF] bg-[#0053DB33] px-[10px] py-[10px] rounded-[8px] w-[48px] h-[48px]"/>
                  <span>
                    <p className="text-[#C2C6D6] text-[12px] font-medium">EMAIL</p>
                    <p className="text-[#DFE2F1] text-[16px] font">hello@maxvteam.com</p>
                  </span>
                </div>
                <div className="bg-[#171B2680] flex gap-[16px] px-[16px] py-[16px] border-[#42475433] border w-[400px] mt-[24px] rounded-[12px]">
                    <Mail className="text-[#ADC6FF] bg-[#0053DB33] px-[10px] py-[10px] rounded-[8px] w-[48px] h-[48px]"/>
                  <span>
                    <p className="text-[#C2C6D6] text-[12px] font-medium">EMAIL</p>
                    <p className="text-[#DFE2F1] text-[16px] font">hello@maxvteam.com</p>
                  </span>
                </div>
                <div className="bg-[#171B2680] flex gap-[16px] px-[16px] py-[16px] border-[#42475433] border w-[400px] mt-[24px] rounded-[12px]">
                    <Mail className="text-[#ADC6FF] bg-[#0053DB33] px-[10px] py-[10px] rounded-[8px] w-[48px] h-[48px]"/>
                  <span>
                    <p className="text-[#C2C6D6] text-[12px] font-medium">EMAIL</p>
                    <p className="text-[#DFE2F1] text-[16px] font">hello@maxvteam.com</p>
                  </span>
                </div>
              </div>

              <p className="text-[12px] text-[#C2C6D6] font-medium mt-[40px]">FOLLOW OUR JOURNEY</p>
            </div>

            <div>
            
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
