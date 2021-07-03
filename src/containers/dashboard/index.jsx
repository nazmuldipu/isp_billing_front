import React from "react";
import Navbar from "./navbar";

const DashboardIndex = () => {
    return <div className="block bg-gray-300 w-full min-h-screen">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2-min-fill md:min-h-screen">
            <div className="w-full md:w-72 lg:w-80 xl:w-96 h-auto md:min-h-full bg-white">1</div>
            <div className="w-full">2</div>
        </div>        
    </div>;
};

export default DashboardIndex;
