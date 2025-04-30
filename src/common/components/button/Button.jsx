import React from "react";

function Button({ name, type, onClick, className }) {
  const basicStyle = "p-2 cursor-pointer ";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${basicStyle} ${className}`}
    >
      {name}
    </button>
  );
}

export default Button;
