import React, { useState } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
import CheckBox from "./checkBox";
import TextArea from "./textArea";

const useForm = ({ schema }) => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const initForm = (obj) => {
        const formData = {};
        Object.keys(schema).forEach((key) => {
            formData[key] = obj[key];
        });
        setData(formData);
    };

    const handleChange = ({ currentTarget: input }) => {
        if (input.type === "checkbox") input.value = input.checked;

        const faults = { ...errors };
        const errorMessage = validateProperty(input);
        if (errorMessage) faults[input.name] = errorMessage;
        else delete faults[input.name];
        setErrors(faults);

        const formData = { ...data };
        switch (input.type) {
            case "checkbox":
                formData[input.name] = JSON.parse(input.value);
                break;
            case "number":
                formData[input.name] = Number(input.value);
                break;
            case "textarea":
                let value = input.value;
                if (JSON.parse(input.dataset.ascii)) {
                    console.log("optimizing");
                    value = value.replace(
                        /[^A-Za-z 0-9 .,?""!@#$%^&*()-_=+;:<>/\\|}{[\]`~]*/g,
                        ""
                    );
                    value = value.replace(/ +(?= )/g, "");
                }
                formData[input.name] = value;
                break;

            default:
                formData[input.name] = input.value;
        }
        setData(formData);
    };

    const validateSubmit = (e) => {
        e.preventDefault();
        const fErrors = validateForm();
        setErrors(fErrors || {});
        if (fErrors) return false;
        return true;
    };

    const validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schemaP = { [name]: schema[name] };
        const { error } = Joi.validate(obj, schemaP);
        if (!error) return null;
        return error ? error.details[0].message : null;
    };

    const validateForm = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(data, schema, options);
        if (!error) return null;

        const formErrors = {};
        for (let item of error.details) {
            formErrors[item.path[0]] = item.message;
        }
        return formErrors;
    };

    const renderInput = (name, label, type = "text") => {
        return (
            <Input
                type={type}
                name={name}
                value={data[name] || ""}
                label={label}
                onChange={handleChange}
                error={errors[name]}
            />
        );
    };

    const renderTextArea = (name, label, rows = 3, maxlength, ascii = false) => {
        return (
            <div>
                <TextArea
                    name={name}
                    value={data[name] || ""}
                    label={label}
                    rows={rows}
                    maxLength={maxlength}
                    data-ascii={ascii}
                    onChange={handleChange}
                    error={errors[name]}
                />
                <div className="form-text text-end">
                    {data[name] ? data[name].length : 0}/{maxlength}
                </div>
            </div>
        );
    };

    const renderCheckBox = (name, label) => {
        return (
            <CheckBox
                name={name}
                value={data[name] || ""}
                label={label}
                onChange={handleChange}
                error={errors[name]}
            />
        );
    };

    const renderSelect = (name, label, options) => {
        return (
            <Select
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={handleChange}
                error={errors[name]}
            />
        );
    };

    const renderButton = (label, classNmae = "btn btn-sm btn-primary") => {
        return (
            <React.Fragment>
                <button className={classNmae}>{label}</button>
            </React.Fragment>
        );
    };

    const renderLabel = (name, label) => {
        return (
            <div className="form-group">
                <label className="col-form-label-sm p-0 mb-1" htmlFor="name">
                    {label}
                </label>
                <label name="name" id="name" className="form-control form-control-sm">
                    {name}
                </label>
            </div>
        );
    };

    return {
        data,
        initForm,
        validateSubmit,
        validateForm,
        renderInput,
        renderTextArea,
        renderSelect,
        renderCheckBox,
        renderButton,
        renderLabel,
    };
};

export default useForm;
