/* eslint-disable react-hooks/exhaustive-deps */
import Joi from "joi-browser";
// import React, { useState, useEffect } from "react";
import React, { useEffect } from "react";
import Button from "../../components/ui/forms/button";

import useForm from "../../components/ui/forms/useForm";

const CompanyForm = ({ company, onSubmit, onClear, error }) => {
  const schema = {
    name: Joi.string().required().label("Name"),
    name_bd: Joi.string().required().label("Name in Bangla"),
    contact_person: Joi.string().required().label("Contact Person"),
    phone: Joi.string()
      .required()
      .regex(/^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$/, "Phone")
      .label("Phone number"),
    web: Joi.string().allow("").allow(null).label("Web address"),
    max_entity: Joi.number().label("Maximum Entity"),
    sms_quota: Joi.number().label("SMS Quota"),
    per_month: Joi.number().required().label("Per Month"),
  };

  const {
    data,
    initForm,
    renderInput,
    renderButton,
    validateSubmit,
  } = useForm({ schema });

  useEffect(() => {
    if (company && company.name) {
      initForm(company);
    } else {
      initForm({});
    }
  }, [company]);

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
      <h2 className="text-center text-2xl font-bold text-gray-900">{company.name ? "Edit" : "Add"} Company Form</h2>

      <span className="text-base md:text-lg font-medium text-red-500">{error}</span>
      <form onSubmit={handleSubmit}>
        {renderInput("name", "Name*")}
        {renderInput("name_bd", "Name in Bangla*")}
        {renderInput("contact_person", "Contact Person*")}
        {renderInput("phone", "Phone*")}
        {renderInput("web", "Web Address")}
        {renderInput("max_entity", "Maximum Entity", "Number")}
        {renderInput("sms_quota", "SMS Quota", "Number")}
        {renderInput("per_month", "Per Month*", "Number")}

        <div className="flex flex-row-reverse mt-4">
          {renderButton("Save", "", "ml-2", false)}
          <Button label="Clear" btnBase="danger" onClick={onClear} />
        </div>

      </form>
    </div>
  );
};

export default CompanyForm;
