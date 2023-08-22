import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../pages/Index'
import Payment from '../pages/Payment'
import History from '../pages/History'

function PrivateRoutes() {

    return (
        <Routes>
            <Route path='' element={<Index />} />
            <Route path='payment' element={<Payment />} />
        </Routes>
    )
}

export default PrivateRoutes
