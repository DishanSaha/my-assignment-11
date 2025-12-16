import React from "react";
import { FaBox, FaShoppingCart, FaUsers, FaUserCircle } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router";
import Logo from "../../components/Logo";

export default function Dashboard() {
    const navClass = ({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg ${isActive
            ? "bg-primary text-primary-content"
            : "hover:bg-base-300"
        }`;

    return (
        <div className="drawer lg:drawer-open min-h-screen">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

            {/* MAIN CONTENT */}
            <div className="drawer-content flex flex-col">
                {/* ===== NAVBAR ===== */}
                <nav className="navbar  bg-primary border-b px-4">
                    <div className="flex-none lg:hidden">
                        <label
                            htmlFor="dashboard-drawer"
                            className="btn-circle btn mx-1"
                        >
                            ☰
                        </label>
                    </div>

                    {/* Brand */}
                    <div className="flex-1">
                        <h1 className="text-2xl text-white font-bold">Admin Dashboard</h1>
                    </div>

                    {/* Right side */}
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <FaUserCircle size={22} />
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-44"
                            >
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/profile">Profile</Link></li>
                                <li><button className="text-error">Logout</button></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* PAGE CONTENT */}
                <div className="p-4 md:p-6">
                    <Outlet />
                </div>
            </div>

            {/* ===== SIDEBAR ===== */}
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                <aside className="w-64 bg-base-200 min-h-full">
                    <Link to="/" className="flex items-center gap-2 px-6 py-4">
                        <Logo />
                    </Link>

                    <ul className=" p-4 gap-2">
                        <li>
                            <NavLink to="users" className={navClass}>
                                <FaUsers /> Manage Users
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="products" className={navClass}>
                                <FaBox /> All Products
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="orders" className={navClass}>
                                <FaShoppingCart /> All Orders
                            </NavLink>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    );
}
