import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClinetsIndex from './index';
import AddClient from './add'

import SubNavbar from '../../components/subNavbar';

const menus = [
    { path: "/dashboard/clients", icon: "list", label: "List" },
    {
        path: "/dashboard/clients/add",
        icon: "add",
        label: "New",
    }
  ];

const ClinetRoutes = () => {
    return ( <div>
        <SubNavbar menus={menus} />
        <Switch>
            <Route exact path="/dashboard/clients/add" component={AddClient} />
            <Route exact path="/dashboard/clients" component={ClinetsIndex} />
        </Switch>
    </div> );
}
 
export default ClinetRoutes;