import React from 'react'
import styles from '../styles'
import { logo } from '../assets'
import {clients} from '../TextForWebsite'

const Client = () => {
  return (
    <section  className={`${styles.flexCenter} my-3` }>
      <div className={`${styles.flexCenter} flex-wrap w-full px-6`}>
        {clients.map((client) => (
          <div key={client.id} className={`${styles.flexCenter} flex-1 min-w-[120px] sm:min-w-[192px] feedback-card rounded-md py-3`}>
            <img src={client.logo} alt="Clients" className={` sm:w-[192px] w-[100px] object-contain`}/>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Client