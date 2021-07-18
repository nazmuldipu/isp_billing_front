import React from "react";
import Joi from "joi-browser";
import useForm from "../../components/ui/forms/useForm";
import Button from "../../components/ui/forms/button";

const ZoneForm = ({ zone, onSubmit, onClear, error }) => {
  const schema = {
    serial: Joi.number().required().label("Per Month"),
    name: Joi.string().required().label("Name"),
  };
  const { data, renderInput, renderButton, validateSubmit } = useForm(
    { schema }
  );

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
        {zone.name ? "Edit" : "Add"} Zone Form
      </h2>
      <form onSubmit={handleSubmit}>
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

export default ZoneForm;
