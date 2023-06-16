import React, { useState } from "react";
import "../assets/register.css";
import Input from "../components/form/Input";

export default function Register() {
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
        </div>
      </div>
    </div>
  );
}
