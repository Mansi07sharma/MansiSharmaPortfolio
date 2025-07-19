import React from 'react';
import { LucideArrowBigRightDash } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C", "C++", "Java", "JavaScript", "SQL"],

    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
 
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.IO"],

    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Firebase Realtime DB"],
 
    },
    {
      title: "Tools & Cloud",
      skills: ["Git", "GitHub", "VS Code", "Postman", "IBM Cloud", "Watsonx Assistant", "Watson Studio"],

    },
    {
      title: "Soft Skills",
      skills: ["Growth Mindset", "Inclusive Collaboration", "Self-Driven", "Accountability", "Logical Reasoning"],
 
    }
  ];

  return (
    <div id='skills' className=" lg:py-20 py-10">
      <div className="container mx-auto px-6">
        <h2 className="lg:text-4xl md:text-3xl text-xl font-bold text-center lg:mb-16 mb-5 text-white ">
          Technical Skills
        </h2>
        
        <div className="mx-auto grid lg:grid-cols-3 gap-3">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#242323] lg:flex-col flex gap-2 lg:p-6 p-2 rounded-xl border-l-4 border-r-4 border-gray-400">
              <div className="flex lg:gap-3 gap-2 items-center lg:mb-4 ">
                <LucideArrowBigRightDash className='text-gray-400 w-6 h-6 sm:block hidden' />
                <h3 className="lg:text-xl sm:text-lg text-sm text-white font-semibold lg:px-5 px-2 py-1 lg:bg-gray-700 lg:text-gray-300 rounded-3xl">{category.title}</h3>
              </div>
              <div className="flex lg:gap-5 sm:gap-2 gap-1 flex-wrap">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-gray-300 sm:text-lg text-xs">{skill}</span>                  
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
