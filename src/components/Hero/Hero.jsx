import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaTelegram, FaInstagram, FaGlobe} from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa' 
import { UpdateFollower } from 'react-mouse-follower'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import { ProjectsData } from '../data/projects-data'

const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 0,
            y: 100,
            scale: 0.5,
            transition: {
                duration: 0.5,
                ease: easeInOut,
            },
        },
    }
}
const abouTMeData = {
    id: 1,
    title: "Software Developer",
    subTitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
}
// const indices = [3, 5, 6];
const indices = [5, 6, 7];
const SelectedProjectsData = indices.map(index => ProjectsData[index]);



const Hero = () => {
    const [activeData, setActiveData] = React.useState(SelectedProjectsData[0]);
    const handleActiveData = (data) => {
        setActiveData(data)
    }
  return (
    <>
    <section id='about' className='bg-[#060910] bg-opacity-30 text-white font-varela border-b border-[#00E5FF] drop-shadow-xl'>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
            {/* headphone info */}
            <div className='flex  flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
                <div className='space-y-5 text-center md:text-left'>
                    <AnimatePresence mode='wait'>
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 9999,
                                followSpeed: 0.5,
                                rotate: -720,
                                mixBlendMode: "difference",
                                scale: 10,
                             }}
                        >
                            <motion.h1 
                                key={abouTMeData.title}
                                variants={fadeUp(0.2)}
                                initial='hidden'
                                animate='show'
                                exit='exit'
                                className="font-bold font-orbitron text-[48px] text-[#87F3FF] [text-shadow:_5px_10px_15px_rgba(0,229,225,0.25)] [--stroke:1px_#5FAEB8] [-webkit-text-stroke:var(--stroke)]"
                            >
                                {abouTMeData.title}
                            </motion.h1>
                        </UpdateFollower>
                    </AnimatePresence>
                    <AnimatePresence mode='wait'>
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 9999,
                                followSpeed: 0.5,
                                rotate: -720,
                                mixBlendMode: "difference",
                                scale: 10,
                             }}
                        >
                            <motion.p
                                key={abouTMeData.id }
                                variants={fadeUp(0.3)}
                                initial='hidden'
                                animate='show'
                                exit='exit'
                                className='text-sm leading-loose text-[#5AA2AA]'
                            >
                                {abouTMeData.subTitle}
                            </motion.p>
                        </UpdateFollower>
                    </AnimatePresence>
                    <AnimatePresence mode='wait'>
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 9999,
                                followSpeed: 0.5,
                                rotate: -720,
                                mixBlendMode: "difference",
                                scale: 10,
                             }}
                        >
                            <motion.h1 
                                key={abouTMeData.title}
                                variants={fadeUp(0.2)}
                                initial='hidden'
                                animate='show'
                                exit='exit'
                                className="font-bold font-orbitron text-[48px] text-[#87F3FF] [text-shadow:_5px_10px_15px_rgba(0,229,225,0.25)] [--stroke:1px_#5FAEB8] [-webkit-text-stroke:var(--stroke)]"
                            ></motion.h1>
                            <motion.div
                                key={abouTMeData.id }
                                variants={fadeUp(0.3)}
                                initial='hidden'
                                animate='show'
                                exit='exit'
                                className='py-2 font-normal rounded-sm flex gap-2 justify-center md:justify-start'
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
                                <div className='text-2xl text-[#87F3FF]'>
                                <a href=''>
                                    <FaInstagram />
                                </a>
                                </div> 
                                <div className='text-2xl text-[#87F3FF]'>
                                <a href=''>
                                    <FaEnvelope />
                                </a>
                                </div> 
                                {/* <FaGithub/>
                                <FaTelegram/>
                                <FaInstagram/>
                                <FaEmail/> */}
                            </motion.div>
                        </UpdateFollower>
                    </AnimatePresence>
                    {/* headphones seprater */}
                    <div className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                        <div className='w-20 h-[1px] bg-[#5AA2AA]'></div>
                        <p className='uppercase text-[16px] text-[#5AA2AA]'>Selected Projects</p> 
                        <div className='w-20 h-[1px] bg-[#5AA2AA]'></div>
                    </div>
                    {/* swich headphones*/}
                    <div className='grid grid-cols-3 gap-10'>
                        {SelectedProjectsData.map((item) =>{
                            return(
                                    <div 
                                        key={item.id}
                                        onClick={() => handleActiveData(item)}
                                        className='grid grid-cols-2 cursor-pointer gap-2'>
                                        <div className='border-[1px]border-[#5FAEB8] rounded-full'>
                                        <img src={item.image} alt="" className="w-[60px] h-[60px] rounded-full object-cover object-center"/>
                                        </div>
                                        <div className='space-y-2'>
                                            <p 
                                                className="h-[30px] shrink-0 truncate font-bold font-orbitron text-[12px] text-[#87F3FF] [text-shadow:_5px_10px_15px_rgba(0,229,225,0.25)] [--stroke:1px_#5FAEB8] [-webkit-text-stroke:var(--stroke)]">
                                                {item.title}
                                            </p>
                                            <div className='flex items-center gap-2'>
                                                <div className='text-2xl text-[#87F3FF]'>
                                                    <a href={item.githubLink} target="_blank">
                                                        <FaGithub />
                                                    </a>
                                                </div> 
                                                {item.websiteLink && 
                                                    <div className='text-2xl text-[#87F3FF]'>
                                                        <a href={item.websiteLink} target="_blank">
                                                            <FaGlobe />
                                                        </a>
                                                    </div>
                                                }
                                            </div>
                                        </div>

                                    </div>
                            )
                        })

                        }

                    </div>
                </div>
            </div>  
            {/* image */}
            <div className='flex flex-col justify-center items-center pb-[50px] md:pb-[70px] xl:pb-[90px]'>
                <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeData.id }
                            initial={{ opacity: 0, scale:0.9, y: 100 }}
                            animate={{ opacity: 1, scale:1, y: 0 }}
                            transition={{duration: 0.4, delay: 0.2, ease:easeInOut}}
                            exit={{ opacity: 0, scale:0.9, y: 100, 
                                transition: { duration: 0.2 }
                            }}
                            className='pb-[15px] md:pb-[25px] xl:pb-[40px] w-[300px] md:w-[400px] xl:w-[550px] rounded-[20px] bg-[#8bf3ff] border-[2px] border-[#3B6C72] shadow-[0_4px_15px_rgba(135,243,255,0.25)]'
                            
                            >
                                <img
                                    src={activeData.image} alt='' className='w-[300px] md:w-[400px] xl:w-[550px] rounded-lg'
                                />
                            </motion.div>
                </AnimatePresence>
            </div>
            {/* whatsapp icon */}
            {/* <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-dif'> */}
            <div className='text-3xl text-white fixed bottom-10 right-10'>
                <a href=''>
                    {/* <FaWhatsapp /> */}
                </a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero