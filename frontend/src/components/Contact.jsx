import React from 'react'
import { motion } from 'framer-motion'
import { FaDribbble, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 1, ease: 'easeOut'}}
    viewport={{once: false, amount:0.2}}
    id='contact'
    className='py-20 bg-dark-200'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>
                Get In 
                <span className='text-purple ml-2'>Touch</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let’s talk!</p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>

                {/* Contact Form */}
                <ContactForm />

                {/* Contact Information */}
                <div className='space-y-8'>
                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Location</h3>
                            <p className='text-gray-400'>Dubai, UAE</p>
                        </div>
                    </div>

                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Email</h3>
                            <p className='text-gray-400'>shidhesh.dev@gmail.com</p>
                        </div>
                    </div>

                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaPhone />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                            <p className='text-gray-400'>Available upon request</p>
                        </div>
                    </div>

                    <div className='pt-4'>
                        <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                        <div className='flex space-x-4'>
                            <a href="https://github.com/shidhesh10" target='_blank' rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'> <FaGithub /></a>

                            <a href="https://www.linkedin.com/in/shidhesh-bhatia" target='_blank' rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange-400 hover:bg-orange-400 hover:text-white transition duration-300'> <FaLinkedin /></a>

                            {/* <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300'> <FaTwitter /></a>
                             */}
                            {/* <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-purple hover:text-white transition duration-300'> <FaDribbble /></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </motion.div>
  )
}

export default Contact;