import { useState } from "react"
import {image} from "../constants/image"

export default function Header(){
    const[inputText,setInputText]=useState('');
    const[isOpen, setIsOpen]=useState(false);

    const toggleWidth=(width)=>{
        setIsOpen(!isOpen);
    };
    return(
        <header className="flex pt-8 pb-10 mb-0 w-full  justify-between px-12  text-white ">
            <img src={image[0].image} alt={image[0].alt} className="border border-black w-auto h-20 pointer rounded-lg "/>
            <div className="relative">
               <input type="text" className={`border border-black rounded-lg text-black p-2 w-80 transition-all ${isOpen?"w-96":""}`} 
               placeholder="Search your game.."
               value={inputText}
               onClick={toggleWidth}
               onChange={(e)=>setInputText(e.target.value)}/>
               <button className="absolute right-4 top-5 transform -translate-y-1/2 px-4 bg-white text-black rounded-lg" onClick={toggleWidth}>Search</button>
            </div>
            <div className="flex justify-between space-x-4 ">
                <a href="">add</a>
                <div className="border border-white mb-10 "></div>
                <a href="">cart</a>
            </div>
        </header>
    )
}