import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import NavbarAdmin from './_componants/Navbar'
export default function AdminTemplate() {
    if(!localStorage.getItem("UserAdmin")){
        return <Navigate replace to="/admin/login" />
    }
    return (
            <div>
                <NavbarAdmin />
                <Outlet />
            </div>
    )
}
