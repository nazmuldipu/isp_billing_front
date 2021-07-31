import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CompanyIndex from "./index";
import BuySMS from "./buySMS";
import EntityLimit from './entityLimit';
import SubNavbar from "../../components/subNavbar";

const menus = [
  { path: "/dashboard/companies", icon: "view-list", label: "List" },
  {
    path: "/dashboard/companies/entityLimit",
    icon: "tag",
    label: "Limit Entity",
  },
  {
    path: "/dashboard/companies/buySMS",
    icon: "mail",
    label: "Buy SMS",
  },
];

const CompanyRoutes = () => {
  return (
    <div>
      <SubNavbar menus={menus} />
      <Switch>
        <Route exact path="/dashboard/companies/buySMS" component={BuySMS} />
        <Route exact path="/dashboard/companies/entityLimit" component={EntityLimit} />
        <Route exact path="/dashboard/companies" component={CompanyIndex} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default CompanyRoutes;
