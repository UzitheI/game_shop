import {image} from "../constants/image"

export default function Header(){
    return(
        <header className="flex pt-8 pb-10 mb-0 w-full  justify-between px-12  text-white ">
            <img src={image[0].image} alt={image[0].alt} className="border border-black w-auto h-20 pointer rounded-lg "/>
            <div>
               <input type="text" className="border border-black rounded-lg text-white " />
            </div>
            <div className="flex justify-between space-x-4 ">
                <a href="">add</a>
                <div className="border border-white mb-10 "></div>
                <a href="">cart</a>
            </div>
        </header>
    )
}