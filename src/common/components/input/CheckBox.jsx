import React from "react";

function CheckBox({ name, type }) {
  const basicStyle = "flex items-center gap-2";
  return (
    <div className={`${basicStyle}`}>
      <input type={type}></input>
      <label htmlFor="">{name}</label>
    </div>
  );
}

export default CheckBox;
