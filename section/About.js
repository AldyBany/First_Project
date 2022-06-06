import React,{useState} from 'react'
import Link from 'next/link'

const About = () => {
  const[Index, setIndex] = useState(false)
    
  const SkillsData = [
    {id: 1, title:'POURQUOI ROYAL SERVICES?',answer:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore, voluptate aperiam ipsam ut illo ducimus.'},
    {id: 2, title:"COMMENT NOS CONTACTER",answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore, voluptate aperiam ipsam ut illo ducimus.'},
    {id: 3, title:'WHY IS A REGULAR RECOMMENDABLE?',answer:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore, voluptate aperiam ipsam ut illo ducimus.'},
    {id: 4, title:'WHY REGULAR CAR SERVICING IS RECOMMENDED?',answer:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore, voluptate aperiam ipsam ut illo ducimus.'},
  ]

  const handleSetIndex = (id)=>{
    setIndex(!Index)
    Index !== id && (setIndex(id)) 
    
  }

  return (
    <div className="max-w-6xl mx-auto px-8 md:pt-32 pb-20 mt-20 mb-28" id="about" name="#about">
      
    <div className="grid md:grid-cols-2 content-between gap-14 mt-16">
      <div className="h-[350px] w-full rounded-md -order-1" style={{backgroundImage:`url('./about.jpg')`,backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center'}}></div>
      <div>
        <h2 className="font-bold text-3xl mb-4 md:mb-8 text-orange-600">Pourquoi choisir Royal Services</h2>
        <p className="mb-12 text-gray-500 text-base">Royal Car Service, les experts automobiles. C’est la bonne adresse pour une qualité de service exceptionnelle pour votre voiture.</p>
        {
          SkillsData.map(skills=>(
          <div className="bg-[#0b1c3a] rounded-md shadow-xl mb-4 border-l-8 border-orange-600" key={skills.id}>
            <div className="flex p-4 items-center justify-between cursor-pointer">
              <span className="font-semibold text-white">{skills.title}</span>
              <span onClick={()=>handleSetIndex(skills.id)} className="transition-all duration-500">
                {Index == skills.id ?<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
<path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
</svg>:<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                }
              </span>
            </div>
            { Index == skills.id &&  <div className=" p-4 rounded-md text-gray-500">{skills.answer}</div>}
          </div>
          ))
        }
       
      </div>
    </div>
    
  </div>
  )
}

export default About