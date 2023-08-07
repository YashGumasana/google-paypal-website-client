import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../pages/Index'
import Payment from '../pages/Payment'
import Test from '../pages/Test'

function PrivateRoutes() {

    return (
        <Routes>
            <Route path='' element={<Index />} />
            <Route path='payment' element={<Payment />} />
            <Route path='test' element={<Test />} />
        </Routes>
    )
}

export default PrivateRoutes
