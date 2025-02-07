import { sub } from 'framer-motion/client'
import React, { act } from 'react'
import Headphone1 from "../../assets/icons/headphone1.png"
import Headphone2 from "../../assets/icons/headphone2.png"
import Headphone3 from "../../assets/icons/headphone1.png"
import Headphone4 from "../../assets/icons/headphone2.png"
import { FaWhatsapp } from 'react-icons/fa'
import { UpdateFollower } from 'react-mouse-follower'
import { AnimatePresence, easeIn, easeInOut, motion } from 'framer-motion'

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
const HeadphoneData = [
    {
        id: 1,
        image: Headphone1,
        title: "Headphones wireless 2",
        subTitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        price: "₹ 199",
        modal:"Modal Brown",
        bgColor: "#8b5958",

    },
    {
        id: 2,
        image: Headphone2,
        title: "Headphones wireless 3",
        subTitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        price: "₹ 199",
        modal:"lime Green",
        bgColor: "#638153",

    },
    {
        id: 3,
        image: Headphone3,
        title: "Headphones wireless 4",
        subTitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        price: "₹ 199",
        modal:"ocean Blue",
        bgColor: "#5d818c",

    },
]

const Hero = () => {
    const [activeData, setActiveData] = React.useState(HeadphoneData[0]);
    const handleActiveData = (data) => {
        setActiveData(data)
    }
  return (
    <>
    <section className='bg-brandDark text-white font-varela'>
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
                                key={activeData.title}
                                variants={fadeUp(0.2)}
                                initial='hidden'
                                animate='show'
                                exit='exit'
                                className='text-3xl lg:text-6xl font-bold font-varela'
                            >
                                {activeData.title}
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
                                key={activeData.id }
                                variants={fadeUp(0.3)}
                                initial='hidden'
                                animate='show'
                                exit='exit'
                                className='text-sm leading-loose text-white/80'
                            >
                                {activeData.subTitle}
                            </motion.p>
                        </UpdateFollower>
                    </AnimatePresence>
                    <AnimatePresence mode='wait'>
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: activeData.bgColor,
                                zIndex: 9999,
                                followSpeed: 0.5,
                                rotate: -720,
                                scale: 10,
                                backgroundElement: (
                                    <div>
                                        <img src={activeData.image}></img>
                                    </div>
                                ),
                             }}
                        >
                            <motion.button
                                key={activeData.id }
                                variants={fadeUp(0.3)}
                                initial='hidden'
                                animate='show'
                                exit='exit'
                                style={{backgroundColor: activeData.bgColor}} className='px-4 py-2 inline-block font-normal rounded-sm'
                            >
                                buy and listen
                            </motion.button>
                        </UpdateFollower>
                    </AnimatePresence>
                    {/* headphones seprater */}
                    <div className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                        <div className='w-20 h-[1px] bg-white'></div>
                        <p className='uppercase text-sm'>Top Headphones for you</p> 
                        <div className='w-20 h-[1px] bg-white'></div>
                    </div>
                    {/* swich headphones*/}
                    <div className='grid grid-cols-3 gap-10'>
                        {HeadphoneData.map((item) =>{
                            return(
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: item.bgColor,
                                        zIndex: 9999,
                                        followSpeed: 0.5,
                                        scale: 5,
                                        text: "view details",
                                        textFontSize: "3px",
                                    }}
                                >
                                    <div 
                                        key={item.id}
                                        onClick={() => handleActiveData(item)}
                                        className='grid grid-cols-2 place-items-center cursor-pointer'>
                                        <div>
                                            <img src={item.image} alt=""  className='w-[200px]'/>
                                        </div>
                                        <div className='space-y-2'>
                                            <p className='text-base font-bold'>{item.price}</p>
                                            <p className='text-xs font-normal text-nowrap'>{item.modal}</p>
                                        </div>

                                    </div>
                                </UpdateFollower>
                            )
                        })

                        }

                    </div>
                </div>
            </div>  
            {/* image */}
            <div className='flex flex-col justify-end items-center'>
                <AnimatePresence mode='wait'>
                        <motion.img
                            key={activeData.id }
                            initial={{ opacity: 0, scale:0.9, y: 100 }}
                            animate={{ opacity: 1, scale:1, y: 0 }}
                            transition={{duration: 0.4, delay: 0.2, ease:easeInOut}}
                            exit={{ opacity: 0, scale:0.9, y: 100, 
                                transition: { duration: 0.2 }
                            }}
                            src={activeData.image} alt='' className='w-[300px] md:w-[400px] xl:w-[550px]'
                        />
                </AnimatePresence>
            </div>
            {/* whatsapp icon */}
            {/* <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-dif'> */}
            <div className='text-3xl text-white fixed right-10'>
                <a href=''>
                    <FaWhatsapp />
                </a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero