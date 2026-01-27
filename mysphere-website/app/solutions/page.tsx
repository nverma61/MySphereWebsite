"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, ShoppingCart, Heart, GraduationCap, Factory, Plane, ArrowRight } from 'lucide-react'

const industries = [
  {
    icon: Building2,
    title: 'Financial Services',
    description: 'Transform banking and finance with AI-powered fraud detection, risk assessment, and personalized customer experiences.',
    solutions: [
      'Fraud detection and prevention',
      'Credit risk assessment',
      'Algorithmic trading',
      'Customer service automation',
      'Regulatory compliance',
    ],
    caseStudy: 'Reduced fraud by 87% for a major bank',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    description: 'Enhance customer experiences and optimize operations with intelligent recommendations and inventory management.',
    solutions: [
      'Personalized recommendations',
      'Inventory optimization',
      'Dynamic pricing',
      'Customer behavior analysis',
      'Supply chain optimization',
    ],
    caseStudy: 'Increased sales by 45% for online retailer',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Improve patient outcomes and operational efficiency with AI-driven diagnostics and predictive analytics.',
    solutions: [
      'Medical image analysis',
      'Patient risk prediction',
      'Drug discovery acceleration',
      'Clinical decision support',
      'Healthcare chatbots',
    ],
    caseStudy: 'Improved diagnosis accuracy by 92%',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Personalize learning experiences and improve educational outcomes with adaptive AI technologies.',
    solutions: [
      'Personalized learning paths',
      'Automated grading',
      'Student performance prediction',
      'Content recommendation',
      'Virtual tutoring',
    ],
    caseStudy: 'Improved student retention by 68%',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Optimize production processes and reduce downtime with predictive maintenance and quality control.',
    solutions: [
      'Predictive maintenance',
      'Quality control automation',
      'Supply chain optimization',
      'Energy consumption optimization',
      'Production planning',
    ],
    caseStudy: 'Reduced downtime by 73% for manufacturer',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Plane,
    title: 'Transportation',
    description: 'Enhance logistics and improve safety with AI-powered route optimization and predictive analytics.',
    solutions: [
      'Route optimization',
      'Fleet management',
      'Demand forecasting',
      'Autonomous vehicle support',
      'Safety monitoring',
    ],
    caseStudy: 'Reduced delivery times by 34%',
    color: 'from-indigo-500 to-indigo-600',
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 gradient-bg">
        <div className="max-width-wrapper section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Industry-Specific <span className="gradient-text">AI Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Tailored AI solutions designed to address the unique challenges and opportunities in your industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-width-wrapper section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${industry.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {industry.solutions.map((solution) => (
                      <li key={solution} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-blue-50 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-blue-700">{industry.caseStudy}</p>
                  </div>
                  
                  <Link
                    href={`/contact?industry=${industry.title.toLowerCase().replace(' & ', '-')}`}
                    className="inline-flex items-center gap-1 text-blue-600 font-medium group-hover:gap-2 transition-all duration-200"
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose MySphere */}
      <section className="py-20 bg-gray-50">
        <div className="max-width-wrapper section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose MySphere for Your Industry?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep industry expertise with cutting-edge AI technology to deliver solutions that drive real results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Industry Expertise',
                description: 'Deep understanding of sector-specific challenges and regulations',
              },
              {
                title: 'Proven Results',
                description: 'Track record of successful implementations across industries',
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored AI models designed for your specific use cases',
              },
              {
                title: 'Ongoing Support',
                description: 'Continuous optimization and dedicated industry specialists',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-width-wrapper section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let's discuss how MySphere AI can help you achieve your business goals with industry-specific solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover-scale"
            >
              Schedule a Consultation
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}