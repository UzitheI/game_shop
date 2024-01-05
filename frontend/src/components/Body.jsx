import {image} from "../constants/image.js";


export default function Body(){
    return(
        <div className="w-1/2">
            <div className="bg-white flex flex-col items-center bg-opacity-50 h-64 w-2/3 gap-6 p-4 rounded-lg">
                <div className="text-black font-bold">

                <h1 className="text-black size-10 wb-0">Uzi's Game Stop</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates quis velit doloribus nulla reiciendis alias laudantium ex dolor eligendi quasi cum unde beatae illum assumenda, commodi officiis eveniet rem voluptatibus.</p>
                <h3>enjoy</h3>
            </div>
                </div>
            <div className="flex border border-black">

            <div>
                <img src="" alt="github" />
                <a href="">UzitheI</a>
            </div>
            <div>
                <img src="" alt="steam" />
                <a href="">Steam</a>
            </div>
            </div>
            
        </div>
    )
}