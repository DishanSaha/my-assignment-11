import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

export default function HomeLayout() {



    return (
        <div>
            <header>
                <Navbar />
            </header>
            <section>
                <Outlet />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
