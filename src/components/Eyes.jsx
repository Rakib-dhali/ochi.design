import React, { useEffect, useState } from 'react';

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 270);
    };

    window.addEventListener('mousemove', handleMove);

    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0"
      className=" w-full h-screen "
    >
      <div className='bg-[url("/assets/bg-eyes.jpg")] bg-cover bg-center flex justify-center items-center w-full h-screen overflow-hidden'>
        <div
          data-scroll
          data-scroll-section
          data-scroll-speed=".3"
          className="flex gap-10"
        >
          <div className=" h-50 w-50 bg-white rounded-full flex justify-center items-center">
            <div
              style={{ transform: `rotate(${rotate}deg)` }}
              className="h-35 w-35 rounded-full flex justify-center"
            >
              {' '}
              <div className="w-30 h-30 bg-black rounded-full ">
                <div className="w-30 h-30 transform flex justify-center">
                  <div className=" w-5 h-5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-50 w-50 bg-white rounded-full flex justify-center items-center">
            <div
              style={{ transform: `rotate(${rotate}deg)` }}
              className="h-35 w-35 rounded-full flex justify-center"
            >
              {' '}
              <div className="w-30 h-30 bg-black rounded-full ">
                <div className="w-30 h-30 transform flex justify-center">
                  <div className=" w-5 h-5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
