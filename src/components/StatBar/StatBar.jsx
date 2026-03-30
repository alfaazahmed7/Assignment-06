import React from 'react';

const StatBar = () => {
    return (
        <div className='bg-linear-to-l from-[#9514FA] to-[#4F39F6] py-5 mb-10'>
            <div className='flex items-center max-w-[70%] mx-auto text-white'>

                <div className='flex-1 text-center'>
                    <h2 className='text-4xl font-bold'>50K+</h2>
                    <p className='opacity-70 font-medium'>Active Users</p>
                </div>
                <div className='w-px h-14 bg-white/30 flex-shrink-0'></div>

                <div className='flex-1 text-center'>
                    <h2 className='text-4xl font-bold'>200+</h2>
                    <p className='opacity-70 font-medium'>Premium Tools</p>
                </div>
                <div className='w-px h-14 bg-white/30 flex-shrink-0'></div>

                <div className='flex-1 text-center'>
                    <h2 className='text-4xl font-bold'>4.9</h2>
                    <p className='opacity-70 font-medium'>Rating</p>
                </div>

            </div>
        </div>
    );
};

export default StatBar;