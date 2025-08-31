import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // for animation


const SERVICE_PRICES = {
  "Wash & Fold": 20,
  "Dry Cleaning": 40,
  "Ironing": 10,
  "Curtains & Bedding": 50,
  "Stain Removal": 30,
  "Pickup & Delivery": 0,
};

export default function BookNow() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    quantity: 1,
    date: "",
    time: "",
    address: "",
  });

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const pricePerItem = SERVICE_PRICES[formData.service] || 0;
    const qty = parseInt(formData.quantity) || 0;
    setTotalCost(pricePerItem * qty);
  }, [formData.service, formData.quantity]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Laundry booked successfully!\nTotal Cost: ₹${totalCost}`);
    console.log("Booking Data:", formData);

    // Reset form
    setFormData({
      name: "",
      phone: "",
      service: "",
      quantity: 1,
      date: "",
      time: "",
      address: "",
    });
    setTotalCost(0);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-16"
      style={{ backgroundImage: "url('/s2.jpg')" }}
    >
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white bg-opacity-90 shadow-2xl rounded-xl p-8 w-full max-w-3xl space-y-6 backdrop-blur-sm"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-700 mb-2">
          Book a Laundry Service
        </h2>
        <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded mb-6" />

        {/* Name */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Service */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Select Service</label>
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Choose a service --</option>
            {Object.entries(SERVICE_PRICES).map(([service, price]) => (
              <option key={service} value={service}>
                {service} (₹{price}/item)
              </option>
            ))}
          </select>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Number of Items</label>
          <input
            type="number"
            name="quantity"
            min="1"
            required
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g. 3"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Date & Time */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Preferred Date</label>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Preferred Time</label>
            <input
              type="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Address</label>
          <textarea
            name="address"
            required
            rows="3"
            value={formData.address}
            onChange={handleChange}
            placeholder="Street address, city, pincode"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Total */}
        <div className="text-xl font-bold text-blue-600 text-center">
          Total Cost: ₹{totalCost}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-md transition duration-300 shadow-md"
        >
          Confirm Booking
        </button>
      </motion.form>
    </div>
  );
}
