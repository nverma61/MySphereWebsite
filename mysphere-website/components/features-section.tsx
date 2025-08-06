"use client"

import { motion } from 'framer-motion'
import { Brain, Cpu, BarChart3, Shield, Zap, Users } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Models',
    description: 'Leverage state-of-the-art machine learning models trained on vast datasets for superior accuracy and performance.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cpu,
    title: 'Intelligent Automation',
    description: 'Automate complex workflows and repetitive tasks with AI-powered systems that learn and adapt over time.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Make data-driven decisions with powerful predictive models that forecast trends and identify opportunities.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption, compliance certifications, and robust data protection.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Process millions of data points in real-time with our high-performance infrastructure and optimized algorithms.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Users,
    title: 'Seamless Integration',
    description: 'Easy integration with your existing tools and workflows through comprehensive APIs and SDKs.',
    color: 'from-indigo-500 to-blue-500',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-width-wrapper section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for <span className="gradient-text">Modern Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of AI tools and features empowers organizations to innovate, scale, and succeed in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}