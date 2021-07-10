import React from "react";
import _ from "lodash";

const TableBody = ({ data, columns }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  const createKey = (item, column) => {
    return item.id + (column.path || column.key);
  };

  return (
    <tbody className="flex-1 sm:flex-none bg-white">
      {data.map((item) => (
        <tr key={item._id} className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 border-b pl-2 md:pl-0 hover:bg-gray-100">
          {columns.map((column) => (
            <td key={createKey(item, column)} className={column.className}>
              <span className="md:hidden font-semibold">{column.label ? column.label + ': ' : ''}</span> {renderCell(item, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
