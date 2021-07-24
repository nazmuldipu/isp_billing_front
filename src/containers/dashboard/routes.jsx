import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import RoleRoute from "../../services/roleRoutes";
import UsersRoutes from "../../features/users/routes";
import CompanyRoutes from "../../features/companies/routes";

import DashboardIndex from ".";
import Navbar from "./navbar";
import { useLocation, Link } from "react-router-dom";
import ClinetRoutes from "../../features/clients/routes";
import SettingsRoutes from "../../features/settings/routes";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../features/auth/authSlice";
import Icon from "../../components/ui/Icon";

const sideBar = [
  { path: "/dashboard", label: "Dashboard", icon: "dashboard", roles: [] },
  {
    path: "/dashboard/companies",
    label: "Company",
    icon: "building",
    roles: ["ADMIN"],
  },
  { path: "/dashboard/users", label: "Users", icon: "users", roles: ["ADMIN"] },
  {
    path: "/dashboard/clients",
    label: "Clients",
    icon: "user",
    roles: ["COMPANY"],
  },
  {
    path: "/dashboard/settings",
    label: "Settings",
    icon: "settings",
    roles: ["COMPANY"],
  },
];

const DashboardRouter = () => {
  const location = useLocation();
  const { role } = useSelector((state) => getCurrentUser(state));

  const validateRole = (roles) => {
    if (!roles.length) return true;
    const v = roles.some((r) => r === role);
    return v;
  };

  return (
    <div className="block bg-gray-300 w-full min-h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-2-min-fill md:min-h-screen">
        <div className="w-full md:w-52 lg:w-60 xl:w-72 h-auto md:min-h-full bg-white py-10">
          <ul className="">
            {sideBar.map(
              (menu) =>
                validateRole(menu.roles) && (
                  <li key={menu.path} className="text-base cursor-pointer">
                    <Link
                      className={`grid grid-flow-col auto-cols-max py-3 pl-5 ${
                        location.pathname === menu.path
                          ? "text-red-600 font-semibold border-r-4 border-red-700"
                          : ""
                      }`}
                      to={menu.path}
                    >
                      {menu.icon && <Icon name={menu.icon} className="w-5" stroke={location.pathname === menu.path ? "red" : "black" } strokeWidth="2"/> }
                      <span className="pl-2 h-5"> {menu.label}</span>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
        <div className="w-full">
          <Navbar />
          <Switch>
            <RoleRoute
              path="/dashboard/clients"
              component={ClinetRoutes}
              roles={["COMPANY"]}
            />
            <RoleRoute
              path="/dashboard/settings"
              component={SettingsRoutes}
              roles={["COMPANY"]}
            />
            <RoleRoute
              path="/dashboard/users"
              component={UsersRoutes}
              roles={["ADMIN"]}
            />
            <RoleRoute
              path="/dashboard/companies"
              component={CompanyRoutes}
              roles={["ADMIN"]}
            />
            <Route exact path="/dashboard" component={DashboardIndex} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default DashboardRouter;
