import React from 'react'
import Navbar from '../components/Navbar'

const Banner = () => {
  return (
   <section className="pt-10">
       <div className="max-w-5xl mx-auto pt-10">
          <Navbar/>
          <div className="flex items-center mt-12">
              <div className="w-1/2 h-96 bg-red-500 flex flex-col space-y-8">
                  <h1 className="max-w-md text-5xl font-bold">GThe place to Repair your car</h1>
                  <p className="text-xl max-w-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur odit sunt nostrum vero, facilis excepturi illo ex.</p>
              </div>
              <div className="w-1/2 h-96 bg-red-500 flex flex-col space-y-8">
                  <h1 className="max-w-md text-5xl font-bold">GThe place to Repair your car</h1>
                  <p className="text-xl max-w-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur odit sunt nostrum vero, facilis excepturi illo ex.</p>
              </div>
          </div>
       </div>
   </section>
  )
}

export default Banner