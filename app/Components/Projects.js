"use client";
import React, { useRef, useState } from 'react';
import { Github, ExternalLink, Calendar, LucideBellDot, ChevronDown, ChevronUp } from 'lucide-react';

export const Projects = () => {
  const [idx,setIdx]=useState(null);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
  };

  const projects = [
    {
      title: "FlowMind – AI-Powered DSA Visualizer",
      date: "June 2025",
      technologies: ["React.js", "Tailwind CSS", "Express.js", "Gemini API", "Mermaid.js", "Postman"],
      description: "An AI-powered platform that generates flowcharts, multi-language code, and complexity analysis for DSA problems.",
      features: [
        "Developed an AI-powered DSA visualizer using React.js, Express.js, and Google Gemini API, converting plain-text algorithm problems into multi-language solutions (C++, Java, Python, JavaScript).",
        "Implemented dynamic flowchart generation with Mermaid.js and React, enabling step-by-step visualization of control flow and logic derived from AI-generated responses.",
        "Engineered a specialized N-Queen problem visualizer that animates backtracking algorithms in real-time, enhancing recursive problem comprehension through React-based rendering.",
        "Built a modular and scalable backend using Node.js and Express.js, integrated Gemini API for prompt handling, and tested all endpoints rigorously using Postman."
      ],
      github: "https://github.com/Mansi07sharma/AI-DSA-Visualizer",
      demo:"https://www.linkedin.com/posts/mansi-sharma-03b5822b1_flowmind-ai-dsa-activity-7345447313487650819-ly1M?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsDYa8B3lepWTvHETIU9Ar2ogKq0A6isgU"
    },
    {
      title: "LivWell – Smart Housing and Property Management",
      date: "April 2025",
      technologies: ["React.js", "Tailwind CSS", "Express.js", "Firebase", "MongoDB Atlas", "Google Maps API"],
      description: "A full-stack real estate platform with secure role-based access and scalable cloud infrastructure.",
      features: [
        "Led a 3-member team in developing a full-stack web application using React.js, Express.js, MongoDB Atlas, and Firebase, enabling smart property search, secure user authentication, and interactive dashboards.",
        "Implemented real-time location mapping via Google Maps JavaScript API, displaying property geolocations using latitude and longitude data for enhanced user navigation.",
        "Integrated voice assistant features using Web Speech API to support voice-based commands and property search—without using third-party NLP or AI APIs.",
        "Designed chatbot assistant and user dashboards (“My Property” & “My Purchases”), while managing GitHub workflows, code reviews, and deployment pipelines as project lead."
      ],
      github: "https://github.com/Mansi07sharma/LivWell-MERN-AI",
      demo:"https://www.linkedin.com/posts/mansi-sharma-03b5822b1_hackathon-reactjs-firebase-activity-7323705417706971137-NhoD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsDYa8B3lepWTvHETIU9Ar2ogKq0A6isgU"    
    }
  ];

  return (
    <div id='projects' className="bg-[#2e2d2d] lg:mt-20 mt-5 lg:p-10 p-5 lg:pb-20 pb-5">
      <div className="container mx-auto px-6">
        <h2 className="lg:text-4xl md:text-3xl text-xl font-bold text-center lg:mb-16 mb-7 text-white">
          Featured Projects
        </h2>

        {/* 🔄 Grid for Large Screens */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} index={idx} setIdx={setIdx}/>
          ))}
        </div>

        {/* 🆕 Horizontal Scroll for Small Screens */}
        <div className="lg:hidden relative">
          {/* 🆕 Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute md:left-[-100] left-[-25] top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 text-white rounded-full shadow-md"
          >
            &#8592;
          </button>
          <button
            onClick={scrollRight}
            className="absolute md:right-[-100] right-[-25] top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 text-white rounded-full shadow-md"
          >
            &#8594;
          </button>

          {/* 🆕 Scroll Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 scroll-smooth snap-x snap-mandatory px-2"
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-[100%] snap-start">
                <ProjectCard project={project} key={index} index={index} activeIdx={idx} setIdx={setIdx}/>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="flex justify-center items-center lg:mt-10 mt-5">
          <div className="sm:text-xl text-xs flex gap-2 items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white lg:px-6 lg:py-3 px-3 py-1 rounded-full shadow-lg lg:text-xl lg:font-bold">
            <LucideBellDot className="lg:h-6 h-5 lg:w-6 w-5" />
            Some awesome projects are in queue...
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Extracted ProjectCard Component
const ProjectCard = ( {project,index,activeIdx,setIdx}) => (
  <div className="rounded-xl border-l-4 mb-4 bg-[#242323] border-gray-400 overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02]">
    <div className="p-8 ">
      <div className="flex items-start justify-between gap-2 mb-4">
        <div>
          <h3 className="lg:text-2xl sm:text-xl text-sm font-semibold text-white mb-2">{project.title}</h3>
          <div className="flex items-center lg:text-lg text-sm space-x-2 text-gray-400">
            <Calendar size={16} />
            <span>{project.date}</span>
          </div>
        </div>
        <div className="sm:flex sm:space-x-3 items-center justify-center">
          <a
            href={project.github}
            className="text-gray-400 hover:text-white transition-colors"
            title="View on GitHub"
            target="_blank" rel="noopener noreferrer"
          >
            <Github size={20}/>
          </a>
          <a
            href={project.demo}
            className="text-gray-400 hover:text-white transition-colors"
            title="Live Demo"
            target="_blank" rel="noopener noreferrer"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      <p className="text-gray-300 mb-4 sm:text-lg text-">{project.description}</p>
      <button className='md:hidden' onClick={()=>setIdx(index===activeIdx?null:index)}>
        {index===activeIdx?<ChevronUp className='w-5 h-5 text-white'/>:<ChevronDown className='w-5 h-5 text-white'/>}
      </button>
      <ul className={`space-y-2 mb-6 ${index===activeIdx? 'block' : 'hidden'
        } md:block transition-all duration-300`}>
        {project.features.map((feature, idx) => (
          <li key={idx} className="flex items-start space-x-3">
            <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 flex-shrink-0"></div>
            <p className="text-gray-400 text-sm leading-relaxed lg:font-semibold">{feature}</p>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 lg:font-bold py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);
