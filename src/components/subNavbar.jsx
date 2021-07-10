import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SVGIcons } from "./ui/svgIcons";

const SubNavbar = ({menus}) => {
    const location = useLocation();

    
    return (
        <div className="bg-gray-50">
            <div className="container px-2">
                {menus.map((menu) => (
                    <div key={menu.path} className="inline-block text-sm">
                        <Link className={`grid grid-flow-col auto-cols-max mx-3 py-1  ${location.pathname === menu.path ? 'border-b-2 border-red-700 font-semibold' : "font-normal"}`} to={menu.path} >
                            {menu.icon && <SVGIcons classNames="w-5 h-5" name={menu.icon} />} <span className="pl-2 h-5"> {menu.label}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubNavbar;

