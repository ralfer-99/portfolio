import Image from 'next/image';
import React from 'react'
import { useState } from 'react'
import { CircularText } from '@/img/circular-text.png';

const Rotate = () => {
      const [count, setCount] = useState(0)
  const text = "Software Engineer . Web Developer . ";

  return (
    
    <>
    <div className="flex items-center justify-center">
        {/* <div>
          {text.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div> */}
        <Image className="circular-text" src="/circular-text.png" alt='some texts' width={800} height={800} />
    </div>
  </>
  )
}

export default Rotate
