import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClinetsIndex from './index';
import AddClient from './add'
import ViewClient from './view';

import SubNavbar from '../../components/subNavbar';

const menus = [
    { path: "/dashboard/clients/add", icon: "plus", label: "Add", },
    { path: "/dashboard/clients", icon: "view-list", label: "List" },
    { path: "/dashboard/clients/view", icon: "pencil", label: "View" }
  ];

const ClinetRoutes = () => {
    return ( <div>
        <SubNavbar menus={menus} />
        <Switch>
            <Route exact path="/dashboard/clients/add" component={AddClient} />
            <Route exact path="/dashboard/clients/view" component={ViewClient} />
            <Route exact path="/dashboard/clients" component={ClinetsIndex} />
        </Switch>
    </div> );
}
 
export default ClinetRoutes;