import { FaRegClock } from "react-icons/fa";
import StarsBackground from "../background-views/StarsBackground";
import NormalButton from "../ui/Buttons/NoramalButton";
import RoundedButton from "../ui/Buttons/RoundedButton";
import { TypingText } from "../ui/Texts/TypingText";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import SlidingTextOnHover from "../ui/Texts/SlidingTextOnHover";
import ShowWhenVisible from "../other/ShowWhenVisible";

export default function HeroSection() {
    return (
        <main id="hero" className="w-full px-5 pt-12" >
            <div className="relative w-full flex flex-col items-center pt-10 px-10 rounded-xl overflow-hidden shadow-[0_0_0_1px_rgb(0,0,0,0.2)]" >
                <StarsBackground  className="absolute top-0 left-0 -z-1 w-full h-full" stareColor={[200,200,200]} />
                <div className="size-20 rounded-md relative" >
                    <img src="/app-icon-100.png" alt="404" className="w-full h-full object-cover" />
                </div>

                <div className="text-center text-5xl font-semibold relative">
                    <ShowWhenVisible>
                        <h1 style={{animation: 'fade-animation .5s'}} >
                            Think, plan, and track
                        </h1>
                    </ShowWhenVisible>
                    
                    <ShowWhenVisible>
                        <div style={{animation: 'fade-animation .5s'}} >
                            <TypingText speed={100} className="text-gray-500" >
                                all in one place
                            </TypingText>
                        </div>
                    </ShowWhenVisible>

                    <ShowWhenVisible>
                        <div style={{animation: 'fade-animation .5s'}} >
                            <TypingText speed={25}  className="text-xs mt-3 font-normal" >
                                Efficently manage your task and boost you productivity
                            </TypingText>
                        </div>
                    </ShowWhenVisible>

                    <ShowWhenVisible>
                        <div 
                            className="absolute top-0 right-0 translate-x-full bg-white rounded-md animate-bounce" 
                            style={{animationDuration: '2s'}}
                        >
                            <FaRegClock />
                        </div>
                    </ShowWhenVisible>
                </div>

                <div className="mt-5 flex gap-4 items-center" >  
                    <ShowWhenVisible>
                        <div style={{animation: 'fade-animation .5s'}} >
                            <RoundedButton 
                                title={<SlidingTextOnHover text={'Get free demo'}/>}
                                bg="rgb(50,100,200)"
                                text="white"
                            />
                        </div> 
                    </ShowWhenVisible>

                    <ShowWhenVisible>
                        <div style={{animation: 'fade-animation .5s'}} >
                            <RoundedButton 
                                title={<SlidingTextOnHover text={'Old User'}/>}
                                text="rgb(50,100,200)"
                                bg="white"
                            />
                        </div>
                    </ShowWhenVisible>
                </div>

                <ShowWhenVisible className='w-full flex items-center justify-center' >
                    <div className="relative w-full max-w-[800px] translate-y-10 group fade-center-animation" >
                        <div className="absolute bg-orange-400 w-full h-full rotate-2 rounded-2xl group-hover:-rotate-2 duration-500 transition-all" ></div>

                        <div className="bg-white p-5 rounded-lg w-full -rotate-2 flex flex-col gap-4 group-hover:rotate-2 duration-500 transition-all group-hover:scale-105" >
                            <div className="bg-blue-500 text-white p-4 w-full rounded-lg">
                                <h1>Today Focus</h1>
                                <div className="flex items-center justify-between w-full" >
                                    <p>3 of 5 task completed</p>
                                    <div className="flex items-center bg-[rgb(255,255,255,0.4)] h-3 rounded-full w-40" >
                                        <div className="w-[69%] bg-white rounded-full h-3" ></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <TaskRow text={'Review quarterl report'} isDone={true} />
                                <TaskRow text={'Team standup meeting'} isDone={true} />
                                <TaskRow text={'Prepare presentaiton slides'} isDone={true} />
                                <TaskRow text={'Client follow-up calls'} />
                                <TaskRow text={'Review Code'} />
                            </div>

                            <div className="min-h-10" ></div>
                        </div>
                    </div>
                </ShowWhenVisible>
            </div>
        </main>
    )
}



function TaskRow({text, isDone: val = false}) {
    const [isDone, setIsDone] = useState(val);

    return (
        <div className="flex items-center gap-2" >
            <button
                onClick={() => {setIsDone(!isDone)}} 
                className={[
                    'border-2 min-w-5 max-w-5 aspect-square rounded-full flex items-center justify-center box-border p-[2px] cursor-pointer  translate-y-[2px]',
                    isDone ? 'border-green-500 bg-green-500' : 'border-[rgb(50,50,50,0.5)] hover:border-green-500'
                ].join(' ')} 
            >
            {
                isDone &&
                <FiCheck className='size-full text-white stroke-2' /> 
            }
            </button>

            <div className="relative flex items-center" >
                <p style={{opacity: isDone ? 0.6 : 1}} className="px-1">{text}</p>
                <div className="absolute duration-200 transition-all border-1 translate-y-[2px]" style={{width: isDone ? '100%' : 0, opacity: isDone ? 1 : 0}} ></div>
            </div>
        </div>
    )
}