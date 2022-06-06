
import Navbar from '../components/Navbar'
import Sticky from 'react-stickynode'
import React,{useState} from 'react'

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Banner = () => {
  const NavItems = [
    {id:"#home",title:'Acceuil'},
    {id:"#services",title:'Services'},
    {id:"#contacts",title:'Contacts'},
    {id:"#about",title:'A propos'},
  ] 
   
  return (
    <div>
      <Sticky  innerActiveClass="shadow-md transition-shadow duration-500">
        <div  className="w-full bg-white" id="home">
        <div className=" max-w-6xl mx-auto  w-full md:space-x-24 lg:space-x-40 flex items-center justify-between py-4 bg-white px-4 md:px-0">
            <h1 className="text-2xl font-bold text-[#0b1c3a]">Royal<span className="text-orange-600">Services</span></h1>
        
            <div className="hidden float-right md:flex space-x-12 text-text-primary">
                {NavItems.map(item=>(
                    <Link 
                
                    className="cursor-pointer hover:text-orange-600" 
                    key={item.id}
                    activeClass="text-orange-600"
                            to={item.id} 
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-300}
                            duration={500}
                            delay={1000}
                            isDynamic={true}
                            spyThrottle={500}
                    >
                        <span>{item.title}</span>
                    </Link>
                ))}
            </div>
            <div className="bg-[#0b1c3a] flex items-center space-x13 md:space-x-4 px-3 py-4 md:w-[180px] text-white rounded-md">
           
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-7 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          
            <div className="grid">
                <p className="text-xs md:text-base font-semibold">Contact Nous</p>
                <span className="font-semibold text-orange-600 text-xs md:text-base">(06)483-9857</span>
            </div>
            </div>
        </div>
        </div>
      </Sticky>
     <div id="home" name="#home" className="w-full h-[85vh]">
    
     <ul className="md:hidden fixed bottom-0 left-0 bg-orange-600 w-full flex items-center justify-around px-6 py-5 text-white rounded-t-l-md rounded-t-r-md shadow-xl">
                {NavItems.map(item=>(
                    <Link 
                
                    className="cursor-pointer hover:text-primary" 
                    key={item.id}
                    activeClass="text-primary"
                            to={item.id} 
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-300}
                            duration={500}
                            delay={1000}
                            isDynamic={true}
                            spyThrottle={500}
                    >
                        <span>{item.title}</span>
                    </Link>
                ))}
            </ul> 
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 pt-24">
        <div className="flex flex-col space-y-10 px-4 md:px-0">
            <h1 className="max-w-5xl text-5xl md:text-6xl font-bold text-[#0b1c3a] mb-3">Des services de qualité pour vos voitures</h1>
            <p className="max-w-3xl md:max-w-4xl text-[#0b1c3a] text-lg">Royal Services est un garage moderne offrant un entretien, des réparations de véhicules de haute qualité pour toutes les marques et tous les modèles.</p>
            <div className="font-semibold text-white bg-orange-600 rounded-md px-8 flex w-[200px] py-4 lg:mt-40 text-md cursor-pointer">
              <span className="shadow-2xl shadow-orange-600/20">En Savoir Plus </span>
            </div>
          
        </div>
        <div></div>
    </div>
   </div>
    </div>
  )
}

export default Banner