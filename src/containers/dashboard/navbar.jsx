/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { loggedOut } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Icon from "../../components/ui/Icon";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ sideToggle }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(loggedOut());
    history.push("/login");
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
      <div className="flex items-center">
        <button
          className="text-gray-600 focus:outline-none lg:hidden"
          onClick={sideToggle}
        >
          <Icon
            name="menu"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </button>
        <div className="relative mx-4 lg:mx-0">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Icon
              name="search"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </span>
          <input
            className="w-32 sm:w-64 rounded-md pl-10 pr-4 py-2 border border-gray-500 focus:border-indigo-600"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="flex items-center">
        <button className="flex mx-4 text-gray-600 focus:outline-none">
          <Icon
            name="bell"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </button>

        {/* Profile dropdown */}
        <Menu as="div" className="ml-3 relative">
          {({ open }) => (
            <>
              <div>
                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https:images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/dashboard"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/dashboard"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={handleLogout}
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Sign out
                      </div>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </header>
    //     <Disclosure as="nav" className="bg-gray-100">
    //         {({ open }) => (
    //             <>
    //                 <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    //                     <div className="relative flex items-center justify-between h-16">
    //                         <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //                             {/* Mobile menu button*/}
    //                             <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //                                 <span className="sr-only">Open main menu</span>
    //                                 {open ? (
    //                                     <XIcon className="block h-6 w-6" aria-hidden="true" />
    //                                 ) : (
    //                                     <MenuIcon className="block h-6 w-6" aria-hidden="true" />
    //                                 )}
    //                             </Disclosure.Button>
    //                         </div>
    //                         <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
    //                             <div className="flex-shrink-0 flex items-center">
    //                                 <img
    //                                     className="block lg:hidden h-8 w-auto"
    //                                     src="logo.svg"
    //                                     alt="Workflow"
    //                                 />
    //                                 <img
    //                                     className="hidden lg:block h-8 w-auto"
    //                                     src="logo_large.svg"
    //                                     alt="Workflow"
    //                                 />
    //                             </div>
    //                             <div className="hidden sm:block sm:ml-6">
    //                                 <div className="flex space-x-4">
    //                                     {navigation.map((item) => (
    //                                         <Link key={item.name} to={item.href} className={classNames(
    //                                             item.current ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
    //                                             'px-3 py-2 rounded-md text-sm font-medium'
    //                                         )} aria-current={item.current ? 'page' : undefined}> {item.name} </Link>
    //                                     ))}
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //                             <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
    //                                 <span className="sr-only">View notifications</span>
    //                                 <BellIcon className="h-6 w-6" aria-hidden="true" />
    //                             </button>

    //                             {/* Profile dropdown */}
    //                             <Menu as="div" className="ml-3 relative">
    //                                 {({ open }) => (
    //                                     <>
    //                                         <div>
    //                                             <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
    //                                                 <span className="sr-only">Open user menu</span>
    //                                                 <img
    //                                                     className="h-8 w-8 rounded-full"
    //                                                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //                                                     alt=""
    //                                                 />
    //                                             </Menu.Button>
    //                                         </div>
    //                                         <Transition
    //                                             show={open}
    //                                             as={Fragment}
    //                                             enter="transition ease-out duration-100"
    //                                             enterFrom="transform opacity-0 scale-95"
    //                                             enterTo="transform opacity-100 scale-100"
    //                                             leave="transition ease-in duration-75"
    //                                             leaveFrom="transform opacity-100 scale-100"
    //                                             leaveTo="transform opacity-0 scale-95"
    //                                         >
    //                                             <Menu.Items
    //                                                 static
    //                                                 className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    //                                             >
    //                                                 <Menu.Item>
    //                                                     {({ active }) => (
    //                                                         <a
    //                                                             href="/dashboard"
    //                                                             className={classNames(
    //                                                                 active ? 'bg-gray-100' : '',
    //                                                                 'block px-4 py-2 text-sm text-gray-700'
    //                                                             )}
    //                                                         >
    //                                                             Your Profile
    //                                                         </a>
    //                                                     )}
    //                                                 </Menu.Item>
    //                                                 <Menu.Item>
    //                                                     {({ active }) => (
    //                                                         <a
    //                                                             href="/dashboard"
    //                                                             className={classNames(
    //                                                                 active ? 'bg-gray-100' : '',
    //                                                                 'block px-4 py-2 text-sm text-gray-700'
    //                                                             )}
    //                                                         >
    //                                                             Settings
    //                                                         </a>
    //                                                     )}
    //                                                 </Menu.Item>
    //                                                 <Menu.Item>
    //                                                     {({ active }) => (
    //                                                         <div onClick={handleLogout} className={classNames(
    //                                                             active ? 'bg-gray-100' : '',
    //                                                             'block px-4 py-2 text-sm text-gray-700'
    //                                                         )}>
    //                                                             Sign out
    //                                                         </div>
    //                                                     )}
    //                                                 </Menu.Item>
    //                                             </Menu.Items>
    //                                         </Transition>
    //                                     </>
    //                                 )}
    //                             </Menu>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <Disclosure.Panel className="sm:hidden">
    //                     <div className="px-2 pt-2 pb-3 space-y-1">
    //                         {navigation.map((item) => (
    //                             <a
    //                                 key={item.name}
    //                                 href={item.href}
    //                                 className={classNames(
    //                                     item.current ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
    //                                     'block px-3 py-2 rounded-md text-base font-medium'
    //                                 )}
    //                                 aria-current={item.current ? 'page' : undefined}
    //                             >
    //                                 {item.name}
    //                             </a>
    //                         ))}
    //                     </div>
    //                 </Disclosure.Panel>
    //             </>
    //         )}
    //     </Disclosure>
  );
};

export default Navbar;
