// src/components/SignUpForm.jsx
import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SignUpForm = () => {
  const [form, setForm] = useState({
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { mobile, email, password, confirmPassword } = form;

    if (!mobile || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate API call or logic here
    console.log("Form submitted:", form);
    alert("Signed up successfully!");
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-blue-400 to-indigo-800 bg-[url('/public/sing.jpg')] bg-blend-overlay bg-cover bg-center flex items-center justify-center px-4">
  {/* Your content */}


 <motion.div className={styles.container} initial={{ opacity:0, y:30 }}
  animate={{ opacity:1, y:0 }} transition={{ duration: 0.5 }}>
  <form className={styles.form} onSubmit={handleSubmit}>
    <h2>Sign Up</h2>
    {error && <div className={styles.error}>{error}</div>}
    <input name="mobile" placeholder="Mobile Number" value={form.mobile} onChange={handleChange} required />
    <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} required />
    <input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} required />
    <input name="confirmPassword" placeholder="Confirm Password" type="password" value={form.confirmPassword} onChange={handleChange} required />

    <motion.button whileHover={{ scale:1.05 }} whileTap={{ scale:0.98 }}
      className={styles.button} type="submit">
      Sign Up
    </motion.button>

      <p className="mt-4 text-sm text-center text-black ">
  Already have an account?
  <a
    href="/login"
    className="text-blue hover:underline ml-1 transition-all duration-100"
  >
    login here
  </a>
</p>


    <div className={styles.divider}>or</div>

    <div className={styles.socialButtons}>
      <a href="..." className={`${styles.social} ${styles.google}`} target="_blank" rel="noopener noreferrer">
        <FaGoogle /> Sign in with Google
      </a>
      <a href="..." className={`${styles.social} ${styles.facebook}`} target="_blank" rel="noopener noreferrer">
        <FaFacebook /> Sign in with Facebook
      </a>
    </div>
  </form>
</motion.div>
</div>
  );
};


export default SignUpForm;
