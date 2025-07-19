"use client";
import React from 'react'
import { Code2, Workflow, UserPlus, Layers3, BookOpenCheck, LucideAlignJustify } from 'lucide-react'
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [color, setColor] = useState("bg-[#2e2d2d]")
    const [head,setHead] = useState(false)

    const showheader = () => {
        setHead(!head)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setColor("bg-gray-600/50")
            } else {
                setColor("bg-[#2e2d2d]")
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <div className={`${color} w-full lg:h-20 h-17  flex md:justify-around justify-between items-center fixed top-0 z-50`}>
            <div>
                <img src="name.png" className='lg:w-60 w-40 ml-3' alt="img" />
            </div>
            <div className='h-full text-white justify-center items-center lg:text-lg lg:px-5 text-xs md:flex hidden'>
                <ul className='flex lg:gap-20 gap-10'>
                    <a href='#' className='flex justify-center items-center gap-2 transition-colors duration-300 relative group'><BookOpenCheck className='lg:h-5 lg:w-5 h-4 w-4 ' />About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span></a>

                    <a href='#projects' className='flex justify-center items-center gap-2 transition-colors duration-300 relative group'><Code2 className='lg:h-5 lg:w-5 h-4 w-4 ' />Projects
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span></a>

                    <a href='#exp' className='flex justify-center items-center gap-2 transition-colors duration-300 relative group'><Workflow className='lg:h-5 lg:w-5 h-4 w-4 ' />Experience
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span></a>

                    <a href='#skills' className='flex justify-center items-center gap-2 transition-colors duration-300 relative group'><Layers3 className='lg:h-5 lg:w-5 h-4 w-4 ' />Skills
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span></a>

                    <a href='#contact' className='flex justify-center items-center gap-2 transition-colors duration-300 relative group'><UserPlus className='lg:h-5 lg:w-5 h-4 w-4 ' />Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span></a>

                </ul>
                {/* bg-gray-600/50 */}
            </div>
            <div className='md:hidden absolute right-10 top-5'>
                <LucideAlignJustify className='w-7 h-7 text-white' onClick={showheader}/>
            </div>

            <div>
                <div className={`absolute top-13 right-0 rounded-l-xl w-1/4 p-3 bg-gray-900/90 z-51 flex flex-col justify-center items-center gap-5 text-white transition-transform duration-300 ${head ? 'translate-x-0' : 'translate-x-full'}`}>
                    <ul className='flex flex-col gap-5 sm:text-lg text-xs'>
                        <a href='#' className='flex justify-center items-center gap-2 transition-colors duration-300 relative group'><BookOpenCheck className='lg:h-5 lg:w-5 sm:h-4 h-3 w-3 sm:w-4 ' />About</a>
                        <a href='#projects' className='flex justify-center items-center gap-2 transition-colors duration-300 relative group'><Code2 className='lg:h-5 lg:w-5 sm:h-4 h-3 w-3 sm:w-4 ' />Projects</a>
                        <a href='#exp' className='flex justify-center items-center gap-2 transition-colors duration-300 relative group'><Workflow className='lg:h-5 lg:w-5 sm:h-4 h-3 w-3 sm:w-4 ' />Experience</a>
                        <a href='#skills' className='flex justify-center items-center gap-2 transition-colors duration-300 relative group'><Layers3 className='lg:h-5 lg:w-5 sm:h-4 h-3 w-3 sm:w-4 ' />Skills</a>
                        <a href='#contact' className='flex justify-center items-center gap-2 transition-colors duration-300 relative group'><UserPlus className='lg:h-5 lg:w-5 sm:h-4 h-3 w-3 sm:w-4 ' />Contact</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}
