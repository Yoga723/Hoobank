import React from 'react'
import styles, {layout} from '../styles'
import {apple, bill, google} from '../assets'

const Billing = () => {
  return (
    <section className={layout.sectionReverse} id="product">
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="Billing" className='w-[100%] h-[100%] relative z-[5]'/>

        <div className='absolute z-[3]  -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] bottom-0 -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
        Kendalikan penagihan & faktur <br className='sm:block hidden'/> Anda dengan mudah.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          lorem ipsum dolor sit implomat platea placerat aliporttitor integer. Fusce ipsum orci rhoncus neque.
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple" className='w-[128px] h-[42px] cursor-pointer object-contain mr-5' />
          
          <img src={google} alt="google" className='w-[128px] h-[42px] cursor-pointer object-contain' />
        </div>
      </div>
    </section>
  )
}

export default Billing