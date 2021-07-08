import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="mt-2 md:mt-4">
      <label className="block text-xs md:text-sm font-medium text-gray-600" htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="block w-full px-2 md:px-4 py-1 md:py-2 text-sm md:text-lg text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" />
      {error && <div className="text-xs text-red-500"> {error} </div>}
    </div>
  );
};

export default Input;
