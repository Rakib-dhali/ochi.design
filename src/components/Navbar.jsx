import React from 'react'
import logo from '/assets/logo.svg'

const Navbar = () => {
  return (
    <div className="w-full bg-transparent px-20 py-8 text-[#212121] font-neuemontreal flex justify-between items-center">
      <div className="logo cursor-pointer"><img src={logo} alt="" /></div>
      <div className="links flex gap-10 justify-between">
        {["Services", "Our Works", "About Us", "Insight", "Contact Us"].map((item, index) => (<a key={index} className={`text-md font-light capitalize cursor-pointer ${index === 4 && "ml-32"} `}>{item}</a>))}
      </div>
    </div>
  )
}

export default Navbar