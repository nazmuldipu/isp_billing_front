import React, { useState, Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import RoleRoute from "../../services/roleRoutes";
import ClinetRoutes from "../../features/clients/routes";
import SettingsRoutes from "../../features/settings/routes";
import UsersRoutes from "../../features/users/routes";
import CompanyRoutes from "../../features/companies/routes";

import DashboardIndex from ".";
// import Navbar from "./navbar";
import { useHistory, useLocation, Link } from "react-router-dom";
import { getCurrentUser, loggedOut } from "../../features/auth/authSlice";
import Icon from "../../components/ui/Icon";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const sideBar = [
  { path: "/dashboard", label: "Dashboard", icon: "template", roles: [] },
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
  const history = useHistory();
  const location = useLocation();
  const { role } = useSelector((state) => getCurrentUser(state));
  const [toogleMenu, setToogleMenu] = useState(false);
  const dispatch = useDispatch();

  const validateRole = (roles) => {
    if (!roles.length) return true;
    const v = roles.some((r) => r === role);
    return v;
  };

  const handleToogle = () => {
    setToogleMenu(!toogleMenu);
  };

  const handleLogout = () => {
    dispatch(loggedOut());
    history.push("/login");
  };

  return (
    <div className="flex h-screen bg-gray-200 font-roboto">
      {/* Side navbar */}
      <div className="flex">
        <div
          className={`${toogleMenu ? "block" : "hidden"
            } fixed z-20 inset-0 bg-white opacity-50 transition-opacity md:hidden`}
          onClick={handleToogle}
        ></div>
        <div
          className={`${toogleMenu ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
            } fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-white border-r border-gray-300 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0`}
        >
          <div className="flex justify-between mx-2 mt-3">
            <div className="text-black text-lg font-bold mx-2 ">
              ISP-Billing
            </div>
            <div>
              <Menu as="div" className="ml-3 relative">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="bg-gray-100 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        {/* <Icon
                        name="lightning-bolt"
                        stroke="#4f46e5" /> */}
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https:images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/dashboard"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/dashboard"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              onClick={handleLogout}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </div>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
          <nav className="mt-10">
            {sideBar.map(
              (menu) =>
                validateRole(menu.roles) && (
                  <Link
                    key={menu.path}
                    to={menu.path}
                    className={`${location.pathname === menu.path
                      ? "router-link-active router-link-exact-active bg-gray-100  border-indigo-600 text-indigo-600 font-semibold"
                      : "border-gray-900 text-gray-500 hover:bg-gray-200 hover:bg-opacity-25 "
                      } flex items-center duration-200 px-3 border-l-4 `}
                    aria-current="page"
                  >
                    <span className="p-1">
                      <Icon
                        name={menu.icon}
                        stroke={location.pathname === menu.path ? "#4f46e5" : "#6b7280"}
                      />
                    </span>
                    <span className="mx-4">{menu.label}</span>
                  </Link>
                )
            )}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* <Navbar sideToggle={handleToogle} /> */}
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
