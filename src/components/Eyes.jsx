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
    <div className='bg-[url("/assets/bg-eyes.jpg")] bg-cover bg-center w-full h-screen flex justify-center items-center'>
      <div className="flex gap-10">
        <div className="h-50 w-50 bg-red-50 rounded-full flex justify-center items-center">
          <div className="w-30 h-30 bg-black rounded-full ">
            <div
              style={{ transform: `rotate(${rotate}deg)` }}
              className="w-30 h-30 transform flex justify-center"
            >
              <div className=" w-5 h-5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="h-50 w-50 bg-red-50 rounded-full flex justify-center items-center">
          <div className="w-30 h-30 bg-black rounded-full ">
            <div
              style={{ transform: `rotate(${rotate}deg)` }}
              className="w-30 h-30 transform  flex justify-center"
            >
              <div className=" w-5 h-5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        ok
      </div>
    </div>
  );
};

export default Eyes;
