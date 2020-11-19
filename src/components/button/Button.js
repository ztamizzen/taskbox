import React from "react";

export default function Button({ label, onClick, type = "button" }) {
  return (
    <button className={`btn btn-default`} onClick={onClick} type={type}>
      {label}
    </button>
  );
}
