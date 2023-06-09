import React, {useEffect, useState} from 'react'
import logo from "../img/png/logo-icon-no-background.png"
import { Link } from "react-router-dom"
import MobileStoreButton from 'react-mobile-store-button';

function Navbar() {
    const [token, setToken] = useState("");
    const checkAuth = () => {
        let tkn = localStorage.getItem('token');
        setToken(tkn);
    }
    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = "/";
    }

    useEffect(() => {
        checkAuth()
    }) 
    return (
        <nav class="bg-white dark:bg-gray-700 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" class="flex items-center">
                    <img src={logo} class="w-12" alt="Flowbite Logo" />
                </Link>
                <div class="flex md:order-2">
                    <MobileStoreButton class="p-4" store="ios" url={'https://flutter.dev/'} linkProps={{ title: 'iOS Store Button' }}></MobileStoreButton>
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-700 md:dark:bg-gray-700 dark:border-gray-700">
                        {!token &&
                            <li>
                                <Link to="/login" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</Link>
                            </li> 
                        }
                        {!token &&
                            <li>
                                <Link to="/register" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Register</Link>
                            </li>
                        }
                        
                        {token && 
                            <li>
                                <Link to="/forum" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Forum</Link>
                            </li>
                        }
                        {token &&  
                            <li>
                                <Link to="/profile" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</Link>
                            </li>
                        }
                        <li>
                            <Link to="/subscriptions" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Subscriptions</Link>
                        </li>
                        {token &&  
                            <li>
                                <Link onClick={logout} to="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Logout</Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>

  )
}

export default Navbar