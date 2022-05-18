import React,{useState} from 'react'

const Accordion = () => {

    const[index, setIndex] = useState(false)
    
    const SkillsData = [
        {id: 1, title:'Why an oil change',answer:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore, voluptate aperiam ipsam ut illo ducimus.'},
        {id: 2, title:"Filter replacement",answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore, voluptate aperiam ipsam ut illo ducimus.'},
        {id: 3, title:'When to request oil',answer:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore, voluptate aperiam ipsam ut illo ducimus.'},
        {id: 4, title:'Technique',answer:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore, voluptate aperiam ipsam ut illo ducimus.'},
      ]

  return (
    <div>Accordion</div>
   
  )
}

export default Accordion