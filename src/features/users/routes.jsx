import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import UsersIndex from "./index";
import AssignUser from "./assignUser";
import ChangePassword from './changePassword';
import SubNavbar from "../../components/subNavbar";

const menus = [
  { path: "/dashboard/users", icon: "view-list", label: "List" },
  {
      path: "/dashboard/users/assign",
      icon: "user",
      label: "Assign User",
  },
  {
      path: "/dashboard/users/changePassword",
      icon: "lock-open",
      label: "Change Password",
  },
];

const UsersRoutes = () => {
  return (
    <div>
      <SubNavbar menus={menus} />
      <Switch>
        <Route exact path="/dashboard/users/changePassword" component={ChangePassword} />
        <Route exact path="/dashboard/users/assign" component={AssignUser} />
        <Route exact path="/dashboard/users" component={UsersIndex} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default UsersRoutes;
