import React from "react";
import Navbar from "./navbar";
import { useLocation, Link } from 'react-router-dom'


const sideBar = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/dashboard/companies", label: "Company" },
    { path: "/dashboard/users", label: "Users" },
    { path: "/dashboard/clients", label: "Clients" }
]

const DashboardIndex = () => {
    const location = useLocation();

    return <div className="block bg-gray-300 w-full min-h-screen">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2-min-fill md:min-h-screen">
            <div className="w-full md:w-72 lg:w-80 xl:w-96 h-auto md:min-h-full bg-white">
                <ul className="border rounded-md">
                    {sideBar.map(menu => (
                        <li key={menu.path} className="text-sm cursor-pointer border-t">
                            <Link className={`block px-4 py-3 ${location.pathname === menu.path ? 'bg-white border-l-4 border-red-700' : "bg-gray-100"}`} to={menu.path} > {menu.label} </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full">2</div>
        </div>
    </div >;
};

export default DashboardIndex;
