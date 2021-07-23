import React from 'react';
import { Link } from 'react-router-dom';

const SettingsIndex = () => {
    return (
        <div className="container mx-auto my-4">
            <div className="grid grid-cols-4 gap-4">
                <Link to="/dashboard/settings/zones" className="p-3 rounded-md border-l-4 border-blue-600 bg-white shadow-md hover:shadow-none hover:border-blue-900">Zone settings</Link>
                <Link to="/dashboard/settings/boxes" className="p-3 rounded-md border-l-4 border-blue-600 bg-white shadow-md hover:shadow-none hover:border-blue-900">Box settings</Link>
                <Link to="/dashboard/settings/packages" className="p-3 rounded-md border-l-4 border-blue-600 bg-white shadow-md hover:shadow-none hover:border-blue-900">Packages settings</Link>
            </div>
        </div>
    );
}

export default SettingsIndex;