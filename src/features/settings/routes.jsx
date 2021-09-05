import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SubNavbar from '../../components/subNavbar';
import Boxes from './boxes';
import Zone from './zones';
import SettingsIndex from './index';
import Packages from './packages';

const menus = [
    { path: "/dashboard/settings/zones", icon: "location-marker", label: "Zone" },
    { path: "/dashboard/settings/boxes", icon: "archive", label: "Boxs", },
    { path: "/dashboard/settings/packages", icon: "switch-vertical", label: "Packages", }
];

const SettingsRoutes = () => {
    return (<div>
        <SubNavbar menus={menus} />
        <Switch>
            <Route exact path="/dashboard/settings/packages" component={Packages} />
            <Route exact path="/dashboard/settings/zones" component={Zone} />
            <Route exact path="/dashboard/settings/boxes" component={Boxes} />
            <Route exact path="/dashboard/settings" component={SettingsIndex} />
        </Switch>
    </div>);
}

export default SettingsRoutes;
