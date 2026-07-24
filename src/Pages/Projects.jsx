import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";

function Projects() {
  return (
    <section className="bg-[#0F131D] py-20">
      <div className="container mx-auto flex items-center justify-between ">
        <div>
          <p className="text-[#ADC6FF] text-[12px] font-medium">CASE STUDIES</p>

          <h1 className="text-[72px] text-[#DFE2F1] font-bold">
            Our <br /> Masterpieces
          </h1>

          <p className="text-[18px] font-normal text-[#C2C6D6] w-[515px] mb-[48px]">
            Engineering high-performance digital solutions that push the
            boundaries of what's possible in software architecture.
          </p>
        </div>

        <div className="flex gap-4 mt-10">
          <button className="text-[#ADC6FF] bg-[#ADC6FF1A] px-6 py-4 rounded-lg border border-[#4247544D]">
            ALL PROJECTS
          </button>

          <button className="text-[#C2C6D6] text-[12px] font-medium">
            AI & ML
          </button>

          <button className="text-[#C2C6D6] text-[12px] font-medium">
            FINTECH
          </button>

          <button className="text-[#C2C6D6] text-[12px] font-medium">
            MOBILE
          </button>

          <button className="text-[#C2C6D6] text-[12px] font-medium">
            APPS
          </button>
        </div>
      </div>

      <main>
        <section className="container bg-[#0F131D]">
          <div className="flex gap-[25px]">
            <div className="bg-[#111827B2] w-[802px]">
              <img src={card1} alt="" />
              <div className="px-[24px] py-[23px]">
                <h2 className="text-[#DFE2F1] text-[24px] font-medium mb-[8px]">Lumina App</h2>
                    <p className="text-[#C2C6D6] text-[16px] font-normal mb-[24px]">
                  A holistic wellness ecosystem focusing on biometric
                  integration and AI-driven health optimization. Designed for
                  2.5M+ active users.
                </p>
                <span className="flex gap-[16px]"> 
                        <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[97px] rounded-[4px]">React Native</p>
                        <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[72px] rounded-[4px]">GraphQL</p>
                        <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[45px] rounded-[4px]">AWS</p>
                </span>
              </div>
            </div>
            <div className="bg-[#111827B2] w-[389px]">
              <img src={card2} alt="" />
              <div className="px-[24px] py-[23px]">
                <h2 className="text-[#DFE2F1] text-[24px] font-medium mb-[8px]">Lumina App</h2>
                    <p className="text-[#C2C6D6] text-[16px] font-normal mb-[24px]">
                  A holistic wellness ecosystem focusing on biometric
                  integration and AI-driven health optimization. Designed for
                  2.5M+ active users.
                </p>
                <span className="flex gap-[16px]"> 
                        <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[97px] rounded-[4px]">React Native</p>
                        <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[72px] rounded-[4px]">GraphQL</p>
                        <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[45px] rounded-[4px]">AWS</p>
                </span>
              </div>
            </div>

          </div>
          <div className="flex gap-[25px] mt-[24px]">
             <div className="bg-[#111827B2] w-[389px]">
              <img src={card2} alt="" />
              <div className="px-[24px] py-[23px]">
                <h2 className="text-[#DFE2F1] text-[24px] font-medium mb-[8px]">Lumina App</h2>
                    <p className="text-[#C2C6D6] text-[16px] font-normal mb-[24px]">
                  A holistic wellness ecosystem focusing on biometric
                  integration and AI-driven health optimization. Designed for
                  2.5M+ active users.
                </p>
                <span className="flex gap-[16px]"> 
                        <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[97px] rounded-[4px]">React Native</p>
                        <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[72px] rounded-[4px]">GraphQL</p>
                        <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[45px] rounded-[4px]">AWS</p>
                </span>
              </div>
            </div>
            <div className="bg-[#111827B2] w-[802px]">
              <img src={card1} alt="" />
              <div className="px-[24px] py-[23px]">
                <h2 className="text-[#DFE2F1] text-[24px] font-medium mb-[8px]">Lumina App</h2>
                    <p className="text-[#C2C6D6] text-[16px] font-normal mb-[24px]">
                  A holistic wellness ecosystem focusing on biometric
                  integration and AI-driven health optimization. Designed for
                  2.5M+ active users.
                </p>
                <span className="flex gap-[16px]"> 
                        <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[97px] rounded-[4px]">React Native</p>
                        <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[72px] rounded-[4px]">GraphQL</p>
                        <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[45px] rounded-[4px]">AWS</p>
                </span>
              </div>
            </div>
           

          </div>
        </section>
      </main>
    </section>
  );
}

export default Projects;
