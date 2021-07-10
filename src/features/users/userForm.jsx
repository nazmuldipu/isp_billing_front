/* eslint-disable react-hooks/exhaustive-deps */
import Joi from "joi-browser";
import React, { useEffect } from "react";
import Button from "../../components/ui/forms/button";

import useForm from "../../components/ui/forms/useForm";

const UserForm = ({ user, onSubmit, onClear }) => {
  const schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().email({ minDomainAtoms: 2 }).required().label("Email"),
    password: Joi.string().min(5).required().label("Password"),
  };

  const { data, initForm, renderInput, renderButton, validateSubmit } = useForm({ schema, });

  useEffect(() => {
    if (user && user.name) {
      const { name, email } = user;
      initForm({ name, email, password: "" });
    } else {
      initForm({});
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSubmit(e)) {
      onSubmit(data);
    }
  };

  return (
    <div className="bg-gray-50 p-3 border rounded shadow-sm">
      <h2 className="text-center text-2xl font-bold text-gray-900">User Form</h2>

      <form onSubmit={handleSubmit}>
        {renderInput("name", "Name")}
        {renderInput("email", "Email")}
        {renderInput("password", "Password")}

        <div className="flex flex-row-reverse mt-4">
          {renderButton("Save", "", "ml-2", false)}
          <Button label="Clear" btnBase="danger" onClick={onClear} />         
        </div>
      </form>
    </div>
  );
};

export default UserForm;
