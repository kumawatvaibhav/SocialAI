'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart2, Zap, Users, ChartBarIcon, ShareIcon,HeartIcon } from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'
import AnalyticsWidget from '@/components/AnalyticsWidget'
import Navbar from '@/components/Navbar'
import TeamSection from '@/components/TeamSection'

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Home() {

  

  const features = [
    {
      icon: <ChartBarIcon size={24} />,
      title: "Custom Data Integration",
      description: "Utilizes Astra DB to store and retrieve rich social media data, ensuring scalability and reliability."
    },
    {
      icon: <ShareIcon size={24} />,
      title: "AI-Driven Insights",
      description: "Leverages GPT-based agents to analyze data and provide actionable insights . Generates comparisons, suggestions, and strategies tailored to the dataset."
    },
    {
      icon: <HeartIcon size={24} />,
      title: "Comprehensive Analysis",
      description: "Offers a breakdown of key engagement metrics, including likes, shares, comments, and saves"
    },
    {
      icon: <Users size={24} />,
      title: "Recommendation Engine",
      description: "Suggests improvements for future posts based on historical performance, such as:  - Optimal background colors or font styles.  - Ideal post times and audience targeting strategies.."
    }
  ];
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-900 via-emerald-800 to-green-700 text-white overflow-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end justify-center pb-20 pt-16">
        <AnimatedBackground />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-green-400 to-teal-300">
              Social Analytics
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100">
              Harness the power of AI to revolutionize your social media strategy and skyrocket your engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/analyze" className="inline-block px-8 py-3 bg-gradient-to-r from-teal-400 to-green-500 hover:from-teal-500 hover:to-green-600 text-teal-900 font-bold rounded-lg text-lg transition-colors duration-300">
                Explore <ArrowRight className="inline-block ml-2" />
              </Link>
              <a href="https://www.youtube.com/watch?v=BLSkN8_8HWw" className="inline-block px-8 py-3 border-2 border-teal-300 text-teal-300 hover:bg-teal-800 rounded-lg text-lg transition-colors duration-300">
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-yellow bg-transparent"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature}/>
            ))}
          </div>
        </div>
      </section>
      
      <section id="about">
        <TeamSection/>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-teal-700 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-teal-500 rounded-lg p-6">
      <div className="flex items-center gap-4 text-yellow-300 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-teal-100">{description}</p>
    </div>
  );
}

