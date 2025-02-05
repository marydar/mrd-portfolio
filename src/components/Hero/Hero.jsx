import { sub } from 'framer-motion/client'
import React from 'react'
import Headphone1 from "../../assets/icons/headphone1.png"
import Headphone2 from "../../assets/icons/headphone2.png"
import Headphone3 from "../../assets/icons/headphone1.png"
import Headphone4 from "../../assets/icons/headphone2.png"

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
  return (
    <>
    <section className='bg-brandDark text-white'>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
            <div className='flex  flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
                <div className='space-y-5 text-center md:text-left'>
                    <h1 className='text-3xl lg:text-6xl font-bold font-varela'>{activeData.title}</h1>
                    <p className='text-sm leading-loose text-white/80'>{activeData.subTitle}</p>
                    <button style={{backgroundColor: activeData.bgColor}} className='px-4 py-2 inline-block font-normal rounded-sm'>buy and listen</button>
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
                                <div className='grid grid-cols-2 place-items-center cursor-pointer'>
                                    <div>
                                        <img src={item.image} alt=""  className='w-[200px]'/>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className='text-base font-bold'>{item.price}</p>
                                        <p className='text-xs font-normal text-nowrap'>{item.modal}</p>
                                    </div>

                                </div>
                            )
                        })

                        }

                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero