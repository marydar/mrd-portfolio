import { FaInstagram, FaTelegram, FaGithub, FaEnvelope } from 'react-icons/fa'
import { UpdateFollower } from "react-mouse-follower";

const NavbarMenue = [
        {
            id: 1,
            name: "About",
            link: "#about"
        },
        {
            id: 2,
            name: "Projects",
            link: "#projects"
        },
        {
            id: 3,
            name: "Contact",
            link: "#contact" 
        },
    ]
export const Footer = () => {
  return (
    <>
    <footer id='contact' className="cursor-none bg-[#060910] border-t-[0.5px] border-t-[#00E5FF] shadow-[inset_0_0_60px_rgba(0,229,255,0.15)]">
        <div className="container flex items-center justify-evenly py-4 px-4 md:px-8">
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
                                        cursor:'none',
                                    }}
                                    >
                                    <a href = {item.link} className="cursor-none font-medium font-orbitron text-[16px] text-[#028392] [letter-spacing:1.8px] [text-shadow:_0_4px_5px_rgba(143,243,255,0.25)] [--stroke:0.5px_#BADADE] [-webkit-text-stroke:var(--stroke)]">
                                        {item.name}
                                    </a>
                                    </UpdateFollower>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <UpdateFollower
                                mouseOptions={{
                                    backgroundColor:"white",
                                    zIndex: 999,
                                    followSpeed: 1.5,
                                    scale: 5,
                                    mixBlendMode:"difference",
                                }}
                            >
                    <div
                        className='cursor-none py-2 font-normal rounded-sm flex gap-2 items-start'
                    >
                        <div className='cursor-none text-3xl text-[#87F3FF]'>
                        <a href='https://github.com/marydar' target="_blank" className='cursor-none'>
                            <FaGithub />
                        </a>
                        </div> 
                        <div className='text-3xl text-[#87F3FF]'>
                        <a href='https://t.me/Maryamdar0' target="_blank" className='cursor-none'>
                            <FaTelegram />
                        </a>
                        </div> 
                        <div className='text-3xl text-[#87F3FF]'>
                        <a href='https://www.instagram.com/maryamdar_/' target="_blank" className='cursor-none'>
                            <FaInstagram />
                        </a>
                        </div> 
                        <div className='text-3xl text-[#87F3FF]'>
                        <a href='mailto:maryamdar1384@gmail.com' target="_blank" className='cursor-none'>
                            <FaEnvelope />
                        </a>
                        </div> 
                    </div>
                    </UpdateFollower>
        </div>
    </footer>
    </>
  )
}
