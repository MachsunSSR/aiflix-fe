import React from 'react'
import NavBar from '../../components/navbar/Navbar'
import HeaderDashboard from '../../components/Header/HeaderDashboard'
import Collaboration from '../../components/Header/Collaboration'
import MarketSize from '../../components/Header/MarketSize'
import Started from '../../components/Header/Started'
import Footer from '../../components/footer/Footer'

const Home = () => {
    return (
        <div className='bg-black '>
            <NavBar />
            <HeaderDashboard />
            <Collaboration />
            <MarketSize />
            <Started />
            <Footer/>

        </div>
    )
}

export default Home
