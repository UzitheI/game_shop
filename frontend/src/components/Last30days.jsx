import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";

export default function Last30days() {
  const apiKey = "c14a43ddf59e42bba18d3744d8c470cb";
  const [gameData, setGameData] = useState(null);
  const [id, setId] = useState(null);
  const releasedDate = new Date("2023-10-11");
  const changeGameId =()=>{
      const newId=Math.random(100,5000);
    setId(newId);
}

  useEffect(() => {
    const fetchData = async () => {
      try {
        changeGameId();
        const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${apiKey}`);
        //data aako xaina cuz no id
        const game = response.data;
        console.log(game);

        if (new Date(game.released) > releasedDate) {
          setGameData(game);
        }
      } catch (error) {
        console.error("There has been an error in the fetch. Please resolve.", error);
        setGameData(null); // Handle error by setting gameData to null
      }
    };

    if (id !==null) {
      fetchData();
    //   console.log(id);
    }
  }, [id, apiKey, releasedDate]);
//   console.log(id);

  return (
    <div>
      <Header />
      {gameData ? (
        <div>
          <h1>{gameData.name}</h1>
          {/* Add other game details you want to display */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
