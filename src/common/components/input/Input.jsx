import React from "react";

function Input({ placeholder, type, className, icon,handleChange, handleBlur, value, name,errors }) {
  const basicStyle = "p-3 w-full bg-green-50";
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-3 ">
          <span className="">{icon}</span>
        </div>
      )}
      <input
        placeholder={placeholder}
        type={type}
        className={`${basicStyle} ${className} ${icon?"pl-10 ":""}`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        name={name}
       
      ></input>
    </div>
  );
}

export default Input;
