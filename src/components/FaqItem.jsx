import React from "react"
import { clsx } from "clsx"
import { useState } from "react"
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
const FaqItem=({item,index})=>{
    const [active,setActive]=useState(null)
    const isActive=active === item.id
    return(
        <div className="relative z-2 mt-16 mb-10 md:w-[400px]" key={index}>
            <div className="group relative flex cursor-pointer items-center justify-center gap-10 px-7
            "
            onClick={()=>{
                setActive(active === item.id ? null : item.id)
            }}>
                <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
                    {index <10 ? "0" : ""}{index}
                </div>
                <div className={clsx("h6 text-p4  transition-colors duration-500 max-lg:flex max-lg:justify-start",
                    isActive && "max-lg:text-p1"
                )}>
                    {item.question}
                </div>
        

            </div>
             <SlideDown>
                {active === item.id &&(
                    <div className="body-3 px-7 py-3.5">{item.answer}</div>
                )}
             </SlideDown>
             <div className={clsx("g5 -bottom-7 -top-7 left-0 right-0 absolute -z-1 rounded-3xl opacity-0 transition-opacity duration-500",isActive && "opacity-100")}>
                <div  className="g4 absolute inset-0.5 -z-1 rounded-3xl"/>
                <div className="absolute w-20 h-0.5 left-8 top-0 bg-p1"/>
             </div>
        </div>
    )
}
export default FaqItem