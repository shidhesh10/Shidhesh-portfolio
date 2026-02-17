import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    viewport={{once: true}}
    id='about'
    className='py-20 bg-dark-200'
    >
        <div className='container mx-auto px-6'>
            {/* Heading */}
            <h2 className='text-3xl font-bold text-center mb-4'>
                About
                <span className='text-purple ml-2'>Me</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>

            {/* Image and my journey */}
            <div className='flex flex-col md:flex-row items-start gap-12'>
                
                {/* Image */}
                <div className='md:w-1/2 w-full rounded-2xl overflow-hidden'>
                    <motion.img 
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 0.9, ease: 'easeOut'}}
                    viewport={{once: false, amount:0.2}}
                    className='w-full h-full object-cover'
                    src={assets.profileImgFull} alt="Profile Image" />
                </div>

                {/*Text content */}
                <motion.div 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 0.9, ease: 'easeOut'}}
                viewport={{once: false, amount:0.2}}
                className='md:w-1/2'
                >
                    <div className='rounded-2xl p-8'>
                        <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                        <p className='text-gray-300 mb-6'>I’m a Full Stack Developer with over 2 years of experience building scalable, high-performance web applications and enterprise-grade backend systems. My expertise spans the complete development lifecycle — from requirement analysis and architecture design to deployment and performance optimization. I have hands-on experience with React, Node.js, Express, MongoDB, and modern DevOps practices including CI/CD pipelines and containerization. I focus on building secure, maintainable, and business-aligned solutions that deliver measurable impact.</p>
                        <p className='text-gray-300 mb-12'>Currently working as a Full Stack Developer Trainer, I combine practical industry experience with strong system design fundamentals. I have led backend development initiatives, implemented authentication mechanisms (JWT, OAuth), designed RESTful APIs, and optimized application performance. Alongside development, I mentor aspiring developers in full-stack technologies, reinforcing best practices, clean code principles, and real-world project execution.</p>

                        {/* Cards */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {
                                aboutInfo.map((data, index) => (
                                    <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                        <div className='text-purple text-4xl mb-4'>
                                            <data.icon />
                                        </div>
                                        <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                        <p className='text-gray-400'>{data.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </motion.div>

            </div>
        </div>
        
    </motion.div>
  )
}

export default About