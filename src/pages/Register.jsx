import React, { useState } from "react";
import "../assets/register.css";
import Input from "../components/form/Input";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../reducers/auth";

export default function Register() {

  const store = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const {isLoading} = store

  function onSubmit(e){
    e.preventDefault()
    dispatch(registerUser())
  }

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="p-3 register border mx-auto mt-5">
        <div className="">
          <p className="py-2 text-center">Register page</p>
          <Input state={userName} setState={setUserName} label={"Username"} />
          <Input state={email} setState={setEmail} label={"Email"} />
          <Input
            state={password}
            setState={setPassword}
            label={"Password"}
            type={"password"}
          />
          <button className="btn btn-primary form-control mt-3" disabled={isLoading} onClick={onSubmit}>
            {isLoading ? "Loading..."  :'Register'}
          </button>
        </div>
      </div>
    </div>
  );
}
