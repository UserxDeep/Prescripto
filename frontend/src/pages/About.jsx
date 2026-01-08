import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
            <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-12'>
            <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                <p>Welcome to Prescripto, your trusted partner in simplifying healthcare management. We are dedicated to helping individuals book doctor appointments easily while keeping their healthcare journey organized and stress-free. Our platform is designed to make accessing medical services more convenient, efficient, and reliable.</p>
                <p>At Prescripto, we are committed to excellence in healthcare technology. We continuously enhance our platform by integrating modern solutions that improve usability, security, and overall experience. Whether you are scheduling your first appointment or managing ongoing care, Prescripto is built to support you at every step.</p>
                <b className='text-gray-800'>Our Vision</b>
                <p>Our vision is to create a seamless and connected healthcare experience for everyone. By bridging the gap between patients and healthcare providers, we aim to ensure timely access to quality care, empowering users to take control of their health with confidence.</p>
            </div>
        </div>

        <div className='text-xl my-4'>
            <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
        </div>

        <div className='flex flex-col md:flex-row mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                <b>Efficiency:</b>
                <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                <b>Convenience:</b>
                <p>Access to a network of trusted healthcare professionals in your area.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                <b>Personalization:</b>
                <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
            </div>
        </div>

    </div>
  )
}

export default About