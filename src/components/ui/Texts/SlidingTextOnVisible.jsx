import useVisibilityObserver from "../../../hooks/useVisibilityObserver"

export default function SlidingTextOnVisible({text, animationDuration=500, animationDelay=25, className=''}) {
    
    const {ref, visible} = useVisibilityObserver()

    return (
        <div 
            ref={ref}
            className="flex flex-wrap items-center overflow-hidden justify-center w-full"
        >
            {text.split(' ').map((str, index) =>  (
                <div key={index} className="flex items-center text-nowrap">
                    {
                        str.split('').map((char, i) => (
                            <div key={`${index}-${i}`}
                                className="relative flex flex-col" 
                                style={{
                                    viewTransitionName: `all`,
                                    transitionDuration: `${animationDuration}ms`,
                                    transitionDelay: `${index * animationDelay}ms`,
                                    transform: visible ? `translateY(0%)` : 'translateY(100%)',
                                    opacity: visible ? 1 : 0,
                                }}
                            >
                                {char}
                            </div>
                        ))
                    }
                    <div className="opacity-0">_</div>
                </div>
            ))}
        </div>
    )
}