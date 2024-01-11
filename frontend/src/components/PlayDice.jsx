import {useState, useEffect} from "react";
import axios  from "axios";
import Header from "./Header";

const PlayDice=()=>{
    const apiKey="c14a43ddf59e42bba18d3744d8c470cb";
    const [imageURL,setImageURL]=useState(null);
    const [error, setError]=useState(null);
    const [loading, setLoading]=useState(true);
    const [name, setName]=useState(null);
    const [id,setId] =useState(null);
    const [descript,setDescript]=useState("Please click the 'New GAme' button to search a game.");
    const [added, setAdded]=useState(null);
    const [developers, setDevelopers]=useState('');
    const [showMore, setshowMore]=useState(false);


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const handleButton =(id)=>{
        function setId(){
            id=getRandomInt(100,4000);
        }
        setId();
        setshowMore(false);

        axios.get(`https://rawg.io/api/games/${id}?token&key=${apiKey}`)
        .then(res=>{
            console.log(res);
            setName(res.data.name);
            setImageURL(res.data.background_image);
            setDescript(res.data.description);
            setAdded(res.data.added);
            setDevelopers(res.data.developers[0].name);
        })
        .catch(err=>{
            return <p>There has been an error in the fetch. Please resolve.</p>
        })
    }
    let maxLength =descript.length;
    console.log(maxLength);
    const truncatedText =showMore?descript:descript.slice(0,300);
    return(
        <div className="bg-black text-white bg-full bg-repeat min-vh-100 ">
            <Header/>
            <div className="mt-8">
            <div className="flex justify-around ">

            <p className="flex justify-center text-4xl font-bold">{name} ' <p className="bg-black text-white">{developers} '</p>
</p>
            <button onClick={handleButton} className="bg-red-950 p-4 rounded-3xl ">New game</button>
            </div>
            <div className="flex justify-center ">

            <button className="flex justify-center mt-3  p-6 bg-white text-black rounded-3xl hover:bg-black hover:text-white" >Add to cart</button>
            </div>
            <div className="flex p-28 justify-between h-30">

            <img src={imageURL} alt="" className=" h-30 h-fit w-1/2 rounded-3xl pop-out " />
            <p className="w-2/5 bg-white text-black bg-opacity-55 p-8 rounded-3xl pop-out">{truncatedText}
            
            {!showMore && truncatedText.length<descript.length &&(
                <button onClick={()=>setshowMore(true)} className="text-blue-500 hover:underline cursor-pointer flex">Read More</button>
            )}</p>
            </div>
            <h1 className="flex justify-center text-lg font-bold align-middle">Number of people that have added:{added}</h1>
            </div>
        </div>
    )
    

}

export default PlayDice;