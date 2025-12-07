import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-black text-primary">
            <div className="max-w-7xl mx-auto px-4 py-10">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

                    {/* Logo & Description */}
                    <div className="flex flex-col gap-4">
                        <Link to='/'>
                            <Logo />
                        </Link>
                        <p className="font-semibold max-w-sm">
                            TexTrack is your go-to Garments Order & Production Tracker System,
                            helping factories manage orders, production, and inventory efficiently.
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold text-[#9B5DE0]">Useful Links</h2>
                        <ul className="flex font-semibold flex-col gap-2">
                            <li><a href="/" className="hover:text-gray-300">Home</a></li>
                            <li><a href="/products" className="hover:text-gray-300">Products</a></li>
                            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
                            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold text-[#9B5DE0]">Contact</h2>
                        <p className="font-semibold">Email: support@textrack.com</p>
                        <p className="font-semibold">Phone: +880 123 456 789</p>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-2">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#9B5DE0]">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#9B5DE0]">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#9B5DE0]">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#9B5DE0]">
                                <FaLinkedinIn size={20} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t font-semibold border-gray-900 pt-4 text-center  text-sm">
                    &copy; {new Date().getFullYear()} TexTrack. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
