import { useEffect, useRef } from "react";

export default function RotatingGradient(lightColor, darkColor, speed = 8000) {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        let startTime = Date.now();
        let animationId;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const rotation = (elapsed % speed) / speed;
            const degrees = rotation * 360;

            const radians = (degrees * Math.PI) / 180;
            const x = 50 + 50 * Math.cos(radians);
            const y = 50 + 50 * Math.sin(radians);

            element.style.background = `radial-gradient(ellipse 400px 400px at ${x}% ${y}%, ${lightColor} 0%, ${darkColor} 45%, ${darkColor} 100%)`;

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationId);
    }, [lightColor, darkColor, speed]);

    return elementRef;
}