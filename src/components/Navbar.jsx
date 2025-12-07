import React from "react";
import { Link } from "react-router";
import Logo from "./Logo";

export default function Navbar() {
    const navLinks = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-md lg:px-8">
            {/* LEFT — LOGO */}
            <div className="navbar-start">
                {/* Mobile Menu Button */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>

                    {/* Mobile Dropdown Menu */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks}
                    </ul>
                </div>

                {/* Logo---- */}
                <Logo/>
            </div>

            {/* CENTER — Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>

            {/* RIGHT — empty or future icons */}
            <div className="navbar-end flex lg:flex-row lg:gap-2">
                {/* Login button — visible everywhere */}
                <button className="btn btn-primary lg:w-auto">
                    Login
                </button>

                {/* Register button — hidden on mobile, visible on tablet and desktop */}
                <button className="btn btn-secondary hidden md:inline-flex lg:w-auto">
                    Register
                </button>
            </div>



        </div>
    );
}
