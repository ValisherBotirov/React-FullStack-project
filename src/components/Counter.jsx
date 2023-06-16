import React from "react";
import Plus from "./Plus";
import Reset from "./Reset";
import Minus from "./Minus";

export default function Counter({ add, reset, remove }) {
  return (
    <div className="btn-group mt-4">
      <Plus add={add} />
      <Reset reset={reset} />
      <Minus remove={remove} />
    </div>
  );
}
