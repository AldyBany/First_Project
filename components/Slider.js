
import {motion} from 'framer-motion'
import React, {useRef, useEffect, useState} from  'react'

const Slider = () => {
  return (
    <div className="max-w-6xl mx-auto">
       <motion.div className="overflow-hidden">
           <motion.div className="flex">
               <motion.div className="p-10">
                <div className="w-60 h-60 bg-red-600 rounded-md"></div>
               </motion.div> 
               <motion.div className="p-10">
                <div className="w-60 h-60 bg-red-600 rounded-md"></div>
               </motion.div>  
               <motion.div className="p-10">
                <div className="w-60 h-60 bg-red-600 rounded-md"></div>
               </motion.div>  
               <motion.div className="p-10">
                <div className="w-60 h-60 bg-red-600 rounded-md"></div>
               </motion.div>  
               <motion.div className="p-10">
                <div className="w-60 h-60 bg-red-600 rounded-md"></div>
               </motion.div>     
           </motion.div>
       </motion.div> 
    </div>
  )
}

export default Slider