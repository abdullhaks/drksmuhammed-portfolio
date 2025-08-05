import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Menu, 
  X, 
  BookOpen, 
  Users, 
  Award, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  ShoppingCart,
  Calendar,
  FileText,
  Star,
  CheckCircle,
  Send,
  ArrowRight,
  Globe,
  Stethoscope,
  Heart,
  Leaf,
  ArrowUp,
  Download,
  Play,
  Pause,
  Clock,
  TrendingUp
} from 'lucide-react';


const Footer = () => {
  const socialLinks = [
    { 
      icon: <MessageCircle className="w-6 h-6" />, 
      label: "WhatsApp", 
      href: "https://wa.me/+918157868116?text=Hi%20",
      color: "hover:text-green-500",
      bgGradient: "from-green-500 to-green-600"
    },
    { 
      icon: <MessageCircle className="w-6 h-6" />, 
      label: "WhatsApp Groupe", 
      href: "https://chat.whatsapp.com/DFiCboosdB7JcZDaoo0jBD",
      color: "hover:text-green-500",
      bgGradient: "from-green-500 to-green-600"
    },
    { 
      icon: <MessageCircle className="w-6 h-6" />, 
      label: "WhatsApp Channel", 
      href: "    https://whatsapp.com/channel/0029Va9wmia7YSd95iXmld3l",
      color: "hover:text-green-500",
      bgGradient: "from-green-500 to-green-600"
    },
    { 
      icon: <Facebook className="w-6 h-6" />, 
      label: "Facebook", 
      href: "https://www.facebook.com/profile.php?id=100063863895102&mibextid=ZbWKwL",
      color: "hover:text-blue-600",
      bgGradient: "from-blue-500 to-blue-600"
    },
    { 
      icon: <Instagram className="w-6 h-6" />, 
      label: "Instagram", 
      href: "https://www.instagram.com/drksmuhammed?igsh=MW8wdjNyNXRsZHdyYw==",
      color: "hover:text-pink-500",
      bgGradient: "from-pink-500 to-red-500"
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/dr-muhammed-ks-4b707a172?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-700",
      bgGradient: "from-blue-600 to-blue-700"
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      label: "Email", 
      href: "mailto:drksmuhammed@gmail.com",
      color: "hover:text-red-500",
      bgGradient: "from-red-500 to-red-600"
    },
    { 
      icon: <Youtube className="w-6 h-6" />, 
      label: "YouTube", 
      href: "https://youtube.com/@drksmuhammed?si=MQpDQIjG_GNKhRRN",
      color: "hover:text-red-600",
      bgGradient: "from-red-600 to-red-700"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Publications", href: "#publications" },
    { label: "Contact", href: "tel:+918157868116" },
    { label: "Online Consultation", href: "https://wa.me/c/919677301810" }
  ];

  const services = [
    "Homeopathic Treatment",
    "Poultry Health Consultation",
    "Online Medical Consultation",
    "Health Education & Workshops",
    "Medical Writing Services"
  ];

  const { scrollY } = useScroll();
  const footerY = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <motion.footer 
      style={{ y: footerY }}
      className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='80' cy='20' r='2'/%3E%3Ccircle cx='20' cy='80' r='2'/%3E%3Ccircle cx='80' cy='80' r='2'/%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{ 
            backgroundPosition: [`0px 0px`, `0px 100px`] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-1 space-y-6"
          >
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <Stethoscope className="w-8 h-8 text-white relative z-10" />
              </motion.div>
              <div>
                <motion.h3 
                  className="text-2xl font-bold"
                  animate={{ color: ["#ffffff", "#60a5fa", "#ffffff"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Dr. Muhammed KS
                </motion.h3>
                <motion.p 
                  className="text-sm text-gray-300"
                  whileHover={{ color: "#60a5fa" }}
                >
                  BHMS, Homeopathy Specialist
                </motion.p>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 text-sm leading-relaxed"
              whileHover={{ color: "#ffffff", x: 5 }}
              transition={{ duration: 0.3 }}
            >
              Dedicated to providing holistic healthcare solutions through classical homeopathy, 
              innovative online consultations, and comprehensive health education.
            </motion.p>
            
            <motion.div 
              className="flex items-center space-x-2 text-sm text-gray-300"
              whileHover={{ x: 5, color: "#60a5fa" }}
            >
              <MapPin className="w-5 h-5 cursor-pointer" />
              <a href='https://maps.app.goo.gl/TRdof4nus42UQtf27'>
              <span>Malappuram, Kerala, India</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h4 
              className="text-xl font-semibold mb-6"
              animate={{ color: ["#ffffff", "#60a5fa", "#ffffff"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 text-sm flex items-center space-x-3 group"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <ArrowRight className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                    </motion.div>
                    <span className="group-hover:text-blue-400 transition-colors">{link.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.h4 
              className="text-xl font-semibold mb-6"
              animate={{ color: ["#ffffff", "#10b981", "#ffffff"] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              Services
            </motion.h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.05 }}
                  className="text-gray-300 text-sm flex items-center space-x-3 group cursor-pointer"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors" />
                  </motion.div>
                  <span className="group-hover:text-white transition-colors">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.h4 
              className="text-xl font-semibold mb-6"
              animate={{ color: ["#ffffff", "#f59e0b", "#ffffff"] }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            >
              Connect With Us
            </motion.h4>
            
            <div className="space-y-6 mb-8">
              <motion.div 
                className="flex items-center space-x-3 text-sm text-gray-300 group cursor-pointer"
                whileHover={{ x: 5, color: "#60a5fa" }}
              >
                <Mail className="w-5 h-5 group-hover:animate-bounce" />
                <a href='mailto:drksmuhammed@gmail.com'>
                <span>drksmuhammed@gmail.com</span>
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-sm text-gray-300 group cursor-pointer"
                whileHover={{ x: 5, color: "#10b981" }}
              >
                <Phone className="w-5 h-5 group-hover:animate-bounce" />
                <a href='tel:+918157868116'>
                <span>+91 81578 68116</span>
                </a>
              </motion.div>
            </div>
            
            <div className="space-y-4">
              <motion.p 
                className="text-sm font-semibold text-gray-200"
                whileHover={{ color: "#ffffff" }}
              >
                Follow Us
              </motion.p>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      boxShadow: "0 10px 30px rgba(255,255,255,0.2)"
                    }}
                    className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${social.bgGradient} rounded-2xl text-white transition-all duration-300 shadow-lg hover:shadow-2xl`}
                    title={social.label}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {social.icon}
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="border-t border-blue-900 mt-16 pt-8 "
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div 
              className="text-center md:text-left"
              whileHover={{ x: 5 }}
            >
              <motion.p 
                className="text-sm text-gray-300"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                © {new Date().getFullYear()} Dr. Muhammed KS. All rights reserved.
              </motion.p>
              
              <motion.p 
                className="text-xs text-gray-400 mt-1"
                whileHover={{ color: "#60a5fa" }}
              >
                Committed to holistic healthcare and patient well-being
              </motion.p>

              <motion.p 
                className="text-xs text-gray-400 mt-5"
                whileHover={{ color: "#60a5fa" }}
              >
                Website by{" "}
                <motion.a 
                  href="https://www.instagram.com/abdullha_kalamban/profilecard/?igsh=MXJ3ODBxYnJncWFqcg==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-400"
                  whileHover={{ scale: 1.05 }}
                >
                  AKS-WebSolutions
                </motion.a>
              </motion.p>
            </motion.div>

            <div className="flex items-center space-x-6 text-xs text-gray-400">
              {['Privacy Policy', 'Terms of Service', 'Medical Disclaimer'].map((item, index) => (
                <motion.a 
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
      
      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center z-50"
        whileHover={{ 
          scale: 1.1, 
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" 
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </motion.footer>
  );
};

export default Footer