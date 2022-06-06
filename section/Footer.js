import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Footer = () => {
    const NavItems = [
        {id:"#home",title:'Acceuil'},
        {id:"#services",title:'Services'},
        {id:"#contacts",title:'Contacts'},
        {id:"#about",title:'A propos'},
      ] 
  return (
    <footer className="bg-[#0b1c3a] mt-32 px-3 md:px-6 pt-6 pb-12 md:pb-4" id="footer">
    <div className="max-w-5xl sm:mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-14 pb-10">
       
       <div className="">
           <h5 className="font-bold mb-4 text-white text-xl">Royal <span className="text-orange-600">Services</span></h5>
           <div className="flex flex-col space-y-3">
            <p className="text-gray-500 w-[230px]">Royal Services est un garage moderne offrant un entretien, des réparations de véhicules de haute qualité pour toutes les marques et tous les modèles.</p>
        <div className="bg-[#0b1c3a] flex items-center space-x-3 py-4 text-white rounded-md">
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
       <div className="">
           <h5 className="font-bold mb-4 text-white">Les Liens</h5>
           <ul className="flex flex-col space-y-3">
           {NavItems.map(item=>(
                <Link href={item.id} className="cursor-pointer text-gray-500 hover:text-orange-600" key={item.id}>
                    <span className="text-gray-500">{item.title}</span>
                </Link>
            ))}
           </ul>
       </div>
       <div className="">
           <h5 className="font-bold mb-4 text-white">Etre en contact avec nous !</h5>
          
           <div className=" flex items-center space-x-3 py-2 text-white rounded-md">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
          <div className="grid">
            <p className="">Nos contacts</p>
            <span className="font-semibold text-orange-600">(06)483-9857 / (05)573-2488</span>
          </div>
          </div>

          <div className="flex items-center space-x-3 py-2 text-white rounded-md">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                </div>
          <div className="grid">
            <p className="text-white">Nos Horaires</p>
            <span className="font-semibold text-orange-600">Mon - Sam 8h00 - 17h00</span>
          </div>
          </div>

          <div className="flex items-center space-x-3 py-2 text-white rounded-md">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
                </div>
          <div className="grid">
            <p className="text-white">Location</p>
            <span className="font-semibold text-orange-600">200, Rue du Caire 7/7 DE DANY</span>
          </div>
          </div>

          <div className="flex items-center space-x-3 py-2 text-white rounded-md">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
  )
}

export default Footer