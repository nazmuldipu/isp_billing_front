import React, { useState } from "react";

import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import TableFotter from "./tableFotter";
import { useDispatch } from "react-redux";
import { sortChanged, searched } from "../../../store/paginateSlice";

const Table = ({ tableName, columns, data }) => {
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

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searched({ param: event.target.search.value }));
  };

  return (
    <div className="min-w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <h2 className="text-left text-2xl font-bold text-gray-900">{tableName}</h2>
        <form onSubmit={handleSearch} className="place-self-end grid grid-flow-col auto-cols-max gap-2 my-1">
          <input type="search" name="search" placeholder="Search" aria-label="Search" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
          <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
            Filter
          </button>
        </form>
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
