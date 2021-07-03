import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import DashboardIndex from ".";

const DashboardRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/dashboard" component={DashboardIndex} />
                <Redirect to="/not-found" />
            </Switch>
        </div>
    );
};

export default DashboardRouter;
