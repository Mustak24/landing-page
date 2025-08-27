import NormalButton from "../ui/Buttons/NoramalButton";

export default function HeroSection() {
    return (
        <main id="hero" className="w-full" >
            <header className="h-10 flex items-center justify-between px-4" >
                <div>
                    <div className="font-semibold text-sm" >
                        TaskFlow
                    </div>
                </div>
                
                <div className="text-xs flex gap-2 font-semibold" >
                    <NormalButton title="Sign in" bg="white" text='black' />
                    <NormalButton title="Sign up" bg="black" text='white' />
                </div>
            </header>
        </main>
    )
}