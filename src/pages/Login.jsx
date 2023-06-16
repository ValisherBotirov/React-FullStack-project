import React, { useState } from "react";
import Input from "../components/form/Input";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
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
        </div>
      </div>
    </div>
  );
}
