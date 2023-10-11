import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
    
  return (
    <div className={props.darkMode ? "dark" : ""}>
  <div className="px-10 md:px-20 lg:px-40 dark:bg-[#111111] border-b-2 border-gray-300 dark:border-dark-400 bg-gray-900 text-white">
    <nav className="py-10 flex justify-between ">
      <h1 className="text-xl font-burtons dark:text-white">
        <Link to="/"> Vroom Vroom Club </Link>
        </h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => props.setDarkMode(!props.darkMode)}
            className="cursor-pointer text-2xl dark:text-white"
          />
        </li>
        <li>
          {
            // props.isloggedIn ? <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-8 h-8 ml-8 overflow-hidden">
            // <img src="dev-ed-wave.png" alt="Dev Ed Wave" className="flex flex-col  absolute inset-0 object-cover w-full h-full"/>
            // </div>:
          
          <Link
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            to="/login"
          >
            Login
          </Link>
          }
        </li>
        <li>
          {props.isloggedIn? <button  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" onClick={()=> props.setIsLoggedIn(false)}>Logout</button>:
          
          <Link
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            to="/signup"
          >
            Signup
          </Link>
          }
        </li>
      </ul>
    </nav>
  </div>
</div>

  )
}

export default Navbar
