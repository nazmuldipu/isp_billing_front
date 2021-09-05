import React from 'react';
import Table from "../../components/ui/tables/table";

const PackagesTable = ({ packagesPage, select }) => {
    const columns = [
        { path: "name", label: "Name", className:"pl-4" },
        { path: "serial", label: "Serial", className:"text-center" },
        {
          key: "Select",
          className: "text-right pr-4",
          content: (packages) => (
            <button
              className="text-indigo-500 bg-gray-100 px-2 rounded-md shadow-sm"
              onClick={() => select(packages)}
            >
              Select
            </button>
          ),
        },
      ];

    return ( <div className="p-3 bg-gray-50 rounded-md ">{packagesPage.docs && (
        <Table
          tableName={"Package Table"}
          columns={columns}
          data={packagesPage}
        />
      )}</div> );
}
 
export default PackagesTable;