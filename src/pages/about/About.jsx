import React from 'react'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Header from '../../components/about/Header'
import Plan from '../../components/about/Plan'

const About = () => {
    return (
        <div className='bg-black  h-full'>
            <NavBar />
            <Header />
            <Plan/>
            <Footer />

        </div>
    )
}

export default About
