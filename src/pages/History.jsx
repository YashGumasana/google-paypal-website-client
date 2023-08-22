import React from 'react'
import Header from '../components/Header'
import HistoryTable from '../components/HistoryTable'

function History() {
    return (
        <div>
            <Header />
            {/* <div className='mt-[200px]'> */}
            <HistoryTable />

            {/* </div> */}
        </div>
    )
}

export default History
