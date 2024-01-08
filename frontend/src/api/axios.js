//baseURL: "https://api.rawg.io/api/"

import axios, {AxiosRequestConfig} from "axios";

const axiosInstance =axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"c14a43ddf59e42bba18d3744d8c470cb"
    },
});

function Axios(){
    const getData =()=>{
        axios.get('https://rawg.io/api/games')
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export default axios;