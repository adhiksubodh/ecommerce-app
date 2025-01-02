import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault() ; 
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & gey 20% off</p>
      <p className='text-color-gray-400 mt-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perferendis nisi vero et repellat dicta eveniet fugit temporibus ipsa molestias, consequatur atque officiis velit nemo aliquid optio assumenda qui quo.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" className='w-full sm:flex-1 outline-nine' placeholder='Enter your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
