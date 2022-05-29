import Sticky from 'react-stickynode'
import React,{useState} from 'react'
// import LocomotiveScroll from 'locomotive-scroll';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {

    const handleStateChange = (status) => {
        
        if (status.status === Sticky.STATUS_FIXED) {
            console.log('the component is sticky');
        }
      };
      const NavItems = [
        {id:"#home",title:'Acceuil'},
        {id:"#services",title:'Services'},
        {id:"#contacts",title:'Contacts'},
        {id:"#about",title:'A propos'},
      ] 
  return (
    <div>
        <Sticky onStateChange={handleStateChange} innerActiveClass="shadow-md transition-shadow duration-500">
        <div  className="w-full bg-white" id="home">
        <div className="relative max-w-6xl mx-auto  w-full space-x-40 flex items-center justify-between py-4 bg-white px-4 md:px-0">
            <h1 className="text-2xl font-bold text-[#0b0b3a]">Royal<span className="text-orange-600">Services</span></h1>
        
            <ul className="hidden float-right md:flex space-x-12 text-text-primary">
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
                        <a>{item.title}</a>
                    </Link>
                ))}
            </ul>
            <div className="bg-[#0b0b3a] flex items-center space-x-4 px-3 py-4 md:w-[180px] text-white rounded-md">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            </div>
            <div className="grid">
                <p className="">Contact Nous</p>
                <span className="font-semibold text-orange-600">(06)483-9857</span>
            </div>
            </div>
        </div>
        </div>
        </Sticky>
    </div>
  )
}

export default Navbar