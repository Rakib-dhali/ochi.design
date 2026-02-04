'use client';

import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import logo from '/assets/logo.svg';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (current > previous && current > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      animate={{
        y: hidden ? -120 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full bg-transparent px-20 pt-5 
                 text-[#212121] font-neuemontreal flex justify-between 
                 items-center z-50 backdrop-blur-md pb-5 "
    >
      <div className="logo cursor-pointer">
        <img src={logo} alt="" />
      </div>
      <div className="links flex gap-10 justify-between">
        {['Services', 'Our Works', 'About Us', 'Insight', 'Contact Us'].map(
          (item, index) => (
            <a
              key={index}
              className={`text-md font-light capitalize cursor-pointer ${index === 4 && 'ml-32'} `}
            >
              {item}
            </a>
          ),
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
