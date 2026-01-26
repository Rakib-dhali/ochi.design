import React from 'react';
import cardboard from '/assets/cardboard.png';
import pb from '/assets/pb.png';
import { CgArrowTopRight } from "react-icons/cg";


const Features = () => {
  return (
    <div>
      <h1 className="font-neuemontreal text-5xl font-normal mx-20 mt-25 mb-10">
        Featured Product
      </h1>
      <hr className="border-t-zinc-400 mb-10" />
      <section className="mx-20 flex justify-center items-center">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex justify-start gap-3 items-center">
              <p className="h-3 w-3 bg-black rounded-full"></p>{' '}
              <span className="font-neuemontreal tracking-tight">
                CARDBOARD SPACESHIP
              </span>
            </div>
            <div className=" hover:scale-95  transition duration-300">
              <img className="rounded-md w-full" src={cardboard} alt="" />
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
              <p className="h-3 w-3 bg-black rounded-full"></p>{' '}
              <span className="font-neuemontreal tracking-tight">
                PREMIUM BLEND
              </span>
            </div>
            <div className=" hover:scale-95  transition duration-300">
              <img className="rounded-md" src={pb} alt="" />
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
                PREMIUM BLEND
              </span>
            </div>
            <div className=" hover:scale-95  transition duration-300">
              <img className="rounded-md" src={pb} alt="" />
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
              <img className="rounded-md w-full" src={cardboard} alt="" />
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
        </div>
      </section>
      <div className="mt-10 flex justify-center items-center">
        <button className="bg-black px-5 py-4 rounded-full flex items-center gap-4 group">
          <p className="font-neuemontreal text-white">VIEW ALL CASE STUDY</p>

          <div className="size-8 flex justify-center items-center">
            <div className="size-3 bg-white rounded-full transition-all duration-500 group-hover:size-8 flex items-center justify-center">
              <CgArrowTopRight className='hidden group-hover:block transition delay-100 '/>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Features;
