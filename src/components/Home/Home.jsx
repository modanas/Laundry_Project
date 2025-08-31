import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTshirt, FaSoap, FaTruck, FaSprayCan } from "react-icons/fa";

const services = [
  {
    icon: <FaTshirt />,
    title: "Clothes Washing",
    description: "Fresh and clean clothes with premium detergents.",
    color: "bg-blue-500",
  },
  {
    icon: <FaSoap />,
    title: "Dry Cleaning",
    description: "Gentle treatment for your delicate fabrics.",
    color: "bg-purple-500",
  },
  {
    icon: <FaSprayCan />,
    title: "Sanitization",
    description: "Keep your clothes germ-free and fresh.",
    color: "bg-green-500",
  },
  {
    icon: <FaTruck />,
    title: "Pickup & Delivery",
    description: "Doorstep service, fast and on time.",
    color: "bg-orange-500",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-60 bg-[url('/h1.png')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="w-1/3 h-full flex items-center justify-center p-6">
            <div className="text-center">
              <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4">Home</h2>
              <p className="text-white text-lg font-semibold leading-snug">YOUR LAUNDRY, OUR PRIORITY</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-3 bg-[url('/')] bg-cover bg-center py-16 px-14">
        <div className="bg-white/100 max-w-3xl mx-auto text-center p-16 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">What We Offer</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Laundry is more than just washing clothes — it's about maintaining the quality, hygiene, and appearance of your garments...
            <p>In today’s fast-paced life, time is precious. Our modern laundry service offers the perfect solution with doorstep pickup, expert cleaning, and on-time delivery. No more laundry piles or wasted weekends—just fresh, clean clothes without the effort. With us, laundry day is no longer a chore.
              <br />
              <br />
              <p className="text-gray-600 text-sm font-semibold">
                Experience the convenience and quality of our laundry service. Let us take care of your laundry needs, ensuring your clothes are cleaned, sorted, and ready for you to wear.
           </p>
            </p>
          </p>
        </div>
     

      {/* Services Section */}
      <section className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all cursor-pointer border border-gray-200 text-white ${service.color}`}
          >
            <div className="text-4xl mb-3">{service.icon}</div>
            <h3 className="text-xl font-bold mb-1">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </section>

      {/* About Us Section */}
      <section className="mt-16 px-6 text-center">
        <div className="bg-white/100 max-w-3xl mx-auto text-center p-16 rounded-xl shadow-lg">
         <h2 className="text-3xl font-bold text-blue-900 mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-10">
          At CleanWave Laundry, we combine technology with tradition to deliver exceptional laundry services. Our experienced team ensures each item is handled with the utmost care. With eco-friendly processes and timely services, your satisfaction is our priority.
        </p>
        </div>

        {/* Animated Image Grid */}
        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["/s6.jpg", "/s2.jpg", "/s9.jpg", "/s8.jpg", "/s3.jpg", "/s7.jpg"].map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>
      <div className="mt-10 flex justify-center">
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Link
      to="/services"
      className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300"
    >
      Get Started 
    </Link>
  </motion.div>
</div>


      {/* Floating Video */}
      <div className="fixed bottom-4 right-4 w-40 h-24 shadow-lg rounded-lg overflow-hidden z-50">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/L1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
       </section>
    </>
  );
}
