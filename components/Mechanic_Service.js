import React, {useState} from 'react'
import {motion} from 'framer-motion';

const Mechanic_Service = ({item,margin}) => {

  const[isOpen, setIsOpen] = useState(false)

  return (
   
    <div className={`px-2 py-3 shadow-md  rounded-md cursor-pointer bg-[#0b1c3a] ${margin}`} onClick={()=>setIsOpen(!isOpen)}>
            <div className="w-full h-auto duration-1000 text-center flex flex-col items-center">
              <div className="flex flex-col items-center w-full h-auto space-y-5">
                <span className="text-center mx-auto">{item.icon}</span>
                <h2 className='md:text-2xl font-bold text-white'>{item.title}</h2>
                {/* {isOpen && <div className="text-white">{item.description}</div>} */}
              

              </div>
              
            </div>
    </div>
  )
}

export default Mechanic_Service