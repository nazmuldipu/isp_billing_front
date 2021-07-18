import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SubNavbar from '../../components/subNavbar';
import Box from './boxs';
import Zone from './zones';

const menus = [
    { path: "/dashboard/settings/zones", icon: "map", label: "Zone" },
    {
        path: "/dashboard/settings/boxs",
        icon: "box",
        label: "Boxs",
    }
  ];

const SettingsRoutes = () => {
    return ( <div>
        <SubNavbar menus={menus} />
        <Switch>
            <Route exact path="/dashboard/settings/zones" component={Zone} />
            <Route exact path="/dashboard/settings/boxs" component={Box} />
        </Switch>
    </div> );
}
 
export default SettingsRoutes ;
