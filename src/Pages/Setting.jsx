import React from 'react'
import Navbar from '../Component/Navbar'
import Settingdashboard from '../Component/Settingdashboard'
import Footer from '../Component/Footer'
import AdminDashboard from './AdminDashboard'
import Others from '../Component/Others'

const Setting = () => {
  return (
    <div>
        <Navbar/>
        <Settingdashboard/>
        <Others/>
        <Footer/>
    </div>
  )
}

export default Setting