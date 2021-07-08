import React from "react";

import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import TableFotter from "./tableFotter";

const Table = ({ tableName, columns, data }) => {
  return (
    <div className="table-responsive-sm">
      <table className="table table-sm border m-0">
        <TableHeader columns={columns} tableName={tableName} />
        <TableBody data={data.docs} columns={columns} />
        <TableFotter data={data} columns={columns} />
      </table>
    </div>
  );
};

export default Table;
