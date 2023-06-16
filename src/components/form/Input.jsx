import React from "react";

export default function Input({ state, setState, label, type }) {
  return (
    <div>
      <p className="mt-3 mb-2">{label}</p>
      <input
        type={type ? type : "text"}
        className="form-control"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
}
