import React, { useState } from "react";

import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import TableFotter from "./tableFotter";
import { useDispatch } from "react-redux";
import { sortChanged, searched } from "../../../store/paginateSlice";
import SearchForm from "../forms/search";

const Table = ({ tableName, columns, data }) => {
  const action = { label: 'Filter', icon: 'filter' }
  const dispatch = useDispatch();
  const [sort, setSort] = useState("name");
  const [order, setOrder] = useState("asc");

  const handleSort = (event) => {
    let orderL;
    if (event === sort) {
      orderL = order === "asc" ? "desc" : "asc";
      setOrder(orderL);
    } else {
      setSort(event);
      setOrder("asc");
    }
    dispatch(sortChanged({ sort: event, order }));
  };

  const handleSearch = (value) => {
    dispatch(searched({ param: value }));
  };

  return (
    <div className="min-w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-50 px-4">
        <h2 className="text-lg font-bold text-gray-900 align-middle py-2">{tableName}</h2>
        <SearchForm onSearch={handleSearch} action={action}/>
      </div>
      <table className="border rounded shadow-sm min-w-full leading-normal">
        <TableHeader columns={columns} onSort={handleSort} />
        <TableBody data={data.docs} columns={columns} />
        <TableFotter data={data} columns={columns} />
      </table>
    </div>
  );
};

export default Table;
