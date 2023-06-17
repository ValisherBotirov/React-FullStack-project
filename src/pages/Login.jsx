import React, { useState } from "react";
import Input from "../components/form/Input";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../reducers/auth";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const store = useSelector(state => state.auth)

  const  {isLoading} = store
  const onSubmit =(e)=>{
    e.preventDefault()
    console.log(store,"state")
    dispatch(loginUser())
  }

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="p-3 register border mx-auto mt-5">
        <div className="">
          <p className="py-2 text-center">Login page</p>
          <Input state={userName} setState={setUserName} label={"Username"} />
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
