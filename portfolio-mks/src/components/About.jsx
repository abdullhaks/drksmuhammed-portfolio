import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import HERO2 from "../assets/HERO2.jpg";

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

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);
  const now = new Date();
  const start = new Date('2015-01-01'); // Use ISO format
  const exp = now.getFullYear() - start.getFullYear();
  const patients = isNaN(exp) ? 5000 : exp * 500;
  
  const specialties = [
    {
      icon: <Stethoscope className="w-12 h-12 text-blue-600" />,
      title: "Homeopathic Medicine",
      description: "Expert in classical homeopathy with BHMS qualification and years of practical experience.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: "Poultry Homeopathy",
      description: "Specialized in applying homeopathic principles to poultry health and disease management.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-600" />,
      title: "Online Consultations",
      description: "Providing accessible healthcare through modern telemedicine platforms to thousands of patients.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-orange-600" />,
      title: "Medical Writing",
      description: "Published author contributing to homeopathic literature and educational content.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30" />
      
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
         backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%233b82f6' stroke-width='1'%3E%3Cpath d='M0 0L200 200'/%3E%3Cpath d='M0 200L200 0'/%3E%3C/g%3E%3C/svg%3E")`


        }}
        animate={{ 
          backgroundPosition: [`100px 100px`,`0px 0px` ] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-6xl font-bold mb-6"
            animate={{ 
              backgroundImage: [
                "linear-gradient(45deg, #1f2937, #3b82f6)",
                "linear-gradient(45deg, #3b82f6, #06b6d4)",
                "linear-gradient(45deg, #06b6d4, #1f2937)"
              ]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ 
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            About Dr. Muhammed KS
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A dedicated homeopathic physician bridging traditional healing wisdom with modern healthcare delivery
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h3 
              className="text-4xl font-bold text-gray-900"
              animate={{ color: ["#1f2937", "#3b82f6", "#1f2937"] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Professional Journey
            </motion.h3>
            
            {[
              "Dr. Muhammed KS is a qualified homeopathic physician with a Bachelor of Homeopathic Medicine and Surgery (BHMS) degree. His passion for holistic healing has led him to specialize in both human and veterinary homeopathy, with particular expertise in poultry health management.",
              "Through his innovative online consultation platform, Dr. Muhammed has successfully treated thousands of patients, making quality homeopathic care accessible to people across different geographical locations. His approach combines classical homeopathic principles with modern technology to deliver personalized treatment plans.",
              "As a prolific writer and educator, he has authored several books on homeopathy and regularly contributes to medical blogs, sharing his knowledge and experience with both practitioners and patients alike."
            ].map((text, index) => (
              <motion.p 
                key={index}
                className="text-gray-700 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={HERO2}
                alt="Dr. Muhammed KS"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white-500/30 to-black-500/30 group-hover:from-blue-white/40 group-hover:to-black-900/40 transition-all duration-500" />
              
              {/* Floating statistics */}
              <motion.div
                className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="text-lg font-bold text-gray-900">{patients.toLocaleString()}+</div>
                    <div className="text-sm text-gray-600">Patients</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-yellow-600" />
                  <div>
                    <div className="text-lg font-bold text-gray-900">{isNaN(exp) ? '10+' : exp + '+'}</div>
                    <div className="text-sm text-gray-600">Years</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-200/40 to-blue-200/40 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-2xl animate-pulse" />
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10, 
                rotateY: 10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              className="group relative text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 hover:border-blue-200/50 transition-all duration-500 cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-blue-50/60 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div 
                className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${specialty.gradient} rounded-2xl mb-6 shadow-lg relative z-10`}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                whileHover={{ scale: 1.2, rotate: 0 }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  {React.cloneElement(specialty.icon, { className: "w-12 h-12 text-white" })}
                </motion.div>
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-4 relative z-10"
                whileHover={{ color: "#3b82f6" }}
              >
                {specialty.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 text-sm leading-relaxed relative z-10"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {specialty.description}
              </motion.p>
              
              {/* Decorative corner elements */}
              <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About