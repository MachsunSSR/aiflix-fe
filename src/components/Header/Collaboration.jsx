import React from 'react';
import images from '../../data/collab';

const Collaboration = () => {
    const imageNames = ['bnb', 'g73', 'g77', 'g78', 'g80', 'pathraw', 'shape', 'solana', 'v2', 'v3', 'v4'];

    return (
        <div>
            <h1 className='text-center text-white text-xl mb-4'>OUR COLLABORATORS & INVESTOR</h1>
            <div className='grid lg:grid-cols-8 grid-cols-4 gap-4 lg:w-1/2  w-4/5 mx-auto justify-self-center'>
                {imageNames.map(imageName => (
                    <div key={imageName} className='flex justify-self-center bg-white bg-opacity-10 p-4 rounded-xl items-center mx-auto justify-center m-2'>
                        <img className='w-full' src={images[imageName]} alt={imageName} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Collaboration;
