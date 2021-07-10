/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Joi from "joi-browser";
import useForm from "../../components/ui/forms/useForm";
import Label from "../../components/ui/forms/label";
import Button from "../../components/ui/forms/button";

const BuySMSForm = ({ company, onSubmit, onClear, error }) => {
  const schema = {
    sms_quota: Joi.number().label("Web address"),
  };

  const { data, renderInput, renderButton, validateSubmit } = useForm(
    { schema }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSubmit(e)) {
      onSubmit(data);
    }
  };

  return (
    <div className="bg-gray-50 p-3 border rounded shadow-sm">
      <h2 className="text-center text-2xl font-bold text-gray-900">Buy SMS</h2>

      <span className="text-base md:text-lg font-medium text-red-500">{error}</span>
      <form onSubmit={handleSubmit}>
        <Label name={company.name} label={'Company Name'} />
        {renderInput("sms_quota", "Number of SMS to buy", "number")}
        <div className="flex flex-row-reverse mt-4">
          {renderButton("Buy", "", "ml-2", false)}
          <Button label="Clear" btnBase="danger" onClick={onClear} />
        </div>        
      </form>
    </div>
  );
};

export default BuySMSForm;
