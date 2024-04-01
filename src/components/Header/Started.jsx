import React from 'react'
import img1 from './image/get-started-icon-frame.png'
import img2 from './image/get-started-icon-frame (1).png'
import img3 from './image/get-started-icon-frame (2).png'
const Started = () => {
    return (
        <div className='w-4/5 mx-auto mt-10 text-white pb-10'>
            <div className='lg:flex justify-between mt-5 lg:mt-0'>
                <div>
                    <h1 className='text-white font-bold'>How To Get Started</h1>
                    <p className='my-3'>not all businesses can join us,<br />
                        we will check it through some verification</p>
                    <button className='p-2 bg-[#750CE1] text-white rounded-lg'>Join the waitlist</button>
                </div>
                <div className='font-[Raleway] lg:w-1/2 mt-5 lg:mt-0'>
                    <div className='flex space-x-5 items-center justify-between   bg-[#090412] rounded-lg p-2'>
                        <img clas src={img1} alt="" />
                        <div>
                            <h1 className='font-semibold'>Enter Information</h1>
                            <p className='lg:w-3/4'>We need information to be filled br in for our verification data.</p>
                        </div>
                    </div>
                    <div className='flex mt-3 space-x-5 items-center justify-between   bg-[#090412] rounded-lg p-2'>
                        <img src={img2} alt="" />
                        <div>
                            <h1 className='font-semibold'>Data Verification</h1>
                            <p className='lg:w-3/4'>The data that has been sent will go through a verification check stage</p>
                        </div>
                    </div>
                    <div className='flex mt-3 space-x-5 items-center justify-between   bg-[#090412] rounded-lg p-2'>
                        <img src={img3} alt="" />
                        <div>
                            <h1 className='font-semibold'>Enter Information</h1>
                            <p className='lg:w-3/4'>We will send the verification results to your email in approximately 5 - 7 working days</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Started
