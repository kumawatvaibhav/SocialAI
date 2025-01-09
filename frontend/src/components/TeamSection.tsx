import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const teamMembers = [
  {
    name: 'Vaibhav Kumawat',
    role: 'UI designer and Full Stack Developer',
    image: '/miyamoto.jpg',
    linkedin: 'https://www.linkedin.com/in/vaibhav-kumawatt/',
    github: 'https://github.com/kumawatvaibhav',
  },
  {
    name: 'Uday Ganatra',
    role: 'Full Stack Developer and Researcher',
    image: '/uday.jpg',
    linkedin: 'https://www.linkedin.com/in/uday-ganatra-875b2a250/',
    github: 'https://github.com/udayganatra',
  },
  {
    name: 'Archit Pandey',
    role: 'Full Stack Developer',
    image: '/archit.jpg',
    linkedin: 'https://www.linkedin.com/in/architpandeyy/',
    github: 'https://github.com/Architpandey01',
  },
  {
    name: 'Arnav Shah',
    role: 'Full Stack developer',
    image: '/window.svg',
    linkedin: 'https://www.linkedin.com/in/arnavshah',
    github: 'https://github.com/arnavshah22',
  },
]

const TeamMember: React.FC<{
  name: string
  role: string
  image: string
  linkedin: string
  github: string
}> = ({ name, role, image, linkedin, github }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-teal-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 relative group"
  >
    <Image
      src={image}
      alt={name}
      width={400}
      height={400}
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-yellow-300">{name}</h3>
      <p className="text-teal-200 mb-2">{role}</p>
    </div>
    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-teal-900 bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="flex space-x-6">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 text-3xl hover:text-white transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 text-3xl hover:text-white transition-colors"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  </motion.div>
)

const TeamSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-teal-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-yellow-300"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
