import axios from "axios";

axios.defaults.baseURL = "https://api.realworld.io/api";

axios.interceptors.request.use((config)=>{
    const authorization = localStorage.getItem("token") ?  `Token ${localStorage.getItem("token")}` :  ' '
    config.headers.Authorization = authorization
    return config
})

export default axios;
