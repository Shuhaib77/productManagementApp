import React from "react";

function Button({ name, type, onClick, className ,disabled}) {
  const basicStyle = "p-2 cursor-pointer ";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${basicStyle} ${className}`}
      disabled={disabled}
    >
      {name}
    </button>
  );
}

export default Button;
