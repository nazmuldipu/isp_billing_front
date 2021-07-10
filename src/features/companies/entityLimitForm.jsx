import React from "react";
import Joi from "joi-browser";
import useForm from "../../components/ui/forms/useForm";
import Button from "../../components/ui/forms/button";
import Label from "../../components/ui/forms/label";

const EntityLimitForm = ({ company, onSubmit, onClear, error }) => {
  const schema = {
    max_entity: Joi.number().required().label("Maximum Entity"),
  };

  const { data, renderInput, renderButton, validateSubmit } = useForm({
    schema,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSubmit(e)) {
      onSubmit(data);
    }
  };
  return (
    <div className="bg-gray-50 p-3 border rounded shadow-sm">
      <h2 className="text-center text-2xl font-bold text-gray-900">Maximum Entity</h2>

      <span className="text-base md:text-lg font-medium text-red-500">{error}</span>
      <form onSubmit={handleSubmit}>
        <Label name={company.name} label={'Company Name'} />
        {renderInput("max_entity", "Maximum Entity*", "Number")}
        <div className="flex flex-row-reverse mt-4">
          {renderButton("Save", "", "ml-2", false)}
          <Button label="Clear" btnBase="danger" onClick={onClear} />
        </div>
      </form>
    </div>
  );
};

export default EntityLimitForm;
