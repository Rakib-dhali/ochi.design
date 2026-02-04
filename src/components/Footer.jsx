import React from 'react';
import logo from '/assets/logo.svg';
import { PiClockAfternoon } from 'react-icons/pi';

const Footer = () => {
  return (
    <div className="h-screen w-full rounded-t-2xl bg-white">
      <section className="flex mx-8 pt-15">
        <div className="basis-2/5 font-founder text-8xl leading-18 ">
          <h2>
            EYE- <br />
            OPENING
          </h2>
        </div>
        <div className="basis-3/5">
          <h2 className="font-founder text-8xl leading-18 mb-10">
            {' '}
            PRESENTATION
          </h2>
          <div className="grid grid-cols-2 gap-5 font-neuemontreal">
            <div className="">
              <ul className="flex flex-col  gap-1 ">
                <li className="mb-3">S:</li>
                <li className="underline underline-offset-3 decoration-0">
                  instagram
                </li>
                <li className="underline underline-offset-3 decoration-0">
                  behance
                </li>
                <li className="underline underline-offset-3 decoration-0">
                  facebook
                </li>
                <li className="underline underline-offset-3 decoration-0">
                  LinkedIn
                </li>
              </ul>
            </div>
            <div className=""></div>
            <div className="">
              <ul className="flex flex-col  gap-1 ">
                <li className="mb-3">S:</li>
                <li className="underline underline-offset-3 decoration-0">
                  202-1965 W 4th Ave
                </li>
                <li className="underline underline-offset-3 decoration-0">
                  Vancouver, Canada
                </li>
                <li className="underline underline-offset-3 decoration-0">
                  30 Chukarina St
                </li>
                <li className="mb-3 underline underline-offset-3 decoration-0">
                  Lviv, Ukraine
                </li>
                <li className="mb-3">L:</li>
                <li className="underline underline-offset-3 decoration-0">
                  hello@ochi.design
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="flex flex-col items-end gap-1 ">
                <li className="mb-3">S:</li>
                <li className="underline underline-offset-3 decoration-0">
                  Home
                </li>
                <li className="underline underline-offset-3 decoration-0">
                  Service
                </li>
                <li className="underline underline-offset-3 decoration-0">
                  Our Works
                </li>
                <li className="underline underline-offset-3 decoration-0">
                  Insight
                </li>
                <li className="underline underline-offset-3 decoration-0">
                  Contact us
                </li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-between mx-8 pt-10">
        <img src={logo} alt="" />
        <p className="opacity-60">© ochi design 2026. Legal Terms</p>
        <p className="opacity-60 mb-5">Website by Obys</p>
      </section>
    </div>
  );
};

export default Footer;
