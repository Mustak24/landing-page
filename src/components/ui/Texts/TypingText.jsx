export function TypingText({className='', speed=100, children}){
    const text = String(children);
    return <>
        <style jsx='true'>{`
            @keyframes animation-0-to-1-opacity-scale{
              0%{opacity: 0; scale: 0;}
              100%{opacity: 1; scale: 1;}
            }
        `}</style>
        <div className={`${className} flex flex-wrap items-center`}>
            {
                text.length < 50 ? (
                    text.split('').map((char, index) => (
                        <span key={index} 
                            className="opacity-0 scale-0 transition-all" 
                            style={{
                                animation: 'animation-0-to-1-opacity-scale 100ms forwards',
                                animationDelay: `${index*speed}ms`
                            }}
                        >{char}</span>
                    ))
                ) : (
                    text.split(' ').map((word, index) => (
                        <div>
                            <span className="opacity-0 scale-0 transition-all" 
                                style={{
                                    animation: 'animation-0-to-1-opacity-scale 100ms forwards',
                                    animationDelay: `${index*speed}ms`
                                }}
                            >{word}</span>
                            <span className="opacity-0" >_</span>
                        </div>
                    ))
                )
            }
        </div>
    </> 
}