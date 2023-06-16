import React from "react";

export default function Minus({ remove }) {
  return (
    <div className="btn btn-primary" onClick={remove}>
      Remove
    </div>
  );
}
