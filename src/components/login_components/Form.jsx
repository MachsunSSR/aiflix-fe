import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
    return (
        <div>
            <h1 className='text-white font-bold text-left text-4xl py-3 '>Login</h1>

            <div className='space-y-5'>
                <input type="text" placeholder='Username' className='p-4  border border-[#750CE1] bg-black rounded-lg w-full text-white' />
                <input type="text" placeholder='Password' className='p-4 border border-[#750CE1] bg-black rounded-lg  w-full text-white' />
                <Link className='mt-2' to='/admin/user'>
                    <button className='bg-[#750CE1] text-white font-semibold w-full mt-4 py-4 rounded-lg' >
                        Login
                    </button></Link>
                <h1 className='text-white text-sm text-right'>Forgot Password</h1>
            </div>
        </div>
    )
}

export default Form
