import React from "react";
import Joi from "joi-browser";
import useForm from "../../components/ui/forms/useForm";
import Button from "../../components/ui/forms/button";

const ChangePasswordForm = ({ user, onSubmit, onClear }) => {
  const schema = {
    password: Joi.string().min(5).required().label("Password"),
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
      <h2 className="text-center text-2xl font-bold text-gray-900">Change Password Form</h2>

      <div className="p-3">
        <form onSubmit={handleSubmit}>
          <div className="mt-2 md:mt-4">
            <label className="block text-xs md:text-sm font-medium text-gray-600" htmlFor="sms_quota">User Name</label>

            <label id="sms_quota" className="block w-full px-2 md:px-4 py-1 md:py-2 text-sm md:text-lg text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" >
              {user.name}
            </label>
          </div>

          {renderInput("password", "Password")}

          <div className="flex flex-row-reverse mt-4">
            {renderButton("Change", "", "ml-2", false)}
            <Button label="Clear" btnBase="danger" onClick={onClear} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
