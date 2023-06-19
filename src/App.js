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

function App() {
const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLogin = useSelector(state => state.auth.loginIn)
  async  function getUser(){
        try {
          const res =  await AuthService.getUser()
            console.log(res,"app res")
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
