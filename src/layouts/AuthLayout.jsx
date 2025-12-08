import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

export default function AuthLayout() {
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    )
}
