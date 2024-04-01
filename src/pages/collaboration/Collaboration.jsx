import React from 'react'
import OpenCollab from '../../components/collaboration/OpenCollab'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Collaboration = () => {
    return (
        <div className='bg-black h-full'>
            <NavBar/>
            <OpenCollab />
            <Footer/>
        </div>
    )
}

export default Collaboration
