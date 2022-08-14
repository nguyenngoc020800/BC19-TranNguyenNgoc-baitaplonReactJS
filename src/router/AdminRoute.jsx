// import { isFulfilled } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from "react-redux"
import {Navigate} from "react-router-dom"
function AdminRoute( children) {
    const {user} = useSelector((state)=>state.auth)

    // if (!user || user.maLoaiNguoiDung !== "QuanTri") {
    //     // return <Navigate to="/not-found" replace={ true} />
    // }
  return children
}

export default AdminRoute