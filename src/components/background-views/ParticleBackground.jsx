import { useEffect, useRef, useState } from "react";

const softColors = [
    "rgba(255, 182, 193, 0.6)", // Light Pink
    "rgba(135, 206, 250, 0.6)", // Light Sky Blue
    "rgba(144, 238, 144, 0.6)", // Light Green
    "rgba(221, 160, 221, 0.6)", // Plum
    "rgba(173, 216, 230, 0.6)", // Light Blue
    "rgba(255, 228, 225, 0.6)", // Misty Rose
    "rgba(240, 230, 140, 0.6)", // Khaki
    "rgba(250, 250, 210, 0.6)", // Light Goldenrod Yellow
    "rgba(176, 224, 230, 0.6)", // Powder Blue
    "rgba(255, 255, 224, 0.6)", // Light Yellow
];

const createCircle = (x, y, size) => ({
    pos: { x, y },
    vel: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
    size,
});

export default function ParticleBackground({ className = '', childs = [], maxSize = 150 }) {
    const circleSize = useRef(
        Array.from({ length: childs.length || 10 }, () =>
            Math.floor(Math.random() * 50 + maxSize - 50)
        )
    ).current;

    const box = useRef(null);
    const size = useRef({ width: 0, height: 0 })

    const [circles, setCircles] = useState(
        circleSize.map((size) =>
            createCircle(
                Math.floor(Math.random() * (window.innerWidth - size)),
                Math.floor(Math.random() * (window.innerHeight - size)),
                size
            )
        )
    );

    function updateCircles() {
        const { width, height } = size.current;
        setCircles((prev) =>
            prev.map((circle, index) => {
                const updated = { ...circle };
                updated.pos.x += updated.vel.x;
                updated.pos.y += updated.vel.y;

                if (updated.pos.x < 0 || width - circleSize[index] < updated.pos.x) {
                    updated.vel.x *= -1;
                    updated.pos.x = updated.pos.x < 0 ? 0 : width - circleSize[index];
                } else if (
                    updated.pos.y < 0 ||
                    height - circleSize[index] < updated.pos.y
                ) {
                    updated.vel.y *= -1;
                    updated.pos.y = updated.pos.y < 0 ? 0 : height - circleSize[index];
                }

                return updated;
            })
        );
    }

    function animate() {
        updateCircles();
        setTimeout(() => {
            requestAnimationFrame(animate);
        }, 10);
    }

    useEffect(() => {
        const { width, height } = box.current.getBoundingClientRect()
        size.current = { width, height };
    }, [box])
    useEffect(() => {
        requestAnimationFrame(animate);
    }, []);


    return (
        <div
            ref={box}
            style={{ overflow: "hidden" }}
            className={className}
        >
            {circles.map((circle, index) => (
                <div
                    key={index}
                    style={{
                        position: "absolute",
                        width: circleSize[index],
                        height: circleSize[index],
                        borderRadius: "50%",
                        backgroundColor: softColors[index % softColors.length],
                        top: circle.pos.y,
                        left: circle.pos.x,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: '10px'
                    }}
                >
                    {childs[index] ?? null}
                </div>
            ))}
        </div>
    );
}
