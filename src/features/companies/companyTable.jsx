import React from "react";
import Table from "../../components/ui/tables/table";

const CompanyTable = ({ companyPage, select }) => {
  const columns = [
    { path: "name", label: "Name" },
    { path: "phone", label: "Phone" },
    { path: "max_entity", label: "Max" },
    { path: "sms_quota", label: "SMS" },
    { path: "per_month", label: "Per Month" },
    {
      key: "Select",
      className: "text-end",
      content: (company) => (
        <button
          className="text-indigo-500 bg-gray-100 px-2 rounded-md shadow-sm"
          onClick={() => select(company)}
        >
          Select
        </button>
      ),
    },
  ];

  return (
    <div className="p-3 bg-gray-50 rounded-md">
      {companyPage.docs && (
        <Table
          tableName={"Company Table"}
          columns={columns}
          data={companyPage}
        />
      )}
    </div>
  );
};

export default CompanyTable;
