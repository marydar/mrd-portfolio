import React from 'react'
import { FaGoogle, FaInstagram, FaTelegram, FaFacebook } from 'react-icons/fa'
import { FaMapLocation , FaPhone} from 'react-icons/fa6'

export const Footer = () => {
  return (
    <>
    <footer className='bg-primary pt-12 pb-8 text-white'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {/* company details */}
                <div className='space-y-6'>
                    <h1 className='text-3xl font-bold uppercase'>Playing</h1>
                    <p className='text-sm max-w-[300px]'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <div>
                        <p className='flex items-center gap-2'>
                            <FaPhone/>
                            +1 (123) 456 7890
                        </p>
                        <p className='flex items-center gap-2 mt-2'> 
                            {" "}
                            <FaMapLocation/> Noida, Utter Pradesh
                        </p>
                    </div>
                </div>
                {/* footer links */}
                <div className='space-y-6'>
                    <h1 className='text-3xl font-bold uppercase'>Quick Links</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        <div>
                            <ul className='space-y-2'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='space-y-2'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* social links */}
                <div className='space-y-6'>
                    <h1 className='text-3xl font-bold '>Follow Us</h1>
                    <div className='flex items-center gap-3'>
                        <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                        <FaInstagram className='text-3xl hover:scale-105 duration-300' />
                        <FaTelegram className='text-3xl hover:scale-105 duration-300' />
                        <FaGoogle className='text-3xl hover:scale-105 duration-300' />
                    </div>
                    <div className='flex items-center gap-3'>
                        <p> Payment Methods</p>
                    </div>
                </div>

            </div>
        </div>
    </footer>
    </>
  )
}
