import {image} from "../constants/image.js";
import {links} from "../constants/links.js";

export default function Body(){
    return(
        <div className="w-1/2 text-2xl">
            <div className="bg-white flex flex-col items-center bg-opacity-50 h-60 w-2/3 gap-6 p-4 rounded-lg">
                <div className="text-black font-bold">

                <h1 className="text-black  wb-0 flex justify-center text-2xl pt-4">Uzi's Game Stop</h1>
                <p className="pt-4">This is just a sample for a game shop which I've created. If you actually want to buy games, you can go to steam with the link provided below.</p>
                <h3 className="flex justify-center pt-8">enjoy</h3>
            </div>
                </div>
            <div className="flex border border-black bg-white justify-between items-center bg-opacity-50 h-14 w-2/3 gap-6 mt-4 rounded-lg px-4 py-4">

            <div className="flex bg-white text-black rounded-lg py-1 w-1/4 justify-center space-x-2 hover:bg-blue-600 cursor-pointer pop-out">
                <img src={image[1].image} alt={image[1].alt} className="w-auto h-4 mt-2 " />
                <a href={links[0].path} name={links[0].name} className="cursor-pointer">UzitheI</a>
            </div>
            <div className="flex bg-white text-black rounded-lg py-1 w-1/4 justify-center space-x-2 hover:bg-blue-600 cursor-pointer pop-out">
                <img src={image[2].image} alt={image[2].alt} className="w-auto h-4 mt-2" />
                <a href={links[1].path} name={links[1].name}>Steam</a>
            </div>
            </div>
            
        </div>
    )
}