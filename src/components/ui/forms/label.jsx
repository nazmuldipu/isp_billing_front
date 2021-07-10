import React from "react";

const Label = ({ name, label }) => {
    return (
        <div className="mt-2 md:mt-4">
            <label className="block text-xs md:text-sm font-medium text-gray-600" htmlFor="sms_quota">{label}</label>
            <label id="sms_quota" className="block w-full px-2 md:px-4 py-1 md:py-1.5 text-sm md:text-lg text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" >
                {name}
            </label>
        </div>
    );
};

export default Label;
