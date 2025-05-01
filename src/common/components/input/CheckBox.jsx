import React from "react";

function CheckBox({ name, type,onClick }) {
  const basicStyle = "flex items-center gap-2";
  return (
    <div className={`${basicStyle}`}>
      <input onClick={onClick} type={type}></input>
      <label htmlFor="">{name}</label>
    </div>
  );
}

export default CheckBox;
