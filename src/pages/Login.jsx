import React, { useState } from "react";
import Input from "../components/form/Input";
import {useDispatch, useSelector} from "react-redux";
import {signInFailed, signInSuccess, signInUser} from "../reducers/auth";
import AuthService from "../service/auth";
import {useNavigate} from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const store = useSelector(state => state.auth)

  const  {isLoading} = store
  const onSubmit =(e)=>{
    e.preventDefault()
    const user = {
      email,
      password
    }
    dispatch(signInUser())
    AuthService.userLoginIn(user).then((res =>{
      console.log(res)
      dispatch(signInSuccess(res.user))
      navigate("/")
    })).catch((err)=>{
      console.log(err)
      dispatch(signInFailed())
    })
  }

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="p-3 register border mx-auto mt-5">
        <div className="">
          <p className="py-2 text-center">Login page</p>
          <Input state={email} setState={setEmail} label={"Email"} type="email" />
          <Input
            state={password}
            setState={setPassword}
            label={"Password"}
            type={"password"}
          />
          <button className="btn btn-primary form-control mt-3" disabled={isLoading} onClick={onSubmit}>
            {isLoading ? "Loading..."  :'Login'}
          </button>
        </div>
      </div>
    </div>
  );
}
