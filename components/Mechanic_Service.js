import React from 'react'

const Mechanic_Service = ({item,margin}) => {
  return (
   
    <div className={`px-2 py-3 shadow-md  rounded-md cursor-pointer bg-[#0b1c3a] ${margin}`} >
            <div className="w-full h-full duration-1000 text-center flex flex-col items-center">
              <div className="flex flex-col items-center w-full h-full space-y-5">
                <span className="text-center mx-auto">{item.icon}</span>
                <h2 className='text-2xl font-bold text-white'>{item.title}</h2>

              </div>
              
            </div>
    </div>
  )
}

export default Mechanic_Service