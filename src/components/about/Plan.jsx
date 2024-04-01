import React from 'react';
import p11 from './image/Group 18404.png';
import p12 from './image/Group 18405.png';
import p13 from './image/Group 18406.png';
import p21 from './image/phase2/Group 18407.png'
import p22 from './image/phase2/Group 18408.png'
import p23 from './image/phase2/Group 18409.png'
import p24 from './image/phase2/Group 18410.png'
import p25 from './image/phase2/Group 18411.png'
import p31 from './image/phase3/Group 18412.png'
import p32 from './image/phase3/Group 18413.png'
import p33 from './image/phase3/Group 18414.png'
import './style/divider.css'
const Divider = () => {
    return (
        <div className='w-full lg:flex h-1/2 items-center hidden '>
            --------------------------------------------------
        </div>
    );
};
const Divider2 = () => {
    return (
        <div className='w-full lg:flex h-1/2 items-center hidden '>
        </div>
    );
};

const Phasesatu = () => {
    return (
        <div className='flex  text-white h-80 text-sm'>
            <div className='w-1/2 '>
                <div className='flex'>
                    <img src={p11} alt="" />
                </div>
                <p>First launched across three continents: Australia, Europe, and North America</p>
            </div>
            <Divider />
            <div className='w-1/2'>
                <img src={p12} alt="" />
                <p>Adding more features as per user requirements</p>
            </div>
            <Divider />
            <div className='w-1/2'>
                <img src={p13} alt="" />
                <p>Opening cooperation between companies by providing more premium features</p>
            </div>
        </div>
    );
};

const Phasedua = () => {
    return (
        <div className='lg:flex grid grid-cols-3 lg:space-x-10  text-white pb-10 text-sm'>
            <div className=' '>
                <div className='flex'>
                    <img width={600} src={p21} alt="" />
                </div>
                <p>Improved AI,
                    can control more social media</p>
            </div>
            <div className=''>
                <img width={600} src={p22} alt="" />
                <p>Focus on expansion in East Asia
                    (China, Taiwan, Korea, Japan)</p>
            </div>
            <div className=''>
                <img width={600} src={p23} alt="" />
                <p>Open collaboration for new feature
                    requests by members</p>
            </div>

            <div className=''>
                <img width={600} src={p24} alt="" />
                <p>The app is available in
                    all countries</p>
            </div>

            <div className=''>
                <img width={600} src={p25} alt="" />
                <p>Adapting the use of social media
                    that is popular in each country</p>
            </div>
        </div>
    )
}
const Phasetiga = () => {
    return (
        <div className='flex  text-white h-80 text-sm'>
            <div className='w-1/2 '>
                <div className='flex'>
                    <img src={p31} alt="" />
                </div>
                <p>Combines several AI
                    for next features</p>
            </div>
            <Divider />
            <div className='w-1/2'>
                <img src={p32} alt="" />
                <p>Start assembling the AI ecosystem
                    so that it is interconnected</p>
            </div>
            <Divider />
            <div className='w-1/2'>
                <img src={p33} alt="" />
                <p>Can use the AI ecosystem
                    that has been integrated into 1 platform</p>
            </div>
        </div>
    )
}
const Plan = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-white'>Our plan</h1>
            <Phasesatu />
            <Phasedua />
            <Phasetiga />
        </div>
    );
};

export default Plan;
