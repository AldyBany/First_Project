
import Navbar from '../components/Navbar'
import Sticky from 'react-stickynode'
import React,{useState} from 'react'
// import LocomotiveScroll from 'locomotive-scroll';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Banner = () => {
   
  return (
    <div>
        <Navbar/>
        <div id="home" name="#home" className="w-full h-[85vh]" style={{backgroundImage:`url('./bg1.jpg')`,backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center'}}>
    
      
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 pt-24">
        <div className="flex flex-col space-y-10 px-4 md:px-0">
            <h1 className="max-w-5xl text-5xl md:text-6xl font-bold text-[#0b0b3a] mb-3">Des services de qualité pour vos voitures</h1>
            <p className="max-w-3xl md:max-w-4xl text-[#0b0b3a] text-lg">Royal Services est un garage moderne offrant un entretien, des réparations de véhicules de haute qualité pour toutes les marques et tous les modèles.</p>
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