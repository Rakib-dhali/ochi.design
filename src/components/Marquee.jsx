import React from 'react';
import { motion } from 'motion/react';

const Marquee = () => {
    return (
        <div className="w-full h-[70vh] rounded-t-2xl bg-emerald-900 py-30 overflow-hidden">
            <hr className='border-t-2 border-zinc-200' />
            <motion.div className="uppercase flex -mt-18 leading-none  text-[30vw] text-white whitespace-nowrap font-bold  font-founder"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear"

                }}
            >
                <span className='mr-10'>we are ochi</span>
                <span className='mr-10'>we are ochi</span>
                <span className='mr-10'>we are ochi</span>
                <span className='mr-10'>we are ochi</span>

                <span className='mr-10'>we are ochi</span>
                <span className='mr-10'>we are ochi</span>
                <span className='mr-10'>we are ochi</span>
                <span className='mr-10'>we are ochi</span>
            </motion.div>
            <hr className='border-t-2 -mt-8 border-zinc-200' />
        </div>
    );
};

export default Marquee;
