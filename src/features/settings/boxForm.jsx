/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Joi from "joi-browser";
import useForm from "../../components/ui/forms/useForm";
import Button from "../../components/ui/forms/button";

const BoxForm = ({ zonePage, box, onSubmit, onClear, error }) => {
  const schema = {
    zoneId: Joi.string().required().label("Zone"),
    serial: Joi.number().required().label("Per Month"),
    name: Joi.string().required().label("Name"),
  };

  const { data, initForm, renderInput, renderSelect, renderButton, validateSubmit } = useForm(
    { schema }
  );

  useEffect(() => { initForm(box); }, [box]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSubmit(e)) {
      const obj = { ...data };

      Object.keys(obj).forEach(
        (k) => !obj[k] && obj[k] !== undefined && delete obj[k]
      );
      onSubmit(obj);
    }
  };

  return (
    <div className="bg-gray-50 p-3 border rounded shadow-sm">
      <h2 className="text-center text-2xl font-bold text-gray-900">
        {box.name ? "Edit" : "Add"} Box Form
      </h2>

      <span className="text-base md:text-lg font-medium text-red-500">{error}</span>
      <form onSubmit={handleSubmit}>
        {zonePage.docs && renderSelect("zoneId", "Zone", zonePage.docs)}
        {renderInput("serial", "Serial*", "number")}
        {renderInput("name", "Name*")}

        <div className="flex flex-row-reverse mt-4">
          {renderButton("Save", "", "ml-2", false)}
          <Button label="Clear" btnBase="danger" onClick={onClear} />
        </div>
      </form>
    </div>
  );
};

export default BoxForm;
