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
          className="btn btn-sm btn-outline-success"
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
