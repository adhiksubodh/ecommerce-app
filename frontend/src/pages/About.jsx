import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
    <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
    <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit, quod autem natus veritatis, vitae aut eligendi perspiciatis libero rerum sit eius quisquam obcaecati porro repellat repellendus nemo quasi hic.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas quis labore placeat. Dolores enim eos possimus ducimus consequuntur, sint neque unde cum eligendi voluptatem libero molestiae expedita aperiam atque.</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum eos fugiat saepe possimus, quidem aliquam expedita necessitatibus porro est placeat inventore quaerat voluptate culpa perferendis non unde facere quisquam!</p>
    </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Qualiity Assurance:</b>
        <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reprehenderit voluptates dolore labore facere, doloremque officiis nesciunt distinctio debitis dolor ipsa veritatis aliquam laborum vitae nulla! Illum officia illo consequatur.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus commodi ex culpa magni non sapiente doloremque corrupti fugit voluptates maiores, iste assumenda excepturi perspiciatis nostrum rem. Illum recusandae fugit a.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Excptional Customer Service:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam odit maxime quia consectetur quo earum laborum ab veritatis! Aperiam corrupti dicta commodi ad provident voluptatibus culpa obcaecati nam vel?</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
