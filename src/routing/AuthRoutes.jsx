import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../pages/Index'
import History from '../pages/History'
import Payment from '../pages/Payment'
import About from '../pages/About'
import Setting from '../pages/Setting'
import PayPalSubscriptionButton from '../components/plan/BasicPlan'


function AuthRoutes() {
    return (

        <Routes >
            <Route path='' element={<Index />} />
            <Route path='payment' element={<Payment />} />
            <Route path='about' element={<About />} />
            <Route path='history' element={<History />} />
            <Route path='setting' element={<Setting />} />

        </Routes>
    )
}

export default AuthRoutes
