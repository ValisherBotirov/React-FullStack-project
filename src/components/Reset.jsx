import React from "react";

export default function Reset({ reset }) {
  return (
    <div className="btn btn-danger" onClick={reset}>
      Reset
    </div>
  );
}
