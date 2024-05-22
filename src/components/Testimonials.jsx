import React from 'react'
import styles, {layout} from '../styles'
import {feedback} from '../TextForWebsite'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`} id="clients">

      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>

      <div className='flex md:flex-row flex-col w-full justify-between items-center sm:mb:16 mb-6 relative z-[1]'>
        <h1 className={`${styles.heading2} `}>
          Apa yang pengguna <br className='sm:block hidden'/> katakan mengenai kami
        </h1>
        <p className={`${styles.paragraph} w-full md:ml-0 md:mt-0 mt-6 max-w[450px] text-left`} >
        Semua yang Anda butuhkan untuk menerima pembayaran kartu dan mengembangkan bisnis Anda di mana saja di dunia ini.
        </p>
      </div>

        {/* Cards DIV */}
      <div className={`flex flex-wrap md:justify-between justify-center w-full feedback-container relative z-[1]`}>
        {feedback.map((feedback) => (
          <FeedbackCard key={feedback.id} {...feedback}/>
        ))}
      </div>

    </section>
    )
}

export default Testimonials