import { useEffect, useState } from 'react';
import { CgArrowTopRight } from 'react-icons/cg';

const Ready = () => {
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
    <div className="bg-[#cdea68] w-full  pt-30 relative">
      <div className="flex flex-col  items-center font-founder text-[200px] leading-40">
        <span>READY</span> <span>TO START</span> <span>THE PROJECT?</span>
      </div>
      <div className="flex flex-col items-center gap-4 mt-15 pb-10">
        <button className="bg-black px-5 py-4 rounded-full flex items-center gap-4 group">
          <p className="font-neuemontreal text-white">START THE PROJECTS</p>

          <div className="size-8 flex justify-center items-center">
            <div className="size-3 bg-white rounded-full transition-all duration-500 group-hover:size-8 flex items-center justify-center">
              <CgArrowTopRight className="hidden group-hover:block group-hover:scale-125 transition-all duration-300 delay-150 " />
            </div>
          </div>
        </button>
        <div>OR</div>
        <button className="bg-transparent  border border-black px-5 py-4 rounded-full flex items-center gap-4 group">
          <p className="font-neuemontreal text-black">VIEW ALL CASE STUDY</p>

          <div className="size-8  flex justify-center items-center">
            <div className="size-3 bg-black rounded-full transition-all duration-500 group-hover:size-8 group-hover:bg-white flex items-center justify-center">
              <CgArrowTopRight className="hidden group-hover:block  group-hover:scale-125 transition-all duration-300 delay-100 " />
            </div>
          </div>
        </button>
      </div>
      {/*  */}
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10">
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

export default Ready;
