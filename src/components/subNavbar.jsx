import React from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./ui/Icon";

const SubNavbar = ({menus}) => {
    const location = useLocation();

    
    return (
        <div className="bg-gray-50">
            <div className="container px-2 border-b">
                {menus.map((menu) => (
                    <div key={menu.path} className="inline-block text-sm">
                        <Link className={`grid grid-flow-col auto-cols-max mx-3 py-1  ${location.pathname === menu.path ? 'border-b-2 text-blue-700 border-blue-700 font-semibold' : "font-normal"}`} to={menu.path} >
                            {menu.icon && <Icon className="w-5 h-5" name={menu.icon} stroke={location.pathname === menu.path ? "#4f46e5" : "#6b7280"} /> } <span className="pl-2 h-5"> {menu.label}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubNavbar;

