import React from 'react';
import Table from "../../components/ui/tables/table";

const ZoneTable = ({ zonePage, select }) => {
    const columns = [
        { path: "name", label: "Name", className:"pl-4" },
        { path: "serial", label: "Serial", className:"text-center" },
        {
          key: "Select",
          className: "text-right pr-4",
          content: (zone) => (
            <button
              className="text-indigo-500 bg-gray-100 px-2 rounded-md shadow-sm"
              onClick={() => select(zone)}
            >
              Select
            </button>
          ),
        },
      ];

    return ( <div className="p-3 bg-gray-50 rounded-md ">{zonePage.docs && (
        <Table
          tableName={"Zone Table"}
          columns={columns}
          data={zonePage}
        />
      )}</div> );
}
 
export default ZoneTable;