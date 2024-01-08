import {useState, useEffect} from "react";

const useImageURL=()=>{
    const apiKey="c14a43ddf59e42bba18d3744d8c470cb";
    const [imageURL,setImageURL]=useState(null);
    const [error, setError]=useState(null);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        fetch(`https://rawg.io/api/games?token&key=${apiKey}`).then((response)=>{
            // console.log(response.status); working
            if(response.status >=400){
                throw new Error("server error");
            }
            return response.json();
        }).then((response)=>{
            const firstGame=data.results[0];
            if(firstGame && firstGame.background_image){
                setImageURL(firstGame.background_image);
            }
            else{
                throw new Error("No game found in the response")
            }
        }
        ).catch((error)=>setError(error)).finally(()=>setLoading(false));
    },[]);
}


export default function Last30days(){
    const{imageURL, error, loading} =useImageURL();
    if(error){
    
        return<p>A network error was encounterd</p>
    } 
        
    if(loading) {return <p>Loading...</p>}
    return(
        <div>
            <h1>An image</h1>
            <img src={imageURL} alt={"placeholder"} />
        </div>
    )
}