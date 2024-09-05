import React from 'react';
import { CircularText } from './Icons';
import Image from 'next/image';

const HireMe = () => {
  return (
    <div className='w-48 h-48 fixed left-10 bottom-10 z-20 flex items-center justify-center'>
    <div className='w-full h-full relative flex items-center justify-center overflow-hidden'>
      <Image className="circular-text w-full h-full z-20 fill-dark animate-spin-slow" src="/circular-text.png" alt='some texts' width={800} height={800} />

      <a href='mailto:ammralfer@gmail.com' className='flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-dark text-light shadow-md border border-solid
        border-dark w-20 h-20 rounded-full font-semibold
        hover:bg-light hover:text-dark z-50

         dark:bg-light dark:text-dark hover:dark hover:dark:text-light
                  hover:dark:border-light
        
        '>
        Hire Me
      </a>
      </div>
    </div>
  );
};

export default HireMe;
