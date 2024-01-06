import {image} from "../constants/image.js";


export default function Body(){
    return(
        <div className="w-1/2">
            <div className="bg-white flex flex-col items-center bg-opacity-50 h-60 w-2/3 gap-6 p-4 rounded-lg">
                <div className="text-black font-bold">

                <h1 className="text-black  wb-0 flex justify-center text-2xl pt-4">Uzi's Game Stop</h1>
                <p className="pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates quis velit doloribus nulla reiciendis alias laudantium ex dolor eligendi quasi cum unde beatae illum assumenda, commodi officiis eveniet rem voluptatibus.</p>
                <h3 className="flex justify-center pt-8">enjoy</h3>
            </div>
                </div>
            <div className="flex border border-black bg-white justify-between items-center bg-opacity-50 h-14 w-2/3 gap-6 mt-4 rounded-lg px-4 py-4">

            <div className="flex bg-white text-black rounded-lg py-1">
                <img src={image[1].image} alt={image[1].alt} className="" />
                <a href="">UzitheI</a>
            </div>
            <div className="flex bg-white text-black rounded-lg py-1">
                <img src="" alt="steam" />
                <a href="">Steam</a>
            </div>
            </div>
            
        </div>
    )
}