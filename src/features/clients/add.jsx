import React, { useState } from "react";
import Joi from "joi-browser";
import useForm from "../../components/ui/forms/useForm";
import Button from "../../components/ui/forms/button";
import { saveClient, updateClient } from "./clientSlice";
import { useDispatch, useSelector } from "react-redux";

const client_types = [
  { _id: "home", name: "Home" },
  { _id: "office", name: "Office" },
  { _id: "shop", name: "Shop" },
  { _id: "agent", name: "Agent" },
  { _id: "reseller", name: "Re-Seller" },
];
const client_Gender = [
  { _id: "male", name: "Male" },
  { _id: "female", name: "Female" },
  { _id: "other", name: "Other" },
];
const connction_typs = [
  { _id: "shared", name: "Shared" },
  { _id: "dedicated", name: "Dedicated" },
  { _id: "individual", name: "Individual" },
  { _id: "corporate", name: "Corporate" },
];
const cable_typs = [
  { _id: "utp", name: "UTP" },
  { _id: "coaxial", name: "Coaxial" },
  { _id: "fiber", name: "Fiber" },
  { _id: "cat_5", name: "Cat 5" },
  { _id: "cat_6", name: "Cat 6" },
];
const connection_packages = [
  { _id: "one_mbps", name: "1 Mbps" },
  { _id: "two_mbps", name: "2 Mbps" },
  { _id: "three_mbps", name: "3 Mbps" },
  { _id: "four_mbps", name: "4 Mbps" },
  { _id: "five_mbps", name: "5 Mbps" },
  { _id: "six_mbps", name: "6 Mbps" },
  { _id: "eight_mbps", name: "8 Mbps" },
  { _id: "ten_mbps", name: "10 Mbps" },
];

const AddClient = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.entities.clients.error);
  const [nidFront, setNidFront] = React.useState();
  const [nidBack, setNidBack] = React.useState();
  const [profile, setProfile] = React.useState();
  const [edit, setEdit] = useState(false);
  const [client, setClient] = useState({});

  const schema = {
    client_id: Joi.string().required().label("Client ID"),
    client_type: Joi.string().required().label("Client Type"),
    client_nid_number: Joi.string().required().label("NID number"),
    client_name: Joi.string().required().label("Client Name"),
    client_father: Joi.string().required().label("Client Father"),
    clinet_phone: Joi.string().required().label("Phone"),
    client_phone_alternate: Joi.number().label("Client Alternate Phone"),
    client_email: Joi.string().email().required().label("Email"),
    client_dob: Joi.string().required().label("Date Of Birth"),
    client_gender: Joi.string().required().label("Gender"),
    client_occupation: Joi.string().required().label("Occupation"),
    client_username: Joi.string().required().label("Client Username"),
    client_password: Joi.string().label("Client Password"),
    client_house_no: Joi.string().label("House no"),
    client_flat_no: Joi.string().label("Flat no"),
    client_road_no: Joi.string().label("Road no"),
    client_police_station: Joi.string().label("Police station"),
    client_present_address: Joi.string().label("Present Address"),
    client_permanent_address: Joi.string()
      .required()
      .label("Permanent Address"),
    client_address_lat: Joi.number().label("Address Latitude"),
    client_address_long: Joi.number().label("Address Longitude"),

    connection_type: Joi.string().required().label("Connection Type"),
    connection_package: Joi.string().required().label("Package"),
    cable_type: Joi.string().required().label("Cable Type"),
    cable_required: Joi.string().label("Cable required"),
    ip_address: Joi.string().label("IP Address"),
    mac_address: Joi.string().label("Mac Address"),
    send_login_sms: Joi.boolean().label("Send Login SMS"),

    signup_fee: Joi.number().label("Signup Fee"),
    discount: Joi.number().label("Discount"),
    extra: Joi.number().label("Extra"),
    payment_method: Joi.string().required().label("Payment Method"),
    payment_deadline: Joi.string().label("Payment Deadline"),
    billing_deadline: Joi.string().label("Billing Deadline"),
    termination_date: Joi.string().label("Termination Date"),

    agent: Joi.string().label("Agent"),
    zone: Joi.string().required().label("Zone"),
    box: Joi.string().label("Box"),
    network: Joi.string().label("Network"),
    bill_collector: Joi.string().label("Bill Collector"),
    technician: Joi.string().label("Technician"),

    note: Joi.string().label("Note"),
  };

  const {
    data,
    renderInput,
    renderSelect,
    renderTextArea,
    renderButton,
    validateSubmit,
  } = useForm({
    schema,
  });

  const handleSubmit = (e) => {
    if (validateSubmit(e)) {
      const obj = { ...data };

      Object.keys(obj).forEach((key) => {
        if (obj[key] === undefined || obj[key] === "") {
          delete obj[key];
        }
      });

      const formData = new FormData();
      Object.keys(obj).forEach((key) => {
        formData.append(key, obj[key]);
      });
      formData.append("profile", profile);
      formData.append("nid_front", nidFront);
      formData.append("nid_back", nidBack);
      if (edit) {
        dispatch(updateClient(client._id, formData));
      } else {
        dispatch(saveClient(formData));
      }
      setClient({});
      // onSubmit(obj);
    }
  };

  const onClear = async () => {
    setEdit(false);
    setClient({});
  };

  return (
    <div className="p-3 border shadow-sm bg-gray-50 mb-12">
      <h5 className="text-lg font-bold text-gray-900 bg-blue-50 px-4 py-2">
        Client Form
      </h5>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 border p-3 rounded-md bg-white">
          <div>
          {profile && (
              <span>
                Profile Image
                <img
                  className="max-h-80 max-w-full"
                  src={URL.createObjectURL(profile)}
                  alt="Profile"
                ></img>{" "}
              </span>
            )}
            <label
              htmlFor="profile"
              className="block text-xs md:text-sm font-medium text-gray-600"
            >
              Profile
            </label>
            <input
              id="profile"
              type="file"
              className="block w-full px-2 md:px-4 py-1 md:py-1.5 text-sm md:text-lg text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              onChange={(e) => setProfile(e.target.files[0])}
            />
          </div>
          <div>
            {nidFront && (
              <span>
                NID Front Page{" "}
                <img
                  className="max-h-80 max-w-full"
                  src={URL.createObjectURL(nidFront)}
                  alt="NID Front"
                ></img>{" "}
              </span>
            )}
            <label
              htmlFor="nidFront"
              className="block text-xs md:text-sm font-medium text-gray-600"
            >
              NID Front
            </label>
            <input
              id="nidFront"
              type="file"
              className="block w-full px-2 md:px-4 py-1 md:py-1.5 text-sm md:text-lg text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              onChange={(e) => setNidFront(e.target.files[0])}
            />
          </div>
          <div>
            {nidBack && (
              <span>
                NID Back Page{" "}
                <img
                  className="max-h-80 max-w-full"
                  src={URL.createObjectURL(nidBack)}
                  alt="NID Back"
                ></img>{" "}
              </span>
            )}
            <label
              htmlFor="nidBack"
              className="block text-xs md:text-sm font-medium text-gray-600"
            >
              NID Back
            </label>
            <input
              id="nidBack"
              type="file"
              className="block w-full px-2 md:px-4 py-1 md:py-1.5 text-sm md:text-lg text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              onChange={(e) => setNidBack(e.target.files[0])}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 border p-3 mt-3 rounded-md bg-white">
          <h3 className="md:col-span-2 text-xl font-bold text-center">
            Client info
          </h3>
          {renderInput("client_id", "Client ID*")}
          {renderSelect("client_type", "Client Type*", client_types)}
          {renderInput("client_nid_number", "NID*")}
          <div></div>
          {renderInput("client_name", "Name*")}
          {renderInput("client_father", "Father*")}
          {renderInput("clinet_phone", "Phone*")}
          {renderInput("client_phone_alternate", "Alternate Phone")}
          {renderInput("client_email", "Email*")}
          {renderInput("client_dob", "Date of Birth*", "date")}
          {renderSelect("client_gender", "Gender*", client_Gender)}
          {renderInput("client_occupation", "Occupation*")}
          {renderInput("client_username", "Username*")}
          {renderInput("client_password", "Password")}

          {renderInput("client_house_no", "House No.")}
          {renderInput("client_flat_no", "Flat No.")}
          {renderInput("client_road_no", "Road No")}
          {renderInput("client_police_station", "Police Station")}
          <div className="md:col-span-2">
            {renderTextArea(
              "client_present_address",
              "Present Address",
              3,
              3000,
              false
            )}
          </div>
          <div className="md:col-span-2">
            {renderTextArea(
              "client_permanent_address",
              "Permanent Address*",
              3,
              3000,
              false
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 border p-3 mt-3 rounded-md bg-white">
          <h3 className="md:col-span-2 text-xl font-bold text-center">
            Connection
          </h3>
          {renderSelect("connection_type", "Connection Type*", connction_typs)}
          {renderSelect(
            "connection_package",
            "Connection Package*",
            connection_packages
          )}
          {renderSelect("cable_type", "Cable Type*", cable_typs)}
          {renderInput("cable_required", "Cable Required")}
          {renderInput("ip_address", "IP Address")}
          {renderInput("mac_address", "MAC Address")}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 border p-3 mt-3 rounded-md bg-white">
          <h3 className="md:col-span-2 text-xl font-bold text-center">
            Finance{" "}
          </h3>
          {renderInput("signup_fee", "Signup Fee", "number")}
          {renderInput("discount", "Discount", "number")}
          {renderInput("payment_deadline", "Payment Deadline", "number")}
          {renderInput("billing_deadline", "Billing Deadline", "number")}
          {renderInput("termination_date", "Termination Date", "number")}
          {renderInput("payment_method", "Payment Method")}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 border p-3 mt-3 rounded-md bg-white">
          <h3 className="md:col-span-2 text-xl font-bold text-center">
            Admin{" "}
          </h3>
          {renderInput("agent", "Agent")}
          {renderInput("zone", "Zone Name*")}
          {renderInput("box", "Box Name")}
          {renderInput("network", "Network Name")}
          {renderInput("bill_collector", "Bill Collector")}
          {renderInput("technician", "Technician")}
        </div>
        <div className="flex flex-row-reverse mt-4">
          {renderButton("Save", "", "ml-2", false)}
          <Button label="Clear" btnBase="danger" onClick={onClear} />
        </div>
        <span className="text-base md:text-lg font-medium text-red-500">
          {error}
        </span>
      </form>
    </div>
  );
};

export default AddClient;
