import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import racket from "../assets/racket.png";
import card from "../assets/cardd.png";
import ProjectIcon from "../assets/ProjectIcon.png";
import project_card2 from "../assets/Project_card2.png";

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
                <div className="flex justify-between items-center ">
                  <span className="flex gap-[16px]">
                    <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[97px] rounded-[4px]">
                      React Native
                    </p>
                    <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[72px] rounded-[4px]">
                      GraphQL
                    </p>
                    <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[45px] rounded-[4px]">
                      AWS
                    </p>

                  </span>
                  <div>
                    <a className="text-[#ADC6FF] font-semibold text-[12px] flex gap-[8px] mt-[13px]" href="#">
                      VIEW CASE STUDY
                      <img src={ProjectIcon} alt="Project Icon" />
                    </a>
                  </div>
                </div>

              </div>
            </div>


            <div className="bg-[#111827B2] w-[389px]">
              <img src={card2} alt="" />
              <div className="px-[24px] py-[23px]">
                <h2 className="text-[#DFE2F1] text-[24px] font-medium mb-[8px]">
                  Nexus AI
                </h2>
                <p className="text-[#C2C6D6] text-[16px] font-normal mb-[24px]">
                  A holistic wellness ecosystem focusing on biometric
                  integration and AI-driven health optimization. Designed for
                  2.5M+ active users.
                </p>
                <span className="flex gap-[16px]">
                  <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[97px] rounded-[4px]">
                    Python
                  </p>
                  <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[72px] rounded-[4px]">
                    PyTorch
                  </p>
                </span>
                <div>
                  <a className="text-[#ADC6FF] font-semibold text-[12px] flex gap-[8px] mt-[24px]" href="#">
                    VIEW CASE STUDY
                    <img src={ProjectIcon} alt="Project Icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="flex gap-[25px] mt-[24px]">
            <div className="bg-[#111827B2] w-[589px]">
              <img src={project_card2} alt="" />
              <div className="px-[24px] py-[23px]">
                <h2 className="text-[#DFE2F1] text-[24px] font-medium mb-[8px]">Velocity CRM</h2>
                <p className="text-[#C2C6D6] text-[16px] font-normal mb-[24px]">
                  High-velocity sales platform for Tier-1 financial institutions with real-
                  time settlement tracking.
                </p>
                <span className="flex gap-[16px]">
                  <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[61 px] rounded-[4px]">
                    Next.js
                  </p>
                  <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[93px] rounded-[4px]">
                    PostgreSQL
                  </p>
                  <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[52px] rounded-[4px]">
                    Redis
                  </p>
                </span>
                <div>
                  <a className="text-[#ADC6FF] font-semibold text-[12px] flex gap-[8px] mt-[13px]" href="#">
                    VIEW CASE STUDY
                    <img src={ProjectIcon} alt="Project Icon" />
                  </a>
                </div>
              </div>
            </div>


            <div className="bg-[#111827B2] w-[596px]">
              <img src={card1} alt="" />
              <div className="px-[24px] py-[23px]">
                <h2 className="text-[#DFE2F1] text-[24px] font-medium mb-[8px]">
                  Prism Experience
                </h2>
                <p className="text-[#C2C6D6] text-[16px] font-normal mb-[24px]">
                  Immersive 3D web experience for a global luxury glass manufacturer,
                  built with WebGL performance at its core.
                </p>
                <span className="flex gap-[16px]">
                  <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[61 px] rounded-[4px]">
                    Three.js
                  </p>
                  <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[93px] rounded-[4px]">
                    TypeScript
                  </p>
                  <p className="text-[#C2C6D6] text-[14px] font-normal bg-[#262A35] px-[8px] py-[4px] w-[52px] rounded-[4px]">
                    GSAP
                  </p>
                </span>
                <div>
                  <a className="text-[#ADC6FF] font-semibold text-[12px] flex gap-[8px] mt-[13px]" href="#">
                    VIEW CASE STUDY
                    <img src={ProjectIcon} alt="Project Icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

export default Projects;
