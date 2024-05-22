import React from 'react'
import styles from '../styles'
import {arrowUp} from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}>
      <div className={`${styles.flexCenter} flex-col bg-primary rounded-full w-[100%] h-[100%] feature-card`}>

        <div className={`${styles.flexStart} flex-row `}>
          {/* Gambar Arrow berada disamping text "Get" karena className divnya flex-row, p termasuk ke row-1 dan img termasuk ke row-2 */}
          <p className='font-poppins mr-2 font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient '> Get </span>
          </p>
          <img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt='arrowUp'/>
        </div>

        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'> Started </span>
          </p>

      </div>
    </div>
  )
}

export default GetStarted