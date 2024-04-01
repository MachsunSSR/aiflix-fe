import React from 'react'
import logo from '../navbar/image/AI.FLIX.png'
import SosialMedia from './SosialMedia'
const Footer = () => {
    return (
        <div className='bg-black border-t-2'>
            <div className='flex w-4/5 mx-auto'>
                <div className='w-4/5 mx-auto py-10'>
                    <div className='w-1/3'>
                        <img width={100} src={logo} alt="" />
                        <p className='mt-5 text-white '>AI.FLIX is a company that focuses on developing AI digital marketing solutions. Founded in early 2020.</p>
                        <SosialMedia />
                        <p className='text-gray-500 mt-6'>Manage by PT Reetech Digital Kreasi</p>
                    </div>
                </div>
                <div className='flex space-x-10' >
                    <div className='text-white'>
                        <h1 className='my-5'>Why AI.FLIX</h1>
                        <h1 className='my-5 text-gray-500'>Our Client</h1>
                        <h1 className='my-5 text-gray-500'>Help</h1>

                    </div>
                    <div className='text-white'>
                        <h1 className='my-5'>Why AI.FLIX</h1>
                        <h1 className='my-5 text-gray-500'>Our Client</h1>
                        <h1 className='my-5 text-gray-500'>Help</h1>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
