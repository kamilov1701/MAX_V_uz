import { useEffect, useRef, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";

export default function StatsSection() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.35 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    const stats = [
        {
            value: 3,
            suffix: "+",
            title: "ORTIQ ISH TAJRIJASI",
        },
        {
            value: 12,
            suffix: "+",
            title: "MUVAFAQIYATLI LOYHALAR",
        },
        {
            value: 100,
            suffix: "%",
            decimals: 1,
            title: "KAFOLATLILIK",
        },
        {
            value: 24,
            suffix: "/7",
            title: "TEZKOR XIZMAT KO'RSATISH",
        },
    ];

    return (
        <div ref={ref} className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="group
                        bg-[#111827]
                        border
                        border-[#243454]
                        rounded-xl
                        py-8
                        transition-all
                        duration-500
                        hover:border-[#ADC6FF]
                        hover:-translate-y-2
                        hover:shadow-[0_0_30px_rgba(173,198,255,0.2)]"
                    >
                        <h2 className="text-center text-[#ADC6FF] text-5xl font-bold">

                            <AnimatedCounter
                                end={item.value}
                                suffix={item.suffix}
                                decimals={item.decimals || 0}
                                start={visible}
                            />

                        </h2>

                        <p className="mt-4 text-center text-[11px] tracking-[3px] text-gray-400">
                            {item.title}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    );
}