import React from 'react';
import { Link } from "react-router-dom";

const RegistrationPage = () => {
    return (
        <div className="absolute w-full h-full bg-red-50 overflow-hidden" >
            <div className="max-w-full md:max-w-4xl mx-auto mt-4 md:mt-28 shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="hidden md:block w-full h-full bg-origin-border bg-center bg-no-repeat bg-cover" style={{ "backgroundImage": `url('background.png')` }}>
                        <h1 className="font-light text-2xl text-center pt-10">Your trusted partner</h1>
                    </div>
                    <div className="w-full bg-white p-4 md:p-12">
                        <div className="grid grid-flow-col auto-cols-max">
                            <a href="/" className="inline-block">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="logo.svg"
                                    alt=""
                                />
                            </a>
                            <h2 className="text-2xl font-semibold text-gray-700 dark:text-white pl-4">ISP-Billing</h2>
                        </div>


                        <p className="text-base text-gray-400 dark:text-gray-200">Welcome! Please provide your info.</p>
                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/6 border-b dark:border-gray-600 lg:w-1/6"></span>
                            <div className="text-xl text-center text-gray-900 uppercase dark:text-gray-400">Register with email</div>
                            <span className="w-1/6 border-b dark:border-gray-400 lg:w-1/6"></span>
                        </div>
                        <form >
                            <div className="mt-4">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            </div>
                            <div className="mt-4">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="phone">Phone</label>
                                <input type="tel" name="phone" id="phone" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            </div>
                            <div className="mt-4">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email</label>
                                <input type="email" name="email" id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                                    <Link to="/forgot-password" className="text-xs text-gray-500 dark:text-gray-300 hover:underline"> Forget Password?</Link>
                                </div>

                                <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" />
                            </div>

                            <div className="mt-8">
                                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                            <Link to="/register" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"> or sign up </Link>

                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default RegistrationPage;