import React from 'react';
import { Mail, Linkedin, Github, Code, MapPin } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yogesh11222211@gmail.com',
      link: 'mailto:yogesh11222211@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mansi-sharma',
      link: 'https://linkedin.com/in/mansi-sharma',
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Mansi07sharma',
      link: 'https://github.com/Mansi07sharma',
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: Code,
      label: 'LeetCode',
      value: 'leetcode.com/mansi-sh07',
      link: 'https://leetcode.com/mansi-sh07',
      color: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <section id="contact" className="lg:py-20 py-10">
      <div className="container mx-auto px-6">
        <h2 className="lg:text-4xl md:text-3xl text-xl font-bold text-center sm:mb-16 mb-6 text-white">
          Let&apos;s Connect
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="lg:text-xl sm:text-lg text-sm text-gray-300 mb-4">
              I&apos;m always open to discussing new opportunities, innovative projects, or just having a great conversation about technology.
            </p>
            <p className="sm:text-lg text-sm text-gray-400">
              Feel free to reach out through any of the channels below!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#242323] sm:p-6 p-3 rounded-xl border-b-4 border-gray-400 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`sm:p-3 p-2 rounded-lg bg-gradient-to-r ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white sm:h-7 sm:w-7 h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="sm:text-lg text-sm font-semibold text-white mb-1">{contact.label}</h3>
                      <p className="text-gray-400 sm:text-lg text-sm group-hover:text-gray-300 transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-400 mb-8 sm:text-lg text-sm">
              <MapPin size={16} />
              <span>Aligarh, Uttar Pradesh, India</span>
            </div>

            <div className="border-t border-gray-800 pt-8 sm:text-lg text-xs">
              <p className="text-gray-500">© 2025 Mansi Sharma. Built with Next.js and Tailwind CSS.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
