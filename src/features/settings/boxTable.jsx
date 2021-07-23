import React from 'react';
import Table from "../../components/ui/tables/table";

const BoxTable = ({ boxPage, select }) => {
    const columns = [
        { path: "zone.name", label: "Zone", className: "pl-4" },
        { path: "name", label: "Name", className: "text-center" },
        { path: "serial", label: "Serial", className: "text-center" },
        {
            key: "Select",
            className: "text-right pr-4",
            content: (box) => (
                <button
                    className="text-indigo-500 bg-gray-100 px-2 rounded-md shadow-sm"
                    onClick={() => select(box)}
                >
                    Select
                </button>
            ),
        },
    ];

    return (<div className="p-3 bg-gray-50 rounded-md ">{boxPage.docs && (
        <Table
            tableName={"Box Table"}
            columns={columns}
            data={boxPage}
        />
    )}</div>);
}

export default BoxTable;