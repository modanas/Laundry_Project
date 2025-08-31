import React from "react";

const services = [
  {
    name: "Wash & Fold",
    price: "₹50 / kg",
    delivery: "2 Days",
    description: "Washed, dried, and neatly folded.",
    image: "/public/s1.jpg",
  },
  {
    name: "Dry Cleaning",
    price: "₹100 / item",
    delivery: "3 Days",
    description: "Dry cleaning for delicate or formal garments.",
    image: "/public/s2.jpg",
  },
  {
    name: "Ironing",
    price: "₹10 / item",
    delivery: "2 Day",
    description: "Steam-pressed, wrinkle-free clothes.",
    image: "/public/s3.jpg",
  },
  {
    name: "Car Washing",
    price: "₹150 / vehicle",
    delivery: "Same Day",
    description: "Exterior and interior car wash service.",
    image: "/public/s4.jpg",
  },
    {
    name: "Carpet & Rug Cleaning",
    price: "₹150 / item",
    delivery: "8 Day",
    description: "Deep cleaning for home carpets, mats, and rugs",
    image: "/public/s5.jpg",
  },
    {
    name: "Shoe Cleaning & Polishing",
    price: "₹150 / item",
    delivery: "Same Day",
    description: "Sneakers, formal shoes, and sports shoes cleaned professionally",
    image: "/public/s6.jpg",
  },
    {
    name: "Bag & Luggage Cleaning",
    price: "₹250 /item" ,
    delivery: "6 Day",
    description: "Trolley bags, backpacks, and handbags cleaned and refreshed.",
    image: "/public/s7.jpg",
  },
      {
    name: "Sofa & Upholstery Cleaning",
    price: "₹150 / item",
    delivery: "8 Day",
    description: "Deep cleaning for sofas, chairs, and cushions.",
    image: "/public/s8.jpg",
  },    {
    name: "Curtain Cleaning",
    price: "₹50 / item",
    delivery: "1 Day",
    description: "Dry or wet cleaning of window curtains and drapes.",
    image: "/public/s9.jpg",
  },
];


const LaundryServices = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen py-16 px-8"
      style={{ backgroundImage: "url('/public/about2.jpg')" }}
    >
      <h2 className="text-4xl font- text-black-400 text-center mb-12">
        Our Laundry Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <img src={service.image} alt={service.name} className="h-full object-cover w-full" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-blue-800 mb-1">
                {service.name}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{service.description}</p>
              <p className="text-blue-700 font-medium">{service.price}</p>
              <p className="text-sm text-gray-400">Delivery: {service.delivery}</p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full animate-bounce hover:bg-blue-700 transition-all">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaundryServices;
