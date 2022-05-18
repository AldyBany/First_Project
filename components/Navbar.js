import React from 'react'
import Logo from './Logo'

const Navbar = () => {

    const NavItems = [
        {id:1,title:'Pricing'},
        {id:2,title:'Products'},
        {id:3,title:'Community'},
        {id:4,title:'Contacts'},
    ]
  return (
    <nav className="flex items-center justify-between px-8 py-8 rounded-full bg-[red]">
        <Logo/>
        <ul className="hidden md:flex space-x-7">
            {NavItems.map(item=>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>

    </nav>
  )
}

export default Navbar