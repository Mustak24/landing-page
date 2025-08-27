import { useState } from "react";

export default function SlidingTextOnHover({text, animationDuration=500, animationDelay=25, className=''}) {
    
    const [isHover, setHover] = useState(false);

    return (
        <div 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)} 
            className="flex items-center overflow-hidden justify-center w-full"
        >
            {text.split('').map((char, index) => (
                <div key={index}
                    className="relative flex flex-col" 
                    style={{
                        viewTransitionName: `all`,
                        transitionDuration: `${animationDuration}ms`,
                        transitionDelay: `${index * animationDelay}ms`,
                        transform: isHover ? `translateY(-100%)` : 'translateY(0%)',
                        visibility: char === ' ' ? 'hidden' : 'visible',
                    }}
                >
                    <p className={className} >{char === ' ' ? '_' : char}</p>
                    <p className={`absolute translate-y-[100%] ${className}`} >{char === ' ' ? '_' : char}</p>
                </div>
            ))}
        </div>
    )
}