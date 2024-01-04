import logo from '../src/constants/image.js'
export default function Header(){
    return(
        <header className="flex border border-black pt-8 pb-10 mb-0 w-full  justify-between px-12">
            <img src="../src/assets/logo.png" alt="logo" className="border border-black w-auto h-20 pointer rounded-lg "/>
            <div>
               <input type="text" className="border border-black rounded-lg text-white " />
            </div>
            <div className="flex justify-between ">
                <a href="">add</a>
                <div className="border border-black "></div>
                <a href="">cart</a>
            </div>
        </header>
    )
}