import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ],
  products: [
    { name: 'AI Solutions', href: '/products' },
    { name: 'Enterprise', href: '/enterprise' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Support', href: '/support' },
    { name: 'API Reference', href: '/api' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/mysphere-ai', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/mysphere_ai', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/mysphere-ai', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-width-wrapper section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-xl text-white">MySphere</span>
            </Link>
            <p className="text-sm mb-4">
              Empowering businesses with cutting-edge AI solutions. Transform your operations with intelligent automation and data-driven insights.
            </p>
            <div className="space-y-2">
              <a href="mailto:info@mysphereai.com" className="flex items-center space-x-2 text-sm hover:text-white transition-colors">
                <Mail size={16} />
                <span>info@mysphereai.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center space-x-2 text-sm hover:text-white transition-colors">
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left mb-4 md:mb-0">
            © 2024 MySphere AI. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}