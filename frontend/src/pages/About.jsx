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
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Vastra, we believe fashion is more than just clothing — it is a way to express your personality and style. Our collection brings together modern designs, timeless essentials, and quality fabrics to help you find outfits that feel as good as they look.</p>
          <p>We are committed to making fashion accessible, convenient, and enjoyable for everyone. From everyday essentials to the latest trends, Vastra offers carefully selected styles for every occasion, with a seamless shopping experience right at your fingertips.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Vastra is to make fashion simple, accessible, and enjoyable for everyone. We aim to bring stylish, high-quality clothing to our customers while making every shopping experience smooth, convenient, and reliable.</p>
        </div>
      </div>
      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20  flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We are committed to delivering high-quality products that meet our standards for style, comfort, and durability. Every product is carefully selected to ensure our customers receive the quality they deserve.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20  flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We make shopping effortless by offering a simple and user-friendly online experience. From browsing our latest collections to placing your order, Vastra ensures a smooth, convenient, and hassle-free shopping journey.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20  flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At Vastra, our customers are at the heart of everything we do. We are dedicated to providing friendly, responsive, and reliable support to make every shopping experience pleasant and satisfying.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
