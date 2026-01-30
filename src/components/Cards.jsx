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
        </div>
        <div className="w-1/4 bg-[#212121] rounded-xl relative">
          <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' src={clutch} alt="" />
        </div>
        <div className="w-1/4 bg-[#212121] rounded-xl relative">
          <img className='w-25 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' src={theacademy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
