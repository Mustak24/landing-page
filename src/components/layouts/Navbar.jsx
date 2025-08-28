import { useEffect, useRef, useState } from "react"
import { FiHome } from "react-icons/fi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { MdOutlineContacts } from "react-icons/md";
import debouncing from "../../utils/debouncing";
import SlidingTextOnHover from "../ui/Texts/SlidingTextOnHover";
import NormalButton from "../ui/Buttons/NoramalButton";

export default function Navbar({routes}){
    routes = [
        {name: 'Home', icon: <FiHome />, id: 'hero', url: '#hero'},
        {name: 'Features', icon: <IoMdInformationCircleOutline />, id: 'features', url: '#features'},
        {name: 'Benefits', icon: <MdOutlineContacts />, id: 'benefits', url: '#benefits'},
        {name: 'Price', icon: <FaCode />, id: 'price', url: '#price'},
    ];

    const [navigationIndex, setNavigationIndex] = useState(0);
    const navbarBox = useRef(null)
    const routesInfo = useRef(null);



    function handleNavigation(navigationIndex){  
        const navbar = navbarBox.current.firstElementChild;
        if(!navbar || !routesInfo.current) return;

        navigationIndex = (navigationIndex + routes.length)%routes.length;

        let parentInfo = navbar.getBoundingClientRect();
        let childInfo = navbar.children[navigationIndex].getBoundingClientRect();
    
        navbar.lastElementChild.style.left = (childInfo.left - parentInfo.left) + 'px';
        navbar.lastElementChild.style.width = childInfo.width + 'px';
    }

    function gotoRoute(index){
        if(!routesInfo.current) return;
        document.body.scroll({behavior: 'smooth', top: routesInfo.current[index].top});
    }

    const handleResizeEvent = debouncing(function (){
        return handleNavigation(navigationIndex);
    }, 1000);

    const handleNavigationOnScroll = function (){
        if(!routesInfo.current) return;
        
        let {scrollTop} = document.body;

        for(let i=0; i<routes.length; i++){
            let {top, bottom} = routesInfo.current[i];
            if(top <= scrollTop + 100 && scrollTop + 100 < bottom) 
                return setNavigationIndex(i);
        }
    }

    useEffect(() => {
        routesInfo.current = routes.map(({id}) => {
            let {top, bottom} = document.getElementById(id)?.getBoundingClientRect() ?? {};
            return {top, bottom};
        });

        window.addEventListener('resize', handleResizeEvent);
        document.body.addEventListener('scroll', handleNavigationOnScroll);
        return () => {
            window.removeEventListener('resize', handleResizeEvent);
            document.body.removeEventListener('scroll', handleNavigationOnScroll);
        }
    }, [])

    useEffect(() => {
        handleNavigation(navigationIndex);
    }, [navigationIndex])

   

    return <>
        <header className="h-12 z-[900] flex items-center justify-between px-4 fixed top-0 left-0 w-screen" >
            <div className="flex items-center gap-2" >
                <div className="relative flex items-center justify-center size-10 " >
                    <img src="/app-icon.png" alt="404" className="w-full h-full object-cover" />
                </div>
                <div className="font-semibold text-sm" >
                    TaskFlow
                </div>
            </div>
            
            <div className="text-xs flex gap-2 font-semibold" >
                <NormalButton
                    title={<SlidingTextOnHover text={'Sign in'}/>} 
                    bg="white" text='black' 
                />
                <NormalButton 
                    title={<SlidingTextOnHover text={'Sign up'}/>}
                    bg="black" text='white' 
                />
            </div>
        </header>

        <nav ref={navbarBox} id="navbar" className="fixed z-[900] md:top-4 max-md:bottom-4 left-[50%] translate-x-[-50%]">

            <div  className={'flex items-center justify-center gap-2 h-12 text-black bg-[rgb(0,0,0,0.05)] rounded-full backdrop-blur-[2px] shadow-[0_10px_10px_rgb(0,0,0,0.2)] '}>
                {routes.map((item, index) => {
                    return <a 
                            key={index} 
                            onClick={() => gotoRoute(index)} 
                            className="text-sm z-2 font-semibold px-5 text-center cursor-pointer flex flex-col items-center justify-center"
                            style={{color: index === navigationIndex ? 'white' : 'black'}} 
                        >
                            <span className="sm:hidden text-md">{item.icon}</span>
                            <SlidingTextOnHover 
                                text={item.name} animationDuration={300} className="max-sm:text-[10px]" 
                            />
                    </a>
                })}
                <div className="absolute h-full z-1 bg-black border-3 border-white rounded-full transition-all duration-200"></div>
            </div>
        </nav>
    </>
}