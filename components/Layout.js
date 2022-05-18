import React from 'react'
import About from '../section/About'
import Footer from '../section/Footer'
import Link from 'next/link'
import Logo from './Logo'

const Layout = ({children}) => {
    const NavItems = [
        {id:"#home",title:'Home'},
        {id:"#services",title:'Services'},
        {id:"#contact",title:'Contact'},
        {id:"#about",title:'About'},
      ]

  return (
    <div className="relative">
        {children}
        <footer className="bg-[#0b0b3a] mt-32 px-6 pt-6" id="footer">
    <div className="max-w-5xl sm:mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-14 pb-10">
       
       <div className="">
           <h5 className="font-bold mb-4 text-white text-xl">Royal <span className="text-orange-600">Services</span></h5>
           <div className="flex flex-col space-y-3">
            <p className="text-gray-500 w-[200px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quam eos consectetur.</p>

        <div className="bg-[#0b0b3a] flex items-center space-x-3 py-4 text-white rounded-md">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <div className="grid">
            <p className="">Contact Nous</p>
            <span className="font-semibold text-orange-600">(06)483-9857</span>
          </div>
        </div>
        </div>
       </div>
       <div className="">
           <h5 className="font-bold mb-4 text-white">About Royal Car Service</h5>
           <ul className="flex flex-col space-y-3">
           <li className="cursor-pointer text-gray-500 hover:text-orange-500">About Us</li>
           <li className="cursor-pointer text-gray-500 hover:text-orange-500">Code of Practice</li>
           <li className="cursor-pointer text-gray-500 hover:text-orange-500">Quality Management</li>
           <li className="cursor-pointer text-gray-500 hover:text-orange-500">Service Promise</li>
           </ul>
       </div>
       <div className="">
           <h5 className="font-bold mb-4 text-white">Contact</h5>
           <div className="bg-[#0b0b3a] flex items-center space-x-3 py-4 text-white rounded-md">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
          <div className="grid">
            <p className="">Nos contacts</p>
            <span className="font-semibold text-orange-600">(06)483-9857 / (05)573-2488</span>
          </div>
          </div>

          <div className="bg-[#0b0b3a] flex items-center space-x-3 py-4 text-white rounded-md">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                </div>
          <div className="grid">
            <p className="text-white">Nos Horaires</p>
            <span className="font-semibold text-orange-600">Mon - Sam 8h00 - 17h00</span>
          </div>
          </div>

          <div className="bg-[#0b0b3a] flex items-center space-x-3 py-4 text-white rounded-md">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
                </div>
          <div className="grid">
            <p className="text-white">Envoyez-nous un email</p>
            <span className="font-semibold  text-orange-600">royalservices.africa</span>
          </div>
          </div>
       </div>
    </div>
   </footer>
    </div>
  )
}

export default Layout