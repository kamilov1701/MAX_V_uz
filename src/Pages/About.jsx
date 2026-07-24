import { useState, useEffect } from "react";

export default function About() {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [tasks, setTasks] = useState(0);
  const [support, setSupport] = useState(0);

  useEffect(() => {
    const duration = 1500; // 👈 Hamma animatsiya tezligi shu yerda
    const interval = 16;

    const animate = (end, setter) => {
      let start = 1;
      const increment = end / (duration / interval);

      const timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          setter(end);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, interval);
    };

    animate(3, setExperience);
    animate(150, setProjects);
    animate(250, setClients);
    animate(24, setTasks);
    animate(7, setSupport);
  }, []);

  return (
    <section className="bg-black text-white py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h2 className="text-5xl font-bold">{experience}</h2>
          <p>Years Experience</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">{projects}+</h2>
          <p>Projects</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">{clients}+</h2>
          <p>Happy Clients</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">{tasks}/{support}</h2>
          <p>Support</p>
        </div>
      </div> 
    </section>
  );
}