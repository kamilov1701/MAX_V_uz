import Inta_Logo from "../assets/instagram.png";
import Tele_Logo from "../assets/telegram.png";
import BG_Footer from "../assets/Footer_photo.png";
import Logo from "../assets/MAX_-_LOAN-logo.png";

function Footer() {
    return (
        <footer style={{ backgroundImage: `url(${BG_Footer})` }} className="bg-cover bg-center w-full h-[200px]" >
            <div className="flex justify-center items-center h-full">
                <div className="flex">
                    <div>
                        <img className="h-[200px] w-auto" src={Logo} alt="Logo" />
                    </div>
                    <div>
                        <h1 className="text-blue-500 text-[75px] font-bold">MAX - V.UZ</h1>
                        <div className="flex items-center">
                            <a className="text-white text-[25px] mr-[5px] flex items-center" href="https://www.instagram.com/max_v.uz">
                                <img className="h-[40px] w-auto " src={Inta_Logo} alt="Instagram" />
                                max_v.uz
                            </a>
                            <a className="text-white text-[20px] flex items-center " href="https://t.me/MAX_V_uz">
                                <img className="h-[40px] w-auto ml-[20px] mr-[12px]" src={Tele_Logo} alt="Telegram" />
                                MAX_V_uz
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;