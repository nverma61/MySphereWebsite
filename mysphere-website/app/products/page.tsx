"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Brain, MessageSquare, BarChart3, FileSearch, Shield, Workflow, ArrowRight, Check } from 'lucide-react'

const products = [
  {
    id: 'ai-assistant',
    icon: MessageSquare,
    title: 'AI Assistant',
    subtitle: 'Intelligent Conversational AI',
    description: 'Deploy smart chatbots and virtual assistants that understand context, learn from interactions, and provide human-like responses.',
    features: [
      'Natural language processing',
      'Multi-language support',
      'Context awareness',
      'Sentiment analysis',
      'Custom training',
    ],
    price: 'From $299/month',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'predictive-analytics',
    icon: BarChart3,
    title: 'Predictive Analytics',
    subtitle: 'Data-Driven Insights',
    description: 'Harness the power of machine learning to forecast trends, identify patterns, and make data-driven decisions with confidence.',
    features: [
      'Time series forecasting',
      'Anomaly detection',
      'Risk assessment',
      'Customer behavior prediction',
      'Real-time dashboards',
    ],
    price: 'From $499/month',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'document-ai',
    icon: FileSearch,
    title: 'Document AI',
    subtitle: 'Intelligent Document Processing',
    description: 'Automatically extract, classify, and process information from documents with advanced OCR and NLP capabilities.',
    features: [
      'OCR with 99.9% accuracy',
      'Form data extraction',
      'Document classification',
      'Multi-format support',
      'API integration',
    ],
    price: 'From $399/month',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'ai-security',
    icon: Shield,
    title: 'AI Security',
    subtitle: 'Threat Detection & Prevention',
    description: 'Protect your business with AI-powered security that detects threats, prevents breaches, and ensures compliance.',
    features: [
      'Real-time threat detection',
      'Behavioral analysis',
      'Automated response',
      'Compliance monitoring',
      '24/7 protection',
    ],
    price: 'From $799/month',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 'workflow-automation',
    icon: Workflow,
    title: 'Workflow Automation',
    subtitle: 'Process Optimization',
    description: 'Streamline operations with intelligent automation that learns from your processes and continuously improves efficiency.',
    features: [
      'Process mining',
      'Intelligent routing',
      'Task automation',
      'Performance analytics',
      'Custom workflows',
    ],
    price: 'From $599/month',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    id: 'custom-ai',
    icon: Brain,
    title: 'Custom AI Solutions',
    subtitle: 'Tailored for Your Business',
    description: 'Work with our experts to develop custom AI solutions designed specifically for your unique business challenges.',
    features: [
      'Custom model development',
      'End-to-end implementation',
      'Dedicated support team',
      'Scalable architecture',
      'Ongoing optimization',
    ],
    price: 'Contact Sales',
    color: 'from-yellow-500 to-amber-500',
  },
]

export default function ProductsPage() {
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
              AI Solutions for <span className="gradient-text">Every Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI products or work with us to build custom solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-width-wrapper section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${product.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  <p className="text-blue-600 font-medium mb-4">{product.subtitle}</p>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-semibold">{product.price}</span>
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-flex items-center gap-1 text-blue-600 font-medium group-hover:gap-2 transition-all duration-200"
                    >
                      Learn more
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-width-wrapper section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Enterprise Solutions</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Need something more? Our enterprise plans offer unlimited scalability, dedicated support, and custom integrations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-gray-400">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-gray-400">Dedicated Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">∞</div>
                <div className="text-gray-400">Scalability</div>
              </div>
            </div>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover-scale"
            >
              Contact Enterprise Sales
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}