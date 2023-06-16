import React from "react";
import { useDispatch } from "react-redux";
import { resetCounter } from "../reducers/count";

export default function Reset() {
  const dispatch = useDispatch();
  return (
    <div className="btn btn-danger" onClick={() => dispatch(resetCounter())}>
      Reset
    </div>
  );
}
