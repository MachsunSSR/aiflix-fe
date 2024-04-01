import React, { useState } from 'react';
import Sidebar from '../../components/user/Sidebar';
import ChatBox from '../../components/user/ChatBox';
import Insta from '../../components/user/Insta';
import ChartComponent from '../../components/user/Chart';
import CalenderRunning from '../../components/user/CalenderRunning';
import LogDisplay from '../../components/user/Table';
import Started from '../../components/Header/Started';

const User = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`bg-black h flex ${isSidebarOpen ? 'overflow-' : 'overflow-x-hidden'}`}>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`w-full ${isSidebarOpen ? 'ml-40' : 'ml-0'} transition-all  duration-300 ease-in-out`}>
                <div className='w-10/12 mx-auto flex space-x-3 pt-5'>
                    <div className='w-[55%]'>
                        <ChatBox />
                    </div>
                    <div className='w-[45%]'>
                        <Insta />
                        <ChartComponent/>
                        <CalenderRunning/>
                    </div>
                </div>
                <LogDisplay/>
            </div>
        </div>
    );
}

export default User;
