import React from 'react'
import Form from '../../components/login_components/Form'
import SyaratKetentuan from '../../components/login_components/SyaratKetentuan'

const Login = () => {
    return (
        <div className='text-center text-2xl bg-black  '>
            <div className='lg:flex flex-row-reverse lg:space-x-10 pb-10 lg:w-4/5 w-11/12 mx-auto'>
                <div className='lg:w-3/5 pt-10 '>
                    <SyaratKetentuan />
                </div>
                <div className='lg:w-2/5 lg:pr-5 items-center lg:h-screen lg:flex'>
                    <Form />
                </div>

            </div>
        </div>
    )
}

export default Login
