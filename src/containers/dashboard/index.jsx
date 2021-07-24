import React from "react";
import Icon from "../../components/ui/Icon";
import { SVGIcons } from '../../components/ui/svgIcons';
const DashboardIndex = () => {
    return (
        <div>
            <div>Dashboard index</div>
            <div><Icon name="user" stroke="black" size="512" strokeWidth="1"/></div>
            <SVGIcons classNames="w-8 h-8" name="user" />
        </div>);
};

export default DashboardIndex;
