/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Navbar from "./../components/navbar";


const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="my-10 mx-auto max-w-2xl px-4 sm:my-12 md:my-16 lg:my-20 sm:px-6 lg:px-8 xl:my-28">
                        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Billing Software for </span>
                            <span className="block text-indigo-600 xl:inline">your ISP</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Get started</a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">Live demo</a>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <svg
                            className="hidden text-white absolute top-0 -left-24 w-48 lg:block inset-y-0 h-56 sm:h-72 md:h-96 lg:h-full ransform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                        <img
                            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                            src="banner.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;
