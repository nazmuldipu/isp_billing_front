import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SubNavbar from '../../components/subNavbar';
import Boxes from './boxes';
import Zone from './zones';
import SettingsIndex from './index';

const menus = [
    { path: "/dashboard/settings/zones", icon: "map", label: "Zone" },
    {
        path: "/dashboard/settings/boxes",
        icon: "box",
        label: "Boxs",
    }
];

const SettingsRoutes = () => {
    return (<div>
        <SubNavbar menus={menus} />
        <Switch>
            <Route exact path="/dashboard/settings/zones" component={Zone} />
            <Route exact path="/dashboard/settings/boxes" component={Boxes} />
            <Route exact path="/dashboard/settings" component={SettingsIndex} />
        </Switch>
    </div>);
}

export default SettingsRoutes;
