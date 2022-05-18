import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-32  pt-20" id="footer">
    <div className="max-w-6xl sm:mx-auto grid justify-between sm:grid-cols-2 md:grid-cols-3 gap-4 pt-24 pb-10">
       <div className="">
           <h5 className="font-bold mb-4 text-[#0b0b3a]">Our Services</h5>
           <ul className="flex flex-col space-y-3 mb-3 sm:mb-0">
               <li className="cursor-pointer text-gray-500 hover:text-orange-500">Car Servicing</li>
               <li className="cursor-pointer text-gray-500 hover:text-orange-500">MOT</li>
               <li className="cursor-pointer text-gray-500 hover:text-orange-500">Air Conditioning Service</li>
               <li className="cursor-pointer text-gray-500 hover:text-orange-500">Oil and Filter Change</li>
               <li className="cursor-pointer text-gray-500 hover:text-orange-500">Brake Repair</li>
           </ul>
       </div>
       <div className="">
           <h5 className="font-bold mb-4 text-[#0b0b3a]">About Royal Car Service</h5>
           <ul className="flex flex-col space-y-3">
           <li className="cursor-pointer text-gray-500 hover:text-orange-500">About Us</li>
           <li className="cursor-pointer text-gray-500 hover:text-orange-500">Code of Practice</li>
           <li className="cursor-pointer text-gray-500 hover:text-orange-500">Quality Management</li>
           <li className="cursor-pointer text-gray-500 hover:text-orange-500">Service Promise</li>
           </ul>
       </div>
       <div className="">
           <h5 className="font-bold mb-4 text-[#0b0b3a]">Contact</h5>
           <ul className="flex flex-col space-y-3">
           <li className="cursor-pointer text-gray-500 hover:text-orange-500">Contact Us</li>
           <li className="cursor-pointer text-gray-500 hover:text-orange-500">Code of Practice</li>
           <li className="cursor-pointer text-gray-500 hover:text-orange-500">Quality Management</li>
           <li className="cursor-pointer text-gray-500 hover:text-orange-500">Service Promise</li>
           </ul>
       </div>
    </div>
   </footer>
  )
}

export default Footer