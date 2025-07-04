import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import AppStore from '../assets/App Store.jpg';
import PlayStore from '../assets/Play Store.jpg'


const Footer = () => {
  return (
    <footer className='bg-slate-700 flex'>
        <div className='container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between gap-2 '>
          
            <div className='text-left text-slate-400 mb-5'>
              <div className='font-bold text-black text-xl mt-2 mb-3 flex items-center gap-1'> <FaRegCopyright size={21} className='hover:text-primary-100'/> <p>All Rights Reserved 2025.</p> </div>
              <p>This is a clone of Blinkit, developed for educational and demonstration purposes.</p>
              <p>and seamless user experience.</p>
              <p className='mt-3'>Developer : Amit Yadav</p>
              <p>Email : myquicktrolley@gmail.com</p>
              <div className=' text-left flex gap-4 mt-3'>
                <p>Privacy Policy</p>  
                <p>Terms & Conditions</p>  
                <p>Refund & Cancellation Policy</p>
              </div>
              <div>
                <p className='mt-2'>Credit & Credentials : Logo is Designed by @Keshav-Designer  </p>
              </div>
            </div>


          <div className='md:flex justify-evenly xl:gap-44'>

            {/* Download App */}
            <div className='flex flex-col items-center justify-center gap-5 mb-5'>
              <p className='font-bold text-xl '>Download App</p>
          
              <div className='flex items-center justify-center gap-3'>      
                <div className={` w-32 h-9 hover:shadow-md hover:border-neutral-100 cursor-pointer `}>
                  <img
                    src={AppStore}
                    className='w-full h-full rounded-full'
                    alt='Download App Store'
                  />
                </div>
                <div className={` w-32 h-9 rounder hover:shadow-md hover:border-neutral-100 cursor-pointer`}>
                  <img
                    src={PlayStore}
                    className='w-full h-full rounded-full'
                    alt='Download Play Store'
                  />
                </div>
              </div>

            </div>


            {/* Profile Links & Id */}
            <div className='flex items-center justify-center space-y-3 gap-2 '>

              <div className='flex flex-col items-start space-y-4 p-3 mt-3 text-slate-400'>
              <p>Fallow us on @GitHub</p>
              <p>Fallow us on @instagram</p>
              <p>Fallow us on @Linkedin</p>
              </div>

              <div className='flex flex-col space-y-4 text-2xl items-center '>

                <a href='https://github.com/AMITYADAV4005' 
                  className='hover:text-gray-200'>
                  <VscGithub size={28}/>
                </a>
                <a href='https://www.instagram.com/amit__0204?igsh=MWE1ZWs4azg5N2w2Mw==' 
                  className='hover:text-red-500'>
                  <FaInstagram size={28}/>
                </a>
                <a href='https://www.linkedin.com/in/amit-yadav-8b0571344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
                  className='hover:text-blue-600 '>
                  <FaLinkedin size={28}/>
                </a>

              </div>

            </div>

          </div>

        </div>
    </footer>
  )
}

export default Footer
