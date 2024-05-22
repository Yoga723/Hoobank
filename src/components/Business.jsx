import React, { useEffect } from 'react'
import { useState } from 'react'
import styles, {layout} from '../styles'
import {features} from '../TextForWebsite'
import Button from './Button'
import axios from 'axios'

const FeatureCard = ({icon, content, index, title}) => (

  <div className={`flex flex-row p-6 ${index !== features.length - 1 ? "mb-6" : "mb-0"}  rounded-[20px] border-2 feature-card cursor-pointer`}>

    <div className={`w-[64px] h-[64px] rounded-full  ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className='object-contain w-[50%] h-[50%]'/>
    </div>

    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='text-white uppercase font-poppins font-semibold flex flex-1 flex-row text-[18px] leading-[23px] mb-1'>{title}</h4>
      <p className='text-dimWhite uppercase font-poppins font-normal flex flex-1 flex-row text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
      </div>
  </div>
)

const BaseURL = "https://jsonplaceholder.typicode.com/posts";

const Business = () => {

  return (
    <section id="features" className={layout.section}>
      <div>
        <h2 className={`${styles.heading2}`}>
        </h2>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> 
          Anda yang melakukan Transaksi,<br className='sm:block hidden'/> kami yang menangani uangnya.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Dengan kartu kredit yang tepat, Anda dapat meningkatkan kehidupan finansial Anda dengan membangun kredit, mendapatkan hadiah, dan menghemat uang. Tapi dengan ratusan kartu kredit di pasaran.
        </p>

        <Button styles="mt-10"/>
      </div>

      <div className={`${layout.sectionsImg} flex-col`}>
        {features.map((feature, index) =>(
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business