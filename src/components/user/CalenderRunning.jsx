import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './css/calender.css'
const CalenderRunning = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    };

    return (
        <div className="bg-[#333333] p-2 mt-4 rounded-lg">
            <div className='flex space-x-4'>
                <div className='w'>
                    <h1 className='text-white'>Data Period</h1>
                    <Calendar
                        onChange={onChange}
                        value={date}
                        className="custom-calendar ]"
                    />
                </div>
                <div className='w-full'>
                    <h1 className='text-white'>Running Bot</h1>
                    <div className='p-2 bg-[#5A5A5A] rounded-lg w-full'>
                        <h1 className='text-sm text-white'>1 Jam 53 Menit</h1>
                        <div className="timeline w-full h-2 bg-white relative ">
                            <div className="timeline-bar absolute w-full top-0 left-0 h-full bg-purple-600" style={{ width: '21%' }}></div>
                        </div>
                    </div>
                    <div className='p-2 bg-[#5A5A5A] rounded-lg w-full mt-5'>
                        <h1 className='text-sm text-white'>20 hari 53 Menit</h1>
                        <div className="timeline w-full h-2 bg-white relative ">
                            <div className="timeline-bar absolute w-full top-0 left-0 h-full bg-purple-600" style={{ width: '81%' }}></div>
                        </div>
                    </div>
                    <div className='mt-4 text-white text-sm'>
                        <div className='flex justify-between'><h1>Total New View</h1> <p>100000</p></div>
                        <div className='flex justify-between'><h1>Total New View</h1> <p>100000</p></div>
                        <div className='flex justify-between'><h1>Total New View</h1> <p>100000</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalenderRunning;
