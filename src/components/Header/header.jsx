import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'; 
export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0 bg-skyblue transition duration-300">
      <nav className="border-b border-blue-200 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* LOGO */}
       <Link to="/" className="flex items-center gap-2 text-3xl font-extrabold text-blue-900 hover:text-sky-600 transition duration-300">
  <img src="/logo2.png" alt="Laundry Logo" className="h-12 w-12 object-contain" />

  <span className="text-600 font-serif">
    Laundry<span className="text-600 font-serif">Services</span>
  </span>
</Link>


          {/* BUTTONS */}
          <div className="flex items-center lg:order-2">
            
      

<Link
  to="/login"
  className="flex items-center gap-2 text-gray-800 hover:brightness-110 hover:from-sky-400 hover:to-sky-600 bg-gradient-to-r from-white to-white  transition-all duration-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
>
  <FaUser className="text-blue-700 text-lg" />
</Link>

          </div>
        {/* MOBILE MENU BUTTON */} 

          {/* NAV LINKS */}
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 transform -translate-x-[10%]">
  <ul className="flex flex-col mt-4 font-[Poppins] font-semibold tracking-wide text-lg lg:flex-row lg:space-x-10 lg:mt-0">
    {['/', '/about', '/services', '/contact'].map((path, index) => {
      const names = ['Home', 'About Us', 'Services', 'Contact Us']; 
      return (
        <li key={path}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 transition duration-300 ease-in-out
              lg:hover:bg-transparent lg:border-0 lg:p-0
              ${
                isActive
                  ? 'text-blue-900 font-bold'
                  : 'text-black-700'
              } 
              hover:text-blue-900 hover:tracking-widest`
            }
          >
            {names[index]}
          </NavLink>
        </li>
      );
    })}
  </ul>
</div>


        </div>
      </nav>
    </header>
  )
}
