import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import "./index.css";
import AuthService from "./service/auth";
import {useDispatch, useSelector} from "react-redux";
import {signInSuccess} from "./reducers/auth";
import {useEffect} from "react";
import {ArticleSlice, getArticleStart, getArticleSuccess} from "./reducers/article";
import ArticleService from "./service/article";

function App() {
const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLogin = localStorage.getItem("isLogin")
  async  function getUser(){
        try {
          const res =  await AuthService.getUser()
            // console.log(res,"app res")
            dispatch(signInSuccess(res.user))
            navigate("/")
        }
        catch (err){
            console.log(err)
        }
    }


    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
        getUser()
        }
        if(!isLogin){
            navigate("/login")
        }
    },[isLogin])

    function getArticle(){
        dispatch(getArticleStart())
         ArticleService.getArticleList().then((res)=>{
             console.log(res,"article respon")
             dispatch(getArticleSuccess(res))
         }).catch((err)=>{
             console.log(err,"article err")
         })
    }

    useEffect(()=>{
        if(isLogin){
            getArticle()
        }
    },[isLogin])

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
