import { useState } from "react"
import {image} from "../constants/image"
import {Link} from "react-router-dom";
import GlobalAPI from "../Services/GlobalAPI";
import SearchList from "./SearchList";

export default function Header(){
    const[input,setInput]=useState('');
    const[isOpen, setIsOpen]=useState(false);
    const[results,setResults]=useState([]);

    const toggleWidth=(width)=>{
        setIsOpen(!isOpen);
    };

    const apiKey="c14a43ddf59e42bba18d3744d8c470cb";

    const fetchData =(value)=>{
        fetch("https://api.rawg.io/api/games?key="+apiKey)
        .then((response)=>response.json()).then((json)=>{
            // console.log(json);
            const results=json.results.filter((user)=>{
                return value && user && user.name && user.name.toLowerCase().includes(value)
            });
            setResults(results);
        })
        }
    const handleChange =(value)=>{
        setInput(value)
        fetchData(value)
    }
    
    return(
      

        <div  className="flex pt-8 pb-4 mb-0 w-full  justify-between px-12  text-white bg-black bg-opacity-70">
            <Link to="/">
            <img to="/" src={image[0].image} alt={image[0].alt} className="border border-black w-auto h-20 pointer rounded-lg "/>
            </Link>
            <div className="relative">
               <input type="text" className={`border border-black rounded-lg text-black p-2 w-80 transition-all ${isOpen?"w-96":""}`} 
               placeholder="Search your game.."
               value={input}
               onClick={toggleWidth}
               onChange={(e)=>handleChange(e.target.value)} />
               <SearchList results={results}/>
               
               
            </div>
            <div className="flex justify-between space-x-4   ">
                <Link to="/add" className="hover:bg-white hover:text-black rounded-lg mb-14">add</Link>
                <div className="border border-white mb-10 "></div>
                <a href="" className="hover:bg-white hover:text-black rounded-lg mb-14">cart</a>
            </div>
        </div>
    )
}