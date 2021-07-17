import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import RoleRoute from "../../services/roleRoutes";
import UsersRoutes from "../../features/users/routes";
import CompanyRoutes from "../../features/companies/routes";

import DashboardIndex from ".";
import Navbar from "./navbar";
import { useLocation, Link } from 'react-router-dom'
import { SVGIcons } from '../../components/ui/svgIcons';
import ClinetRoutes from "../../features/clients/routes";

const sideBar = [
    { path: "/dashboard", label: "Dashboard", icon: 'dashboard' },
    { path: "/dashboard/companies", label: "Company", icon: 'building' },
    { path: "/dashboard/users", label: "Users", icon: 'users' },
    { path: "/dashboard/clients", label: "Clients", icon: 'user' },
    { path: "/dashboard/settings", label: "Settings", icon: 'settings' }
]

const DashboardRouter = () => {

    const location = useLocation();

    return (
        <div className="block bg-gray-300 w-full min-h-screen">
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-2-min-fill md:min-h-screen">
                <div className="w-full md:w-52 lg:w-60 xl:w-72 h-auto md:min-h-full bg-white">
                    <ul className="border rounded-md">
                        {sideBar.map(menu => (
                            <li key={menu.path} className="text-sm cursor-pointer border-t">
                                <Link className={`grid grid-flow-col auto-cols-max p-2  ${location.pathname === menu.path ? 'bg-white border-l-4 border-red-700' : "bg-gray-100"}`} 
                                    to={menu.path} >{menu.icon && <SVGIcons classNames="w-5" name={menu.icon} />} 
                                    <span className="pl-2 h-5"> {menu.label}</span> 
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full">
                    <Switch>
                        <RoleRoute path="/dashboard/clients" component={ClinetRoutes} roles={["ADMIN"]} /> {/* TODO: Change the role */}
                        <RoleRoute path="/dashboard/users" component={UsersRoutes} roles={["ADMIN"]} />
                        <RoleRoute path="/dashboard/companies" component={CompanyRoutes} roles={["ADMIN"]} />
                        <Route exact path="/dashboard" component={DashboardIndex} />
                        <Redirect to="/not-found" />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default DashboardRouter;
