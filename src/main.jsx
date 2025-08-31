import React from "react";
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import BookNow from "./components/Booknow/BookNow";
import LoginForm from "./components/Login/Login";
import SignUpForm from "./components/signup/signup";
import TestimonialCarousel from "./components/About/testimonial";
import AnimatedContent from "./components/Animations/AnimatedContent/AnimatedContent";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "services",
                element: <Services/> 
            },
            {
                path: "book",
                element: <BookNow/>   
            },
            {
                path: "Login",
                element: <LoginForm/>
            },
            {
                path: "signup",
                element: <SignUpForm/>
            },
            {
                path: "Animation",
                element: <AnimatedContent/>
            },
            //   {
            //     path: "Backgrounds",
            //     element: <Ballpit/>
            // }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
<RouterProvider router={router}/>
    </React.StrictMode>,
)