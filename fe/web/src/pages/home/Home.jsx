import React, { useState, useEffect } from 'react'
import logo from "../../img/png/logo-color.png"
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Milica from '../../components/Milica'

function Home() {
  const [token, setToken] = useState("");

  const getToken = () => {
    setToken(localStorage.getItem("token"));
  }

  useEffect(() => {
    getToken();
  }, [])

  return (
    <div className='bg-gradient-to-r from-[#06ef68] from-40% to-[#3758d1] to-100% scroll-smooth'>
      <Navbar />
      <div class="h-screen flex justify-center items-center px-6 py-12 md:px-12 text-[#2f4bb0] text-center lg:text-left bg-gradient-to-r from-[#06ef68] from-40% to-[#3758d1] to-100% bg-fixed">
        <div class="container mx-auto xl:px-32">
          <div class="grid lg:grid-cols-2 gap-12 flex items-center">
            <div class="mt-12 lg:mt-0">
              <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Problems with the budget? <br /><span class="text-gray-900">Fix it now!</span></h1>
              {!token && <a class="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Sign up</a>}              
              <a class="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-200 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#mihau" role="button">Try Milica</a>
            </div>
            <div class="mb-0">
              <img
                src={logo}
                class="w-full rounded-[20px] shadow-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Milica />
      </div>
    </div>
  )
}

export default Home