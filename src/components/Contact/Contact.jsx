import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: '',
    address: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, message, address } = form;

    if (!name || !phone || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    const whatsappLink = `https://wa.me/8272923791?text=${encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nMessage: ${message}\nAddress: ${address}`
    )}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-10"
      style={{
        backgroundImage: "url('/contactu.jpg')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white/30 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/40 w-full max-w-2xl"
      >
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Contact Us</h1>

        {/* Form Fields */}
        <div className="space-y-5 text-gray-700">
          <div>
            <label htmlFor="name" className="font-semibold block mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              required
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="font-semibold block mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              required
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your mobile number"
            />
          </div>

          <div>
            <label htmlFor="message" className="font-semibold block mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <div>
            <label htmlFor="address" className="font-semibold block mb-1">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              value={form.address}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Your current address (optional)"
            />
          </div>
        </div>

        {/* WhatsApp Send Button */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Send Message on WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
}
