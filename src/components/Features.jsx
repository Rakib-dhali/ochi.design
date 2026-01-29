import React, { useState } from 'react';
import cardboard from '/assets/cardboard.png';
import pb from '/assets/pb.png';
import { CgArrowTopRight } from 'react-icons/cg';

const Features = () => {
  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');

  return (
    <div>
      <h1 className="font-neuemontreal text-5xl font-normal mx-20 mt-25 mb-10">
        Featured Product
      </h1>
      <hr className="border-t-zinc-400 mb-10" />
      <section className="mx-20 flex justify-center items-center">
        <div className="grid grid-cols gap-10">
          <div className="flex gap-10 relative">
            <div className="flex flex-col gap-5">
              <div className="flex justify-start gap-3 items-center">
                <p className="h-3 w-3 bg-black rounded-full"></p>
                <span className="font-neuemontreal tracking-tight">
                  CARDBOARD SPACESHIP
                </span>
              </div>
              <div className=" hover:scale-95  transition duration-300">
                <img
                  onMouseEnter={() => setTitle1('CARDBOARD SPACESHIP')}
                  onMouseLeave={() => setTitle1('')}
                  className="rounded-md w-full"
                  src={cardboard}
                  alt=""
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="hover:bg-black hover:text-white transition duration-300 rounded-full px-2 py-1 font-neuemontreal tracking-tighter border ">
                  BRANDED TEMPLATE
                </button>
                <button className="hover:bg-black hover:text-white transition duration-300 rounded-full px-2 py-1 font-neuemontreal tracking-tighter border ">
                  SALES DECK
                </button>
                <button className="hover:bg-black hover:text-white transition duration-300 rounded-full px-2 py-1 font-neuemontreal tracking-tighter border ">
                  SOCIAL MEDIA TEMPLATE
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-start gap-3 items-center">
                <p className="h-3 w-3 bg-black rounded-full"></p>
                <span className="font-neuemontreal tracking-tight">
                  PREMIUM BLEND
                </span>
              </div>
              <div className=" hover:scale-95  transition duration-300">
                <img
                  onMouseEnter={() => setTitle1('PREMIUM BLEND')}
                  onMouseLeave={() => setTitle1('')}
                  className="rounded-md"
                  src={pb}
                  alt=""
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="hover:bg-black hover:text-white transition duration-300 rounded-full px-2 py-1 font-neuemontreal tracking-tighter border ">
                  BRANDED TEMPLATE
                </button>
              </div>
            </div>

            <h2
              className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-7xl text-[#CDEA68] font-founder whitespace-nowrap pointer-events-none z-10  transition-all duration-500 ease-out
    ${title1 ? '-translate-y-10 opacity-100' : 'translate-y-0 opacity-0'}`}
            >
              {title1}
            </h2>
          </div>
          <div className="flex gap-10 relative">
            <div className="flex flex-col gap-5">
              <div className="flex justify-start gap-3 items-center">
                <p className="h-3 w-3 bg-black rounded-full"></p>{' '}
                <span className="font-neuemontreal tracking-tight">
                  PREMIUM BLEND
                </span>
              </div>
              <div className=" hover:scale-95  transition duration-300">
                <img
                  onMouseEnter={() => setTitle2('PREMIUM BLEND')}
                  onMouseLeave={() => setTitle2('')}
                  className="rounded-md"
                  src={pb}
                  alt=""
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="hover:bg-black hover:text-white transition duration-300 rounded-full px-2 py-1 font-neuemontreal tracking-tighter border ">
                  BRANDED TEMPLATE
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-start gap-3 items-center">
                <p className="h-3 w-3 bg-black rounded-full"></p>{' '}
                <span className="font-neuemontreal tracking-tight">
                  CARDBOARD SPACESHIP
                </span>
              </div>
              <div className=" hover:scale-95  transition duration-300">
                <img
                  onMouseEnter={() => setTitle2('CARDBOARD SPACESHIP')}
                  onMouseLeave={() => setTitle2('')}
                  className="rounded-md w-full"
                  src={cardboard}
                  alt=""
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="hover:bg-black hover:text-white transition duration-300 rounded-full px-2 py-1 font-neuemontreal tracking-tighter border ">
                  BRANDED TEMPLATE
                </button>
                <button className="hover:bg-black hover:text-white transition duration-300 rounded-full px-2 py-1 font-neuemontreal tracking-tighter border ">
                  SALES DECK
                </button>
                <button className="hover:bg-black hover:text-white transition duration-300 rounded-full px-2 py-1 font-neuemontreal tracking-tighter border ">
                  SOCIAL MEDIA TEMPLATE
                </button>
              </div>
            </div>
            <h2
              className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-6xl text-[#CDEA68] font-founder whitespace-nowrap pointer-events-none z-10  transition-all duration-500 ease-out
    ${title2 ? '-translate-y-10 opacity-100' : 'translate-y-0 opacity-0'}`}
            >
              {title2}
            </h2>
          </div>
        </div>
      </section>
      <div className="mt-10 flex justify-center items-center">
        <button className="bg-black px-5 py-4 rounded-full flex items-center gap-4 group">
          <p className="font-neuemontreal text-white">VIEW ALL CASE STUDY</p>

          <div className="size-8 flex justify-center items-center">
            <div className="size-3 bg-white rounded-full transition-all duration-500 group-hover:size-8 flex items-center justify-center">
              <CgArrowTopRight className="hidden group-hover:block transition delay-100 " />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Features;
