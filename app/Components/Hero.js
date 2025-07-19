"use client";
import React from 'react'
import { AtSign, Download, Github, Linkedin, Code2, ArrowBigDownDash } from 'lucide-react'
import Education from './Education'
import Experience from './Experience'
import { Projects } from './Projects'
import { Skills } from './Skills'
import { Achievements } from './Achievements'
import { Contact } from './Contact'
import Navbar from './Navbar'

export default function Hero() {
    const handleResume=()=>{
        const resumeUrl = 'https://drive.google.com/file/d/1bG__JnNuH9j4CbV3hPPoGBqIh3Sm1oym/view?usp=drivesdk'; 
        window.open(resumeUrl, '_blank'); 
    }
    return (
        <>
        <Navbar/>
            <div className='flex flex-col justify-center items-center'>
                <div className='sm:mt-5 mt-10'>
                    <img src="girl.png" className='lg:w-lg lg:h-lg sm:w-sm sm:h-sm w-70' />
                </div>
                <div className='flex flex-col  pr-5 mt-0 px-10 justify-center items-center text-center md:px-30 md:gap-5'>
                    <h1 className='text-white lg:text-[5vh]  font-bold '>Software Engineer Specializing in Scalable Systems and Clean Architecture</h1>
                    <p className="text-gray-400 lg:text-xl text-sm">I&apos;m a passionate Software Developer skilled in Data Structures, Algorithms, and Full-Stack Web Development. I love solving complex problems, contributing to open-source, and creating clean, efficient systems that scale. Currently focused on leveraging AI and system design to build meaningful digital products.</p>
                    <div className='flex  gap-10 items-center'>
                        <button onClick={handleResume} className="flex lg:gap-3 gap-1 justify-center items-center border-2 border-white lg:px-10 px-3 py-1 lg:py-3 lg:text-xl rounded-4xl lg:font-semibold mt-5 hover:bg-white hover:text-black text-white bg-[#2e2d2d] hover:cursor-pointer hover:transition-transform hover:scale-103"><Download className="lg:w-7 lg:h-7 w-5 h-5" />Resume</button>
                        <a href='#contact' className="flex lg:gap-3 gap-1 justify-center items-center border-2 border-white lg:px-10 px-3 py-1 lg:py-3 lg:text-xl rounded-4xl lg:font-semibold mt-5 hover:bg-white hover:text-black text-white bg-[#2e2d2d] hover:cursor-pointer hover:transition-transform hover:scale-103"><AtSign className="lg:w-7 lg:h-7 w-5 h-5" />Hire Me</a>
                    </div>
                </div>

            </div>
            {/* <div className="flex justify-center space-x-8 ">
                <a href="https://linkedin.com/mansi-sharma" className="text-gray-400 flex flex-col items-center font-semibold hover:text-blue-400 transition-colors">
                    <Linkedin size={35} />Linkeldn
                </a>
                <a href="https://github.com/Mansi07sharma" className="text-gray-400 flex flex-col items-center font-semibold hover:text-blue-400 transition-colors">
                    <Github size={35} />Github
                </a>
                <a href="https://leetcode.com/mansi-sh07" className="text-gray-400 flex flex-col items-center font-semibold hover:text-blue-400 transition-colors">
                    <Code2 size={35} />LeetCode
                </a>
            </div>*/}
            <div className="flex justify-end ml-10 mt-10 mb-10 transform -translate-x-1/2 animate-bounce">
                <ArrowBigDownDash className="text-gray-400 lg:w-14 lg:h-14 w-10 h-10"  />
            </div>
            <Education />
            <Experience />  
            <Projects />
            <Skills />
            <Achievements />
            <Contact />
        </>
    )
}
