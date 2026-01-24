import React from 'react';
import man_woman from '../assets/man_woman.jpg';

const About = () => {
  return (
    <div className="bg-[#CDEA68] w-full rounded-2xl">
      <div className="mx-10">
        <p className="text-[4rem] font-normal text-neutral-600 font-neuemontreal leading-15 pt-15 pb-10  ">
          We craft category-defining presentations, brand identities, and
          digital experiences that drive funding, sales, and market leadership.
        </p>
        <hr className="border-t border-e-zinc-500" />
        <div className="mx-10 pb-20">
          <section className="flex font-neuemontreal text-xl text-zinc-700 mt-5 ">
            <p className="basis-1/2">What you can expect:</p>
            <div className=" basis-1/4 f flex flex-col">
              <p className="text-left mb-5 ">
                We don't just make slides. We shape strategy, storytelling,
                design scalable brand systems, and build presentations that make
                people say: "I want in!"
              </p>
              <p className="text-left mb-5">
                Our clients make the world go round - from deep tech, aerospace
                and robotics to music festivals and Michelin-starred
                restaurants.
              </p>
              <p className="text-left">
                Since 2019, we've been the go-to partner for Yahoo, Medallia,
                Uber, Lexus, Salience Labs, Trawa and AllThingsGo.
              </p>
            </div>
            <ul className="flex flex-col justify-end items-end w-100 gap-1 ">
              <li className="mb-5">S:</li>
              <li className="">instagram</li>
              <li className="">behance</li>
              <li className="">facebook</li>
              <li>LinkedIn</li>
            </ul>
          </section>
        </div>
        <hr className="border-t border-e-zinc-500" />
        <div className="mt-5 flex">
          <section className=" basis-1/2">
            <h2 className="text-5xl font-neuemontreal font-semibold mb-5">
              how can i help
            </h2>
            <button className="uppercase bg-black text-white px-5 py-3 rounded-full">
              real more
            </button>
          </section>
          <img
            className="h-2/5 w-1/2 basis-1/2 rounded-lg"
            src={man_woman}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
