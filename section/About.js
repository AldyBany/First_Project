import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-8 pt-32 pb-20 mt-20 mb-28" id="about">
      <h2 className="text-center font-bold text-3xl lg:text-5xl mb-8 text-[#0b0b3a]">Why choosing Royal Car Service</h2>
      <p className="lg:text-xl text-center mb-12 text-gray-500">Royal Car Service ,the car experts. This is the right address for outstanding service quality for your car. Whether you are looking for advice, repair or service work we can offer the full package.</p>
      <p className="max-w-xs mx-auto px-6 py-4 bg-[#0b0b3a] text-gray-200 font-bold rounded-md text-center shadow-2xl shadow-[#0b0b3a/20]">
          <Link href="/service" className="">
              <a className=""> About Royal Car Service</a>
          </Link>
      </p>
    </section>
  )
}

export default About