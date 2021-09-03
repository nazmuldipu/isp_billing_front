import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="mt-1">
      <label className="block text-xs md:text-sm font-medium text-gray-600" htmlFor={name}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        {...rest}
        className="block w-full px-2 md:px-4 py-1 text-xs md:text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
      >
        <option value="">Please Select ...</option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="text-xs text-red-500"> {error} </div>}
    </div>
  );
};

export default Select;
