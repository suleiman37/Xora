import Marker from "./Marker"
import { Link as LinkScroll } from "react-scroll"
import clsx from "clsx"


const Button=({containerClassName,href,icon,onClick,children,markerFill})=>{
    const Inner=()=>(
        <>
         <span className="relative flex items-center min-h-[40px] px-4 rounded-2xl g4 inner-before
        group-hover:opacity-100 overflow-hidden">
        <span className="">
            <Marker markerFill={markerFill} className="-ml-10"/>
        </span>
        {icon &&(
            <img src={icon} className="size-8 mr-5 object-contain z-10"/>
        )}
        <span className="relative z-2 font-poppins uppercase base-bold text-p1">{children}</span>
        </span>
        <span className="glow-before"/>
        </>
       
    )
    return href ? (<a className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group mt-44",containerClassName)}
    href={href}>
        <Inner/>
    </a>):(
        <button className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group lg:mt-10 lg:ml-30",containerClassName)}
        onClick={onClick}>
            <Inner/>
        </button>
    )
    
}
export default Button

