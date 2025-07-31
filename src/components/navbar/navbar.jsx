import React from "react";
import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const Navbar = () => {
    const NavbarMenue = [
        {
            id: 1,
            name: "About",
            link: "#"
        },
        {
            id: 2,
            name: "Projects",
            link: "#"
        },
        {
            id: 3,
            name: "Contact",
            link: "#" 
        },
    ]
  return (
    <>
    <div className="bg-[#060910] text-white py-8 font-varela px-4 md:px-0">
    <motion.nav 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{ duration: 1, delay: 0.5 }}
    className="container flex justify-between items-center"
    >
        <div>
            {/* <a href="#" className="text-[36px] font-bold uppercase font-orbitron text-[#028392] stroke-[#BADADE] stroke-[3.5] drop-shadow-lg">
                MRD
            </a> */}
            <a href="#" className="font-medium font-orbitron text-[36px] text-[#028392] [letter-spacing:1.8px] [text-shadow:_0_4px_5px_rgba(143,243,255,0.25)] [--stroke:0.5px_#BADADE] [-webkit-text-stroke:var(--stroke)]">
                MRD
            </a>
        </div>
        <div className="hidden md:block">
            <ul className="flex items-center gap-4">
                {NavbarMenue.map((item) => (
                    <li key = {item.id}>
                        <UpdateFollower
                        mouseOptions={{
                            backgroundColor:"white",
                            zIndex: 999,
                            followSpeed: 1.5,
                            scale: 5,
                            mixBlendMode:"difference",
                        }}
                        >
                        <a href = {item.link} className="font-medium font-orbitron text-[16px] text-[#028392] [letter-spacing:1.8px] [text-shadow:_0_4px_5px_rgba(143,243,255,0.25)] [--stroke:0.5px_#BADADE] [-webkit-text-stroke:var(--stroke)]">
                            {item.name}
                        </a>
                        </UpdateFollower>
                    </li>
                ))}
                <UpdateFollower
                    mouseOptions={{
                        backgroundColor:"white",
                        zIndex: 999,
                        followSpeed: 1.5,
                        scale: 5,
                        mixBlendMode:"difference",
                    }}
                >
                </UpdateFollower>
            </ul>
        </div>
        <div className="md:hidden"> 
            <MdMenu className="text-4xl text-[#028392]"/>
        </div>
    </motion.nav>
    </div>
    </>
  )
};

export default Navbar;