import axios from "axios";

const apiKey="c14a43ddf59e42bba18d3744d8c470cb";

const axiosCreate= axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+apiKey);
const getAllGames=axiosCreate.get('/games?key='+apiKey);
const getGameListByGenreID =(id)=>axiosCreate.get('/games?key='+apiKey+'&genres='+id)


export default{
    getGenreList,
    getAllGames,
    getGameListByGenreID,
}