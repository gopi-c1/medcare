import React from 'react'
import './SubNavbar.css'

const SubNavbar = () => {
  return ( 
    <div className='SubNavbar'>
      <ul className='SubNav-list'>
        <li><a href="/AllMedicinesPage">Order Medicine</a></li>
        <li><a href="/ProductsPage"></a>More Product</li>
        <li><a href="/MedicalStoresPage">Medical stores</a></li>
        <li> <a href="/PrescriptionPage">Order with</a></li>
        <li><a href='/DoctorAppointmentsPage'>Doctor Consultation</a></li>
        <li><a href="/Labs">Labs</a></li>
        <li><a href="/BloodPage">Blood Bank</a></li>
        <li><a href="/DietPlan">Diet Plan</a></li>  
      </ul>
    </div>
  )
}

export default SubNavbar
