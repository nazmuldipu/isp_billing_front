import React from "react";
import Table from "../../components/ui/tables/table";

const UserTable = ({ userPage, select }) => {
  const columns = [
    { path: "name", label: "Name" },
    { path: "email", label: "Email" },
    { path: "role", label: "Role" },
    { path: "company.name", label: "Company" },
    {
      key: "Select",
      className: "text-end",
      content: (user) => (
        <button
          className="text-indigo-500 bg-gray-100 px-2 rounded-md shadow-sm"
          onClick={() => select(user)}
        >
          Edit
        </button>
      ),
    },
  ];

  return (
    <div className=" m-3">
      {userPage.docs && (
        <Table tableName={"User Table"} columns={columns} data={userPage} />
      )}
    </div>
  );
};

export default UserTable;
