import React, { useRef } from 'react';
import { Trophy, Award, Target, Star } from 'lucide-react';

export const Achievements = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const achievements = [
    {
      icon: Target,
      title: "Problem Solving",
      description: "Solved 200+ problems on LeetCode and 100+ on GeeksforGeeks, strengthening data structures and algorithms.",
    },
    {
      icon: Trophy,
      title: "Coding Challenge",
      description: "Achieved Level 3 Conqueror in Coding Ninjas 21-Day Coding Challenge, demonstrating coding consistency.",
    },
    {
      icon: Award,
      title: "AI Certification",
      description: "Completed Generative AI by Google, focused on prompt engineering and large language model fundamentals.",
    },
    {
      icon: Star,
      title: "ML Certification",
      description: "Certified in Artificial Intelligence and Machine Learning by YBI Foundation (2023), with projects on prediction models.",
    }
  ];

  return (
    <section className="bg-[#2e2d2d] lg:py-20 py-10">
      <div className="container mx-auto px-6">
        <h2 className="lg:text-4xl md:text-3xl text-xl font-bold text-center lg:mb-16 mb-10 text-white">
          Certifications & Achievements
        </h2>

        <div className="hidden lg:grid lg:max-w-6xl lg:mx-auto lg:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>

        <div className="lg:hidden relative mt-5">
          <button
            onClick={scrollLeft}
            className="absolute md:left-[-100] left-[-20] top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow"
          >
            &#8592;
          </button>
          <button
            onClick={scrollRight}
            className="absolute md:right-[-100] right-[-20] top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow"
          >
            &#8594;
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 px-2 scroll-smooth snap-x snap-mandatory"
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="min-w-[100%] snap-start">
                <AchievementCard achievement={achievement} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AchievementCard = ({ achievement }) => {
  const Icon = achievement.icon;
  return (
    <div className="bg-[#242323] p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02]">
      <div className="flex items-start space-x-4">
        <div className="sm:p-4 p-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-600">
          <Icon className="text-white sm:w-7 sm:h-7 h-4 w-4"  />
        </div>
        <div className="flex-1">
          <h3 className="lg:text-xl sm:text-lg text-sm font-semibold text-white mb-3">{achievement.title}</h3>
          <p className="text-gray-300 sm:text-lg text-xs leading-relaxed">{achievement.description}</p>
        </div>
      </div>
    </div>
  );
};
