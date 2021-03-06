import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-2xl md:max-w-4xl mx-8 sm:mx-auto md:h-80 rounded-xl bg-blue-900 grid sm:grid-cols-2 overflow-hidden mt-40" id="contact" name="#contacts">
    <div className="h-full bg-[#0b1c3a] p-7">
        <p className="text-center mb-10 md:text-left text-gray-100 mt-6">Royal Car Service, les experts automobiles. C’est la bonne adresse pour une qualité de service exceptionnelle pour votre voiture. Que vous cherchiez des conseils, <span className="text-orange-600 font-semibold">064839857</span> travaux de réparation ou de service, nous pouvons offrir le package complet.</p>
        <div className="max-w-[220px] flex items-center space-x-3 mx-auto md:mx-0 mb-5 px-6 py-4 bg-orange-600 text-gray-200 font-semibold rounded-md text-center shadow-2xl shadow-orange-600/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Contactez Nous!</span>

        </div>
    </div>
    <div className="px-4 py-6 h-80 -order-1 md:order-1" style={{backgroundImage:`url('./bg.jpg')`,backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center'}}></div>
    </div>
  )
}

export default Contact