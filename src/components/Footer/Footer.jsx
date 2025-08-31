import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-sky-100 border-t border-gray-200">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-8 lg:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          
          {/* Resources */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
            <ul className="text-gray-700 font-medium space-y-2">
              <li>
                <Link to="/" className="hover:text-black transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-black transition">About</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Contact</h2>
            <ul className="text-gray-700 font-medium space-y-3">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>Sealdah, Kolkata - 15</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-600" />
                <span>ourservice@laundry.com</span>
              </li>
            </ul>
          </div>

       

          {/* Follow Us */}
          <div>
  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
  <ul className="text-gray-700 font-medium space-y-3">
    
    <li className="flex items-center gap-2">
      <FaFacebook className="text-blue-600 text-lg" />
      <a
        href="https://www.facebook.com/login"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-900 transition"
      >
        Facebook
      </a>
    </li>

  <li className="flex items-center gap-2">
  <svg className="w-5 h-5" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.5-34.1-4.4-50.4H272v95.4h146.9c-6.4 34.8-25.2 64.3-53.8 84l86.9 67.3c50.7-46.8 81.5-115.9 81.5-196.3z"/>
    <path fill="#34A853" d="M272 544.3c72.6 0 133.6-24.1 178.2-65.5l-86.9-67.3c-24.1 16.2-55 25.8-91.3 25.8-70.2 0-129.6-47.4-150.8-111.3H32.5v69.8c44.6 88 135.4 148.5 239.5 148.5z"/>
    <path fill="#FBBC05" d="M121.2 325.9c-10.3-30.8-10.3-63.8 0-94.6v-69.8H32.5c-43.5 86.9-43.5 189.4 0 276.3l88.7-69.8z"/>
    <path fill="#EA4335" d="M272 107.7c39.5 0 75.1 13.6 103.2 40.2l77.4-77.4C405.6 24.1 344.6 0 272 0 167.9 0 77.1 60.5 32.5 148.5l88.7 69.8C142.4 155.1 201.8 107.7 272 107.7z"/>
  </svg>
  <a
    href="https://accounts.google.com/signin"
    target="_blank"
    rel="noreferrer"
    className="hover:text-blue-700 transition"
  >
    Google
  </a>
</li>


  </ul>
</div>
    {/* Gallery */}
   <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Gallery</h2>
            <div className="grid grid-cols-3 gap-2">
                           <img src="/public/s3.jpg" alt="" className="h-16 w-full object-cover rounded-md" />
              <img src="/public/s4.jpg" alt="" className="h-16 w-full object-cover rounded-md" />
              <img src="/public/s5.jpg" alt="" className="h-16 w-full object-cover rounded-md" />
              <img src="/public/s6.jpg" alt="" className="h-16 w-full object-cover rounded-md" />
              <img src="/public/s7.jpg" alt="" className="h-16 w-full object-cover rounded-md" />
              <img src="/public/s8.jpg" alt="" className="h-16 w-full object-cover rounded-md" />

            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center items-center lg:justify-end">
            <Link to="/" className="flex items-center">
              <img src="/logo2.png" className="h-20 object-contain" alt="Laundry Logo" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />

        {/* Footer Bottom */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-blue-900 sm:text-center ml-[40%]">
            © 2025 <a href="#" className="hover:text-blue-900 font-medium ml-1">Laundry Services</a>. All Rights Reserved.
          </span>

   
        </div>
      </div>
    </footer>
  );
}
