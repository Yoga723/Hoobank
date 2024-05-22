import React from 'react'
import {stats} from '../TextForWebsite'
import styles from '../styles'


const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat, index) => 
      <div key={stat.id} className={`${index === stats.length -1 ? 'md:border-r-0' : 'md:border-r-2'} flex-1 flex justify-start items-center flex-row m-3  `}>
        <h4 className={`font-poppins text-white xs:text-[40px] xs:leading-[53px] text-[30px] leading-[43px] font-semibold`}>{stat.value}</h4>

        <p className='font-poppins xs:text-[20px] xs:leading-[26px] text-[15px] leading-[21px] font-normal text-gradient uppercase ml-3'>{stat.title}</p>
      </div>
      )}
    </section>
  )
}

export default Stats