export default function HoverCard({children, className='', bg='rgb(250,150,10)', borderRadius='12px', ...props}) {
    return (
        <div className="relative flex items-center justify-center group w-fit h-fit" >
            <div className="absolute w-full h-full transition-all duration-500 group-hover:-rotate-2 opacity-0 group-hover:opacity-100" style={{backgroundColor: bg, borderRadius}} >
            </div>

            <div className='group-hover:rotate-2 transition-all duration-200'>{children}</div>
        </div>
    )
}