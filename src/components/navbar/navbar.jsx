import React from "react";
import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";

const Navbar = () => {
    const NavbarMenue = [
        {
            id: 1,
            name: "Home",
            link: "#"
        },
        {
            id: 2,
            name: "Categories",
            link: "#"
        },
        {
            id: 3,
            name: "Blog",
            link: "#" 
        },
        {
            id: 4,
            name: "About",
            link: "#"
        },
        {
            id: 5,
            name: "Contact",
            link: "#" 
        },
    ]
  return (
    <>
    <div className="bg-brandDark text-white py-4">
    <nav className="container flex justify-between items-center">
        <div>
            <a href="#" className="text-xl font-bold uppercase">
                Playing / <span className="font-extralight text-white-70">Market</span>
            </a>
        </div>
        <div className="hidden md:block">
            <ul className="flex items-center gap-4">
                {NavbarMenue.map((item) => (
                    <li key = {item.id}>
                        <a href = {item.link} className="inline-block text-sm py-2 px-3 uppercase">
                            {item.name}
                        </a>
                    </li>
                ))}
                <div>
                    <SlEarphones />
                </div>
            </ul>
        </div>
        <div>
            <MdMenu />
        </div>
    </nav>
    </div>
    </>
  )
};

export default Navbar;