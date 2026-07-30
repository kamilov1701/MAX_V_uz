import { useEffect, useState } from "react";

export default function AnimatedCounter({
    end,
    duration = 2000,
    suffix = "",
    decimals = 0,
    start,
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = Math.min((timestamp - startTime) / duration, 1);

            const current = end * progress;

            setCount(
                decimals > 0
                    ? current.toFixed(decimals)
                    : Math.floor(current)
            );

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(decimals > 0 ? end.toFixed(decimals) : end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [start, end, duration, decimals]);

    return (
        <>
            {count}
            {suffix}
        </>
    );
}