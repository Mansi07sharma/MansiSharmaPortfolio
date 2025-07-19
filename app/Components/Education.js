import React from 'react'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

function Education() {
    return (
        <div className='bg-[#2e2d2d] lg:mt-20 mt-10 p-10 lg:pb-20 pb-10'>
            <h2 className="lg:text-4xl md:text-3xl text-xl font-bold text-center lg:mb-16 mb-6 text-white ">
                Education
            </h2>
            <div className='md:w-1/2 m-auto'>
                <div className="bg-[#242323] p-8 rounded-xl border-2 border-gray-300">
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <GraduationCap className="text-white mt-1" size={20} />
                            <div>
                                <h4 className="font-semibold text-white">Bachelor of Technology - Computer Science</h4>
                                <p className="text-gray-400">Aligarh College of Engineering and Technology</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Calendar className="text-white" size={16} />
                            <span className="text-gray-400">Oct 2022 - June 2026</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <MapPin className="text-white" size={16} />
                            <span className="text-gray-400">Aligarh, UP</span>
                        </div>
                        <div className="mt-4 p-3 bg-[#1b1919] rounded-lg border-b-2 border-gray-300">
                            <p className="text-white font-semibold">CGPA: 8.5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
