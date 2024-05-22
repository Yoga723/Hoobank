import React from 'react'
import {logo} from '../assets'
import styles, {layout} from '../styles'
import {socialMedia, footerLinks} from '../TextForWebsite'

const Footer = () => {
  return (
    <section className={`${styles.paddingY} flex-col `}>
      <div className={`${styles.flexStart} md:flex-row flex-col p-5 justify-between md:items-start items-center  border-[#3F3E45] border-b-2 rounded-sm`}>

        <div className='flex flex-col flex-1 justify-start mr-10'>
          <img src={logo} alt="logo" className="object-contain w-[266px] h-[72px]"/>
          <p className={`${styles.paragraph} max-w-[310px] mt-4`}>Cara baru untuk melakukan pembayaran dengan mudah, andal, dan aman.</p>
        </div>

        <div className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10`}>

          {footerLinks.map((footer) => (
          <div key={footer.key} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className= {` flex text-white font-poppins font-semibold`}>
              {footer.title}
            </h4>

            {/* Looping dibawah untuk mengambil objek dalam array link.
              FooterLinks(array) -> links(array) -> name dan link (objects)*/}
            <ul className='list-none flex flex-col justify-start flex-1'>
              <li className={`w-full cursor-pointer my-2 `}>
              {footer.links.map((Arrlinks) => (
                <a href={Arrlinks.link} className={` ${styles.paragraph} text-[13px] font-poppins flex flex-col py-1 hover:text-white`}>{Arrlinks.name}</a>
              ))}
              </li>
            </ul>
          </div>
          ))}

        </div>
      </div>

    <div className={`flex justify-between pt-3`}>
      <p className={`${styles.paragraph} text-[15px]`}>
        Copyright @  2021 HooBank. All Rights Reserved.
      </p>

      <div className={``}>
        <ul className={`list-none flex flex-row flex-1 justify-end  items-center pr-2`}>
        {socialMedia.map((socialMedia, index) => (
          <li key={socialMedia.id} className={`pr-4`}>
            <a href={socialMedia.link} >
            <img src={socialMedia.icon}/>
            </a>
          </li>
        ))}
      </ul>
      </div>
      

    </div>

    </section>
  )
}

export default Footer