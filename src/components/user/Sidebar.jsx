import React, { useState, useEffect } from 'react';
import { FiMenu, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen);

    useEffect(() => {
        setIsSidebarOpen(isOpen);
    }, [isOpen]);

    const handleToggleSidebar = () => {
        toggleSidebar();
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`sidebar bg-[#222222] w-64 text-black fixed top-0 left-0 h-full flex flex-col justify-between transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-52'}`}>
            <div className="logo py-4 px-6 text-lg font-bold">
                <h1 className='bg-gradient-to-r font-semibold from-purple-900 to-white text-transparent bg-clip-text lg:text-2xl'>AI.FLIX</h1>
            </div>
            <div className="menu-toggle absolute top-4 right-4 cursor-pointer" onClick={handleToggleSidebar}>
                <FiMenu className="text-2xl text-[#750CE1]" />
            </div>
            <ul className={`menu px-4 ${isSidebarOpen ? 'block' : 'hidden'}`}>
                <li className="flex items-center py-2 text-[#750CE1]">
                    <FiUser className="mr-2" />
                    Profile
                </li>
                <li className="flex items-center py-2 text-[#750CE1]">
                    <FiSettings className="mr-2" />
                    Settings
                </li>
                <li className="flex items-center py-2 text-[#750CE1]">
                    <FiLogOut className="mr-2" />
                    Logout
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
