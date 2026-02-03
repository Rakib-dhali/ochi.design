import React from 'react';
import logog from '/assets/logog.svg';
import clutch from '/assets/clutch.svg';
import theacademy from '/assets/tfa.png';

const Cards = () => {
  return (
    <div className='flex items-center justify-center mt-10 w-full'>
      <div className="flex mx-15 gap-6 h-80 mt-10 mb-20 w-full ">
        <div className="w-2/4 flex justify-center items-center bg-[#004d43] rounded-xl relative">
          <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' src={logog} alt="" />
          <div className='absolute bottom-0 left-0 m-5 py-0.5 px-2 border  border-[#cdea68] rounded-full text-[#cdea68]'>
            ©2019-2026
          </div>
        </div>
        <div className="w-1/4 bg-[#212121] rounded-xl relative">
          <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' src={clutch} alt="" />
          <div className='absolute bottom-0 left-0 m-5 px-2 py-0.5 border rounded-full  border-white text-white'>RATING 5.0 IN CLUTCH</div>
        </div>
        <div className="w-1/4 bg-[#212121] rounded-xl relative">
          <img className='w-25 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' src={theacademy} alt="" />
          <div className='absolute bottom-0 left-0 m-5 px-2 py-0.5 border rounded-full text-center border-white text-white'>BUSINESS BOOTCAMP ALUMNI </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
