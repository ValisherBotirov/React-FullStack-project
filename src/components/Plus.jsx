import React from "react";

export default function Plus({ add }) {
  return (
    <div className="btn btn-success" onClick={add}>
      Add
    </div>
  );
}
