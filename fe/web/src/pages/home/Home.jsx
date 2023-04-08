import React from 'react'
import logo from "../../img/png/logo-white.png"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="relative flex flex-col content-around  bg-gradient-to-r from-[#06ef68] from-0% to-[#3758d1] to-100% w-[100%] h-[100vh]">
      <div className='relative flex flex-row-reverse items-center w-[100%] h-[5vh] bg-[#00000050]'>
        <ul className="relative flex flex-row align-center mr-[5vw] text-white">
          <Link className="relative flex flex-row justify-center align-center ml-[1.5vw] mr-[1.5vw] hover:bg-[#00000070] h-[5vh]" to="/login">
            <li>Login</li>
          </Link>
          <Link className="relative ml-[1.5vw] mr-[1.5vw]" to="/about">
            <li>About Us</li>
          </Link>
          <Link className="relative ml-[1.5vw] mr-[1.5vw]" to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className='relative flex flex-col h-[50vh]'>
        <div className='relative max-w-[30vw]'>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className='relative'>
        <input type="text" placeholder='How can I help?'/>
      </div>
    </div>
  )
}

export default Home