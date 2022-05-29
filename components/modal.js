import React from 'react'

const Modal = ({setModalOn}) => {
  return (
    <div className="bg-green-600 opacity-80 inset-0 fixed z-50"  >
        <div className="flex h-screen justify-center items-center">
            <div className=" flex items-center py-12 px-24 bg-white border-4 border-blue-500">
               <span>Hello World</span>
      
            </div>
            <span onClick={()=>setModalOn(false)} className="cursor-pointer">close</span>
        </div>
    </div>
  )
}

export default Modal