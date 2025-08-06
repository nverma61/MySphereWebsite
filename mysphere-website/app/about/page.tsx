"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Twitter, Github, Target, Eye, Heart, Users, Award, Globe } from 'lucide-react'

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Team Members', value: '50+' },
  { label: 'Countries', value: '15+' },
  { label: 'Clients', value: '10,000+' },
]

const values = [
  {
    icon: Heart,
    title: 'Customer First',
    description: 'We prioritize our customers\' success and satisfaction in everything we do.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and open communication.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in our products, services, and interactions.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We aim to make a positive impact on businesses worldwide.',
  },
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Co-founder',
    image: '/team/sarah.jpg',
    bio: 'Former AI researcher at MIT with 15+ years in machine learning.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Michael Chen',
    role: 'CTO & Co-founder',
    image: '/team/michael.jpg',
    bio: 'Ex-Google engineer with expertise in distributed systems and AI infrastructure.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of AI Research',
    image: '/team/emily.jpg',
    bio: 'PhD in Computer Science, specialized in neural networks and deep learning.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'David Kim',
    role: 'VP of Engineering',
    image: '/team/david.jpg',
    bio: '20+ years building scalable systems at top tech companies.',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
]

export default function AboutPage() {
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
              About <span className="gradient-text">MySphere</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to democratize AI and make it accessible to businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-width-wrapper section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-width-wrapper section-padding">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600">
                To empower businesses with cutting-edge AI technology that drives innovation, 
                efficiency, and growth. We believe that artificial intelligence should be 
                accessible, understandable, and beneficial for organizations of all sizes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600">
                To be the global leader in AI solutions, creating a future where every business 
                can harness the power of artificial intelligence to solve complex challenges, 
                make better decisions, and create meaningful impact in their industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-width-wrapper section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-width-wrapper section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The brilliant minds behind MySphere AI</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-400">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter size={20} />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-400 hover:text-gray-700 transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}