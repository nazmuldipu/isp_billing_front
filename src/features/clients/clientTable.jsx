import React from 'react';
import Table from '../../components/ui/tables/table';

const ClientTable = ({clientPage}) => {
    const columns = [
        { path: "client_name", label: "Name", className:"pl-4" },
        { path: "clinet_phone", label: "Phone" },       
        { path: "client_email", label: "Email" },
      ];

    return ( <div className="p-3 bg-gray-50 rounded-md ">{clientPage.docs && (
        <Table
          tableName={"Client Table"}
          columns={columns}
          data={clientPage}
        />
      )}</div> );
}
 
export default ClientTable;