import { useState } from "react"

import {close, logo, menu } from '../assets';

import {navLinks} from '../TextForWebsite';


const Navbar = () =>{
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      {/* right navbar for medium and large screen */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (

          // di navLinks.length ? = if true, : = if false/else
          <li key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}>
            {/* menampilkan value dari navLinks berdasarkan id */}
            <a href={`#${nav.id}`} >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* property for mobile device or SM */}
      {/* function onClick dibawah, mengubah statenya seperti dari gambar menu ke gambar silang(X). Cara yang benar agar komponen react dibawah terus diperbarui contohnya seperti dibawah gunakan prev => !prev */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} className="fixed z-[50] cursor-pointer w-[28px] h-[26px] object-contain" alt="menu"  onClick={() => setToggle((prev) => !prev)}/>

        {/* Sidebar for mobile device */}
        <div className={`${toggle ? 'flex' : 'hidden'} p-3 bg-black-gradient fixed z-[50] top-20 right-0 my-2 mx-4 min-w-[140px] rounded-xl sidebar`}>
          
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (

              // di navLinks.length ? = if true, : = if false/else
              <li key={nav.id}
                className={`font-poppins w-full text-center p-5 font-normal cursor-pointer text-[16px] text-white my-2 ${navLinks.length === -1 ? 'mr-0' : 'mr-0'}`}>
                  {/* menampilkan value dari navLinks berdasarkan id */}
                  <a href={`#${nav.id}`} >
                    {nav.title}
                  </a>
              </li>
            ))}

          </ul>
        </div>

      </div>

    </nav>
  )
}

export default Navbar