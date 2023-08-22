import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { get_all_report_of_user } from '../redux/actions/user/ReportAction'

function HistoryTable() {
    const token = localStorage.getItem('eonToken')
    const dispatch = useDispatch()
    const statistics = useSelector(state => state.report.statistics)

    useEffect(() => {
        dispatch(get_all_report_of_user(token))
    }, [dispatch, token])

    return (
        <div className='mt-[20px]'>
            <div className="max-w-4xl mx-auto ">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-300 bg-white">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channel Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Analyze</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">viewCount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">subscriberCount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">videoCount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Analyze Time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            {statistics.map(data => (
                                <tr key={data.id}> {/* Make sure to provide a unique key */}
                                    <td className="px-6 py-4 md:whitespace-nowrap">{data.name}</td>
                                    <td className="px-6 py-4 md:whitespace-nowrap">{data.studentId}</td>
                                    <td className="px-6 py-4 md:whitespace-nowrap">{data.university}</td>
                                    <td className="px-6 py-4 md:whitespace-nowrap">{data.address}</td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>
            {/* </body> */}
        </div>

    )
}

export default HistoryTable
