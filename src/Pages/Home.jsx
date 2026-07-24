import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";
import "../App.css";

function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <section id="center">
                <div>
                    <h1>Home Page</h1>
                    <p>Welcome to my website.</p>
                </div>
            </section>
        </>
    );
}

export default Home;