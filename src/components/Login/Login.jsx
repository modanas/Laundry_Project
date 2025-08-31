import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Handle authentication logic here
    console.log("Logging in with:", { email, password });
  };

  return (
<div className="min-h-screen w-full bg-[url('/public/login.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center px-4"
>  <div className="bg-white/20 backdrop-blur-md border border-blue-800 shadow-lg rounded-xl p-8 w-full max-w-md font-sans">
    <h2 className="text-3xl font-extrabold text-blue-900 mb-6 transition-all duration-100">
      Login to Laundry Services
    </h2>
    <form onSubmit={handleLogin} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-blue-900">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full px-4 py-2 bg-transparent text-blue-900 font-bold border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-100"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-blue-900">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full px-4 py-2 bg-transparent text-blue-900 font-bold border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-100"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md transform hover:scale-105 transition-all duration-100"
      >
        Login
      </button>
    </form>
    <p className="mt-4 text-sm text-center text-blue-900 font-bold">
      Don’t have an account?
      <a href="/signup" className="text-blue-900 hover:underline ml-1 transition-all duration-100">
        Signup here
      </a>
    </p>
  </div>
</div>



  );
}
