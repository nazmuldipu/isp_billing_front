import Joi from "joi-browser";
import React from "react";
import { Link } from "react-router-dom";

import useForm from "../../components/ui/forms/useForm";

const RegistrationForm = ({ onSubmit, loading, error }) => {
    const schema = {
        name: Joi.string().required().label("Name"),
        email: Joi.string().email({ minDomainAtoms: 2 }).required().label("Email"),
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
        <div className="w-full bg-white p-4 md:p-12">
            <div className="grid grid-flow-col auto-cols-max">
                <Link to="/" className="grid grid-flow-col auto-cols-max">
                    <img
                        className="h-8 w-auto sm:h-10"
                        src="logo.svg"
                        alt=""
                    />
                    <span className="sr-only">Workflow</span>
                    <h2 className="inline-block text-2xl font-semibold text-gray-700 dark:text-white pl-4">ISP-Billing</h2>
                </Link>
            </div>

            <p className="text-base text-gray-400 dark:text-gray-200">Welcome! Please provide your info. {loading}</p>
            <div className="flex items-center justify-between mt-4">
                <span className="w-1/6 border-b dark:border-gray-600 lg:w-1/6"></span>
                <div className="text-xl text-center text-gray-900 uppercase dark:text-gray-400">Register with email</div>
                <span className="w-1/6 border-b dark:border-gray-400 lg:w-1/6"></span>
            </div>

            <span className="text-base md:text-lg font-medium text-red-500">{error}</span>
            <form onSubmit={handleSubmit}>
                {renderInput("name", "Name")}
                {renderInput("email", "Email", "email")}
                {/* {renderInput("phone", "Phone", "tel")} */}
                {renderInput("password", "Password", "password")}
                {renderButton("Register", "primary", "mt-4 md:mt-8", loading)}
            </form>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                <Link to="/login" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"> or sign in </Link>

                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
        </div>
    );
};

export default RegistrationForm;
