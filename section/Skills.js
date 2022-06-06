import Modal from '../components/modal';
import {useState} from 'react'


const Skills = () => {
  const[modalOn, setModalOn] = useState(false)
  const[Index, setIndex] = useState(false)
  const[shadow, setShadow] = useState(false)
  return (
    <div className="max-w-6xl mx-auto grid sm:grid-cols-2  gap-10 md:gap-16 items-center min-h-96 pt-36 px-8 mb-32" id="">
       <div className="h-60 w-full rounded-md" style={{backgroundImage:`url('./bg2.jpg')`,backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center'}} onClick ={()=>setModalOn(!modalOn)}>
         Dire quelque chose
         {modalOn && <Modal setModalOn={setModalOn}/>}
         
       </div>
       <div className="flex flex-col space-y-8 py-4">
         <h2 className="font-bold text-4xl text-[#0b1c3a] mb-8 sm:mb-2">Profitez de votre
Service de voiture</h2>
         <p className="text-gray-500 text-base">Entretien, entretien et réparation de véhicules de haute qualité pour toutes les marques et tous les modèles. À une qualité abordable garantie avec une touche personnelle. Par l’une des plus grandes chaînes d’ateliers indépendants au monde. C’est Royal Car Service!</p>

         <p className="font-semibold text-orange-600 mt-24 text-md">About Royal Car Service</p>
       </div>
    
     </div>
  )
}

export default Skills