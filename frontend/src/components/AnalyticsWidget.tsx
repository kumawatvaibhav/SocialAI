'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', engagement: 4000 },
  { name: 'Tue', engagement: 3000 },
  { name: 'Wed', engagement: 2000 },
  { name: 'Thu', engagement: 2780 },
  { name: 'Fri', engagement: 1890 },
  { name: 'Sat', engagement: 2390 },
  { name: 'Sun', engagement: 3490 },
]

export default function AnalyticsWidget() {
  return (
    <div className="bg-teal-700 bg-opacity-50 border-teal-500 rounded-lg p-6 w-full max-w-2xl">
      <h3 className="text-2xl text-center text-yellow-300 mb-4">Weekly Engagement Overview</h3>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-64"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2dd4bf" />
            <XAxis dataKey="name" stroke="#fde047" />
            <YAxis stroke="#fde047" />
            <Tooltip
              contentStyle={{ backgroundColor: '#134e4a', border: 'none', borderRadius: '4px' }}
              itemStyle={{ color: '#fde047' }}
            />
            <Bar dataKey="engagement" fill="#4ade80" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
      <p className="text-center mt-4 text-teal-100">
        Visualize your social media engagement trends at a glance.
      </p>
    </div>
  )
}

