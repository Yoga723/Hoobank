import React from 'react'
import {quotes} from '../assets'

function FeedbackCard({content, name, title, img}) {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img  src={quotes} alt="quotes" className='w-[42px] h-[27px] object-contain'/>
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'> {content} </p>

      <div className='flex flex-row items-center'>
        <img src={img} alt={name} className="rounded-full"/>

        <div className='flex flex-col ml-5'>
          <h4 className='font-poppins font-semibold leading-[32px] text-[20px] text-white'>{name}</h4>
          <p className='font-poppins font-normal leading-[24px] text-[16px] text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard