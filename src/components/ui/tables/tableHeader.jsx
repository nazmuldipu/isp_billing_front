import React from "react";

const TableHeader = ({ columns, onSort }) => {
  return (
    <thead>
      <tr className="text-left hidden md:table-row">
        {columns.map((column) => (
          <th
            onClick={() => onSort(column.path)}
            className={`cursor-pointer p-1 border-b border-gray-400 bg-white ${column.className ? column.className : ''}`}
            key={column.path || column.key}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
