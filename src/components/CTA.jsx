import React from 'react'
import styles from '../styles'
import Button from './Button'

// CTA stand for Click To Actions
const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px] flex-col sm:flex-row box-shadow`}>
      <div className={`flex-1 flex flex-col items-start`}>
        <h2 className={`${styles.heading2} mb-3 p-3 sm:p-0`}>
          Ayo coba layanan kami sekarang!
        </h2>
        <p className={`${styles.paragraph} sm:max-w-[470px] mt-5`}>
        Semua yang Anda butuhkan untuk menerima pembayaran kartu dan mengembangkan bisnis Anda di mana saja di dunia ini.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 md:mr-8 md:mb-0 mb-4`}>
        <Button />
      </div>

    </section>
  )
}

export default CTA