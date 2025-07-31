import React from 'react'
import Icon1 from "../../assets/icons/scene.png"
import Icon2 from "../../assets/icons/Headphone2.png"
import Icon3 from "../../assets/icons/Headphone1.png"
import { desc } from 'framer-motion/client'
import { UpdateFollower } from 'react-mouse-follower'
import { FaGithub, FaTelegram } from 'react-icons/fa'

const ServicesData = [
  {
    id: 1,
    title: "Security",
    icon: Icon1,
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    delay: 0.5,

  },
  {
    id: 2,
    title: "Guarantee",
    icon: Icon1,
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    delay: 0.5,
  },
  {
    id: 3,
    title: "affordabllity",
    icon: Icon1,
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    delay: 0.5,
  },
  {
    id: 4,
    title: "Security",
    icon: Icon1,
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    delay: 0.5,

  },
  {
    id: 5,
    title: "Guarantee",
    icon: Icon1,
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    delay: 0.5,
  },
  {
    id: 6,
    title: "affordabllity",
    icon: Icon1,
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    delay: 0.5,
  },
]
export const Services = () => {
  return (
    <>
        <section className='bg-[#060910] py-12'>
            <div className='container'>
                <h1 className="pb-12 text-center font-bold font-orbitron text-[36px] text-[#87F3FF] [text-shadow:_0px_4px_15px_rgba(0,229,225,0.25)] [--stroke:1px_#5FAEB8] [-webkit-text-stroke:var(--stroke)]">Projects</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {ServicesData.map((data) =>(
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor:"white",
                                zIndex: 999,
                                followSpeed: 0.5,
                                scale: 5,
                                rotate: 720,
                                mixBlendMode:"darken",
                                backgroundElement:(
                                    <div>
                                        <img src = {data.icon} alt=""/>
                                    </div>
                                )
                            }}
                        >
                            {/* className="bg-[#060910] border-t-[0.5px] border-t-[#00E5FF] shadow-[inset_0_0_60px_rgba(0,229,255,0.15)]" */}
                            <div className='px-6 flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto rounded-xl bg-[rgba(26,29,42,0.30)] border-[0.5px] border-[#00E5FF] shadow-[inset_0_0_30px_rgba(0,229,255,0.25)]'>
                                <div className='rounded-sm'>
                                  <img src={data.icon} alt="" className='rounded-md mb-4'/>
                                </div>
                                <div className='text-center space-y-2'>
                                    <div className='flex items-center justify-between'>
                                      <h1 className="font-bold font-orbitron text-[20px] text-[#8BF3FF] [text-shadow:_0px_4px_20px_rgba(0,229,225,0.25)] [--stroke:1px_#3B6C72] [-webkit-text-stroke:var(--stroke)]">{data.title}</h1>
                                      <div
                                        className='py-2 font-normal rounded-sm flex gap-2 items-start'
                                      >
                                        <div className='text-2xl text-[#87F3FF]'>
                                        <a href=''>
                                            <FaGithub />
                                        </a>
                                        </div> 
                                        <div className='text-2xl text-[#87F3FF]'>
                                        <a href=''>
                                            <FaTelegram />
                                        </a>
                                        </div> 
                                      </div>
                                    </div>
                                    <p className='text-start text-[11px] text-[#B0BEC5]'>{data.description}</p>
                                </div>
                            </div>
                        </UpdateFollower>
                    ))}
                </div>
            </div>
        </section>  
    </>
  )
}
