/** @format */

import Logo from './image/AI.FLIX.png';
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown, FiChevronLeft, FiChevronUp } from "react-icons/fi";
export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [showInfoDropdown, setShowInfoDropdown] = useState(false);
    const navItems = [
        { text: "Home", path: "/" },
        { text: "About Us", path: "/about" },
        { text: "Collaboration", path: "/colaboration",  class: "daftar" },
    ];

    return (
        <nav className="fixed top-0 flex  w-full z-20   rounded-2xl mt-7  ">
            <div className="mx-auto md:px-10 px-5 w-4/5  bg-white rounded-full bg-opacity-10  lg:w-[75%]  items-center justify-center md:items-center lg:justify-between lg:flex h-16  ">
                <div className="">
                    <div className="flex lg:justify-start  justify-between items-center py-3 sm:py-5 ">
                        <Link to="/">
                            <img
                                src={Logo}
                                width={70}
                                alt=""
                            />
                        </Link>
                        <div className="lg:hidden  ">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={` flex-1 rounded-b-3xl p-2  justify-self-center pb-3  lg:block    lg:pb-0 lg:mt-0 ${navbar ? "block  " : "hidden "
                            }`}
                    >
                        <ul className="lg:ml-2 md:ml-5 items-center justify-center lg:w-full w-80 text-left space-y-6 lg:flex lg:space-x-14 lg:space-y-0">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    {item.subMenu ? (
                                        <div className="relative">
                                            <span
                                                className="text-white space-x-5 flex items-center  font-semibold hover:text-[#13A89E] font-['Poppins',sans-serif] cursor-pointer"
                                                onClick={() => setShowInfoDropdown(!showInfoDropdown)}
                                            >
                                                {item.text}
                                            </span>

                                        </div>
                                    ) : (
                                        <NavLink
                                            to={item.path}
                                            exact={true}
                                            target={item.target}
                                            activeClassName={item.path === "/" ? "active" : ""}
                                            className={`text-white font-medium hover:text-[#13A89E] font-['Poppins',sans-serif] ${item.class} ${index === 1 ? "border-b-orange-400" : ""}`}
                                        >
                                            {item.text}
                                        </NavLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
NavBar.propTypes = {};
