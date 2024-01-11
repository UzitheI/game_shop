import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import GlobalAPI from "../Services/GlobalAPI";
import Banner from "./Banner";
import GenreList from "./GenreList";
import TrendingGames from "./TrendingGames";
import GamesByGenresId from "./GamesByGenresId";


export default function Last30days() {
  const apiKey = "c14a43ddf59e42bba18d3744d8c470cb";
  const [allGameList, setallGameList] = useState(null);
  const [id, setId] = useState(400);
  const [gameListByGenres,setGameListByGenres]=useState([]);

  useEffect(()=>{
    getAllGames();
    getGameListByGenreID();
  })
  const getAllGames=()=>{
    GlobalAPI.getAllGames.then((resp)=>{
        // console.log(resp.data.results);
        setallGameList(resp.data.results);
        setGameListByGenres(resp.data.results);
    })
  }
  const getGameListByGenreID=(id)=>{
    GlobalAPI.getGameListByGenreID(4).then((res)=>{
        console.log(res.data.results);
    })
  }

  
  return (
    <div className="bg-black text-white">
        <Header/>
        <div className="grid grid-cols-4 px-8 gap-7">
            <div className="hidden md:block col-span-1 ">
                <GenreList/>
            </div>
        <div className="col-span-3 md-col-span-3">
            {allGameList?.length>0&&gameListByGenres.length>0?
            <div>
                <Banner gameBanner={allGameList[0]}/>
                <TrendingGames gameList={allGameList}/>
                <GamesByGenresId gameList={gameListByGenres}/>
            </div>:null}
        </div>
        </div>
</div>
  );
}
  