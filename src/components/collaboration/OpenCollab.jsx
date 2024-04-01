import React from 'react'
import img1 from './image/Group 18415.png'
import img2 from './image/Group 18416.png'
import img3 from './image/Group 18417.png'
import img4 from './image/Group 18418.png'
const OpenCollab = () => {
    return (
        <div className='lg:h-screen pt-32 pb-5 flex text-center justify-center w-4/5 mx-auto items-center text-white'>
            <div>
                <h1 className='font-semibold text-2xl'>OPEN COLLABORATION</h1>
                <p className='font-thin'>We are opening a collaboration program by offering several special features and benefits</p>
                <div className='lg:flex lg:space-x-10 space-y-5 lg:space-y-0 mt-20'>
                    <div className='lg:w-1/4 '>
                        <img className='mx-auto' src={img1} alt="" />
                        <h1 className='font-bold'>Collab Our Technologies</h1>
                        <p className='text-sm font-thin'>Collaboration in the form of technology, for example: algorithm research, technological facilities, or others</p>
                    </div>
                    <div className='lg:w-1/4 '>
                        <img className='mx-auto' src={img2} alt="" />
                        <h1 className='font-bold'>Collab Our Business</h1>
                        <p className='text-sm font-thin'>Collaboration in the form of technology, for example: algorithm research, technological facilities, or others</p>
                    </div>
                    <div className='lg:w-1/4 '>
                        <img className='mx-auto' src={img3} alt="" />
                        <h1 className='font-bold'>Affiliate</h1>
                        <p className='text-sm font-thin'>Collaboration in the form of technology, for example: algorithm research, technological facilities, or others</p>
                    </div>
                    <div className='lg:w-1/4 '>
                        <img className='mx-auto' src={img4} alt="" />
                        <h1 className='font-bold'>Investment Fund</h1>
                        <p className='text-sm font-thin'>Collaboration in the form of technology, for example: algorithm research, technological facilities, or others</p>
                    </div>
                </div>
                <div className='flex justify-between mt-20 w-10/12 mx-auto'>
                    <div className='text-left'>
                        <h1 className='font-semibold'>Collaboration Now?</h1>
                        <p className='font-thin'>We will verify your collaboration request in stages</p>
                    </div>
                    <div>
                        <button className='p-2 bg-[#750CE1] rounded-lg'>Collab now</button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default OpenCollab
