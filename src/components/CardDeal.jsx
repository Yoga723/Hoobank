import React from 'react'
import {card} from '../assets'
import styles,  {layout} from '../styles'
import {Button} from './button'

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}> 

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
        Temukan penawaran kartu kredit yang lebih baik <br className='sm:block hidden'/> dalam beberapa langkah mudah.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus i mattis at sed integer faucibus. Aliquet ques aliquet eget mauris tortor. c Aliquet ultrices ac, ametau.
        </p>
      <Button styles="mt-10"/>
      </div>
      <div className={`${layout.sectionsImg}`}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>
    </section>
  )
}

export default CardDeal