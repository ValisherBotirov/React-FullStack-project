import React from "react";
import { useDispatch } from "react-redux";
import { removeCounter } from "../reducers/count";

export default function Minus() {
  const dispatch = useDispatch();
  return (
    <div className="btn btn-primary" onClick={() => dispatch(removeCounter())}>
      Remove
    </div>
  );
}
