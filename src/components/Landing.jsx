import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import contentImage from '../assets/content-image01.jpg';

const Landing = () => {
    return (
        <div className='w-full h-screen text-[#212121]'>
            <div className="masker overflow-hidden font-founder text-[9rem] tracking-wide leading-none ml-16">
                <h2 className='m-0 translate-y-[0.25em] uppercase'> we create</h2>
                <h2 className='m-0  uppercase flex gap-3 items-center justify-start'> <img className='h-21 mt-4 ' src={contentImage} alt="ochi" /> <span>eye-opening</span></h2>
                <h2 className='m-0 translate-y-[-0.25em] uppercase'>presentation</h2>
            </div>
            <hr className='mt-10' />
            <div className='font-neuemontreal flex justify-around mt-4 text-xl'>
                <h4 className='flex justify-center items-center'>Presentation and storytelling agency</h4>
                <h4 className='flex justify-center items-center'>
                    For innovation teams and global brands</h4>
                <div className='flex gap-4'>
                    <div className='uppercase border-2 rounded-full pt-2.5 px-6 text-base cursor-pointer transition ease-in duration-200 hover:bg-[#212121] hover:text-[#fafafa] '>Start the project</div>
                    <div className='size-12 border-2 rounded-full flex items-center justify-center'><FiArrowUpRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing