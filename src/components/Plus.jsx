import React from "react";
import { useDispatch } from "react-redux";
import { addCounter } from "../reducers/count";

export default function Plus() {
  const dispach = useDispatch();
  return (
    <div className="btn btn-success" onClick={() => dispach(addCounter())}>
      Add
    </div>
  );
}
