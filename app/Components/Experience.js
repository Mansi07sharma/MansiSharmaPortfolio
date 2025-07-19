"use client";
import React, { useState } from 'react'
import { Calendar, MapPin, Code, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
function Experience() {
    const [idx,setIdx]=useState(null);

    const handleOpen = (index) => () => {
        setIdx(index===idx?null:index);
    }

    const experiences = [

        {
            company: "GirlScript Summer of Code (GSSoC)",
            role: "Contributor",
            duration: "Oct 2022 - Nov 2024",
            location: "Remote",
            achievements: [
                "Contributed to scalable open-source software by identifying and resolving bugs and developing new features. Delivered 21+ merged pull requests, earning 745 points.",
                "Refactored code structure to align with industry best practices, improving maintainability, readability, and scalability across multiple codebases.",
                "Gained hands-on experience with Git for managing code changes, including branching, merging, and resolving conflicts in collaborative development workflows."
            ],
            icon: Code,
        },
        {
            company: "Edunet Foundation",
            role: "Cloud and AI Intern",
            duration: "July 2024 - Aug 2024",
            location: "Remote",
            achievements: [
                "Managed and processed 250+ GB of unstructured data using IBM Cloud Object Storage, reducing retrieval latency by 20% through optimized data handling strategies.",
                "Designed Travel Thrifty, an AI-powered chatbot for travel recommendations using Watsonx Assistant and Watsonx Studio, leading to a 40% increase in user engagement.",
                "Trained and deployed ML pipelines using AutoAI, improving prediction precision by 25% across multiple datasets by leveraging automated model selection and tuning."
            ],
            icon: TrendingUp,
        }
    ];

    return (
        <section id="exp" className="lg:py-20 py-5">
            <div className="container mx-auto lg:px-24 px-6">
                <h2 className="lg:text-4xl md:text-3xl text-xl font-bold text-center lg:mb-16 mb-5 text-white ">
                    Experience
                </h2>

                <div className="lg:flex lg:gap-10 justify-center">
                    {experiences.map((exp, index) => (
                        <div key={index} className="lg:w-1/2 mt-2">
                            <div className="bg-[#242323] md:p-8 p-4 rounded-xl border-l-4 border-r-4 border-gray-400 ">
                                <div className="flex items-start space-x-4">
                                    <div className={`sm:p-3 p-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-600`}>
                                        <exp.icon className="text-white sm:w-7 sm:h-7 w-4 h-4"  />
                                    </div>
                                    <div className="flex-1">
                                        <div className='flex justify-between items-center'>
                                            <h3 className="lg:text-2xl sm:text-lg text-sm font-semibold text-white mb-2">{exp.role}</h3>
                                            <button
                                                onClick={handleOpen(index)}
                                                className="text-white hover:text-gray-300 transition md:hidden"
                                            >
                                                {idx===index? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </button>
                                        </div>
                                        <h4 className="lg:text-xl sm:text-lg text-xs text-gray-200 mb-3">{exp.company}</h4>
                                        <div className="flex items-center space-x-6 text-gray-400 mb-4">
                                            <div className="flex items-center lg:text-lg sm:text-sm text-xs space-x-2">
                                                <Calendar className='sm:w-4 sm:h-4 h-2 w-2' />
                                                <span>{exp.duration}</span>
                                            </div>
                                            <div className="flex items-center lg:text-lg sm:text-sm text-xs space-x-2">
                                                <MapPin className='sm:w-4 sm:h-4 h-2 w-2' />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <ul className={`space-y-3  ${idx===index? 'block' : 'hidden'
                                    } md:block transition-all duration-300`}>
                                    {exp.achievements.map((achievement, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <div className="lg:w-2 lg:h-2 w-1 h-1 bg-white rounded-full mt-2.5 flex-shrink-0"></div>
                                            <p className="text-gray-300 lg:text-lg text-sm leading-relaxed">{achievement}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience
