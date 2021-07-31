import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import RoleRoute from "../../services/roleRoutes";
import ClinetRoutes from "../../features/clients/routes";
import SettingsRoutes from "../../features/settings/routes";
import UsersRoutes from "../../features/users/routes";
import CompanyRoutes from "../../features/companies/routes";

import DashboardIndex from ".";
import Navbar from "./navbar";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../features/auth/authSlice";
import Icon from "../../components/ui/Icon";

const sideBar = [
  { path: "/dashboard", label: "Dashboard", icon: "view-boards", roles: [] },
  {
    path: "/dashboard/companies",
    label: "Company",
    icon: "office-building",
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
    icon: "cog",
    roles: ["COMPANY"],
  },
];

const DashboardRouter = () => {
  const location = useLocation();
  const { role } = useSelector((state) => getCurrentUser(state));
  const [toogleMenu, setToogleMenu] = useState(false);

  const validateRole = (roles) => {
    if (!roles.length) return true;
    const v = roles.some((r) => r === role);
    return v;
  };

  const handleToogle = () => {
    setToogleMenu(!toogleMenu);
  };

  return (
    <div className="flex h-screen bg-gray-200 font-roboto">
      {/* Side navbar */}
      <div className="flex">
        <div
          className={`${
            toogleMenu ? "block" : "hidden"
          } fixed z-20 inset-0 bg-black opacity-50 transition-opacity md:hidden`}
          onClick={handleToogle}
        ></div>
        <div
          className={`${
            toogleMenu ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
          } fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0`}
        >
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center">
              <svg
                className="h-12 w-12"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
                  fill="#4C51BF"
                  stroke="#4C51BF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
                  fill="white"
                ></path>
              </svg>
              <span className="text-white text-2xl mx-2 font-semibold">
                ISP-Billing
              </span>
            </div>
          </div>
          <nav className="mt-10">
            {sideBar.map(
              (menu) =>
                validateRole(menu.roles) && (
                  <Link
                    key={menu.path}
                    to={menu.path}
                    className={`${
                      location.pathname === menu.path
                        ? "router-link-active router-link-exact-active bg-gray-600 text-gray-100  bg-opacity-25  border-gray-100"
                        : "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
                    } flex items-center duration-200 py-2 px-6 border-l-4 `}
                    aria-current="page"
                  >
                    <Icon
                      name={menu.icon}
                      stroke={location.pathname === menu.path ?"white":"#6b7280"}
                    />
                    <span className="mx-4">{menu.label}</span>
                  </Link>
                )
            )}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Navbar sideToggle={handleToogle} />
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
  );
};

export default DashboardRouter;
