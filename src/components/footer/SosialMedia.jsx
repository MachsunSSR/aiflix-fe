import React from 'react'
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const SosialMedia = () => {
    return (
        <div className='flex space-x-5 items-center mt-5 text-white'>
            <FaInstagram size={20} />
            <FaFacebook size={20} />
            <TiSocialLinkedin size={20} />
        </div>
    )
}

export default SosialMedia
