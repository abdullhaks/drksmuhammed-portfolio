import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import BOOK1 from "../assets/BOOK1.PNG"  
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

const Publications = () => {
  const books = [
    {
      title: "POULTRY HOMEOPATHY - Advancing Homeopathic Research in Poultry Healthcare - 2nd Edition",
      description: `The Poultry Homeopathy Handbook is an indispensable resource for homeopathic practitioners, product formulators, researchers, veterinary practitioners and exploring over 100 homeopathic remedies derived from extensive new product development studies, medical case reports, literature, and historical texts. This comprehensive book delves into a wide range of poultry homeopathic solutions.

      Covering fundamental homeopathic concepts and providing clinical pharmacological information, the handbook addresses crucial topics in poultry homeopathy. It serves as a valuable tool to inspire and support emerging homeopaths, encouraging them to delve into research ideas that contribute to the advancement of the Homeopathic System of Medicine. This handbook is a must-have for anyone seeking a deeper understanding of homeopathic remedies for poultry health.`,
      pages: 200,
      publishDate: "18th July 2024",
      publisher: "Bluerose Publishers Pvt. Ltd.",
      readingAge: "13 years and up",
      rating: 4.8,
      cover: "from-yellow-400 to-yellow-150",
      image: BOOK1,
      amazone:"https://amzn.in/d/0cBEx0XD",
      flipkart:"",
      googleplay:"https://play.google.com/store/books/details?id=r-oSEQAAQBAJ",
      official:"https://blueroseone.com/store/product/poultry-homeopathy-advancing-homeopathic-research-in-poultry-healthcare-2nd-edition"
    },
    {
      title: "Poultry Health Through Homeopathy",
      description: "Revolutionary approaches to maintaining poultry health using homeopathic remedies and natural solutions.",
      pages: 200-250,
      publishDate: "upcoming",
      publisher: "",  
      readingAge: "Professional/Veterinary",
      rating: "",
      cover: "from-green-500 to-green-700",
      image: "",
       amazone:"",
      flipkart:"",
      googleplay:"",
      official:""
    },
    
  ];

  const blogs = [
    {title:"Poultry Homoeopathy – Advancing Homoeopathic Research in Poultry Health Care 2edn",
      link:"https://www.homeobook.com/poultry-homoeopathy-advancing-homoeopathic-research-in-poultry-health-care-2edn-dr-muhammed-ks/"
    },
    {title:"The Science Behind Natural Healing",
      link:""
    }, 
    {title:"Integrating Technology with Traditional Medicine",link:""},
    {title:"Patient Care in the Digital Age",link:""}
  ];

  return (
    <section id="publications" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/60 to-cyan-50/80" />
      
      {/* Animated mesh background */}
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23e0f2fe' /%3E%3C/svg%3E")`

        }}
        animate={{ 
          backgroundPosition: [`120px 0px`, ` 0px 120px`] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            Publications & Writings
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Contributing to medical literature through comprehensive books and insightful blog articles
          </motion.p>
        </motion.div>

        <div className="mb-20">
          <motion.h3 
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Published Books
          </motion.h3>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -15,
                  rotateY: 10,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.2)"
                }}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 "
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative h-84 flex items-center justify-center overflow-hidden">
                    <motion.img
                      src={book.image}
                      alt={book.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                  <div className={`absolute inset-0 bg-gradient-to-br ${book.cover} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-gray-900 text-sm font-bold">{book.rating}</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-sm font-semibold text-gray-900">{book.publishDate}</span>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.h4 
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {book.title}
                  </motion.h4>

                  <motion.p 
                    className=" text-gray-600 text-sm mb-6 leading-relaxed line-clamp-15 group-hover:text-gray-800 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {book.description}
                  </motion.p>
                  
                  
                  <div className="space-y-3 mb-6 text-sm">
                    {[
                      { label: "Pages", value: book.pages },
                      { label: "Publisher", value: book.publisher },
                      { label: "Reading Age", value: book.readingAge }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        className="flex justify-between items-center p-2 bg-gray-50 rounded-lg"
                        whileHover={{ backgroundColor: "#eff6ff", scale: 1.02 }}
                      >
                        <span className="text-gray-500">{item.label}:</span>
                        <span className="font-semibold text-gray-700">{item.value}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-700">Available on:</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: "Amazon", color: "from-orange-500 to-orange-600", icon: <ShoppingCart className="w-4 h-4" /> ,link:book.amazone},
                        { name: "Flipkart", color: "from-blue-500 to-blue-600", icon: <ShoppingCart className="w-4 h-4" />,link:book.flipkart },
                        { name: "Google Play", color: "from-green-500 to-green-600", icon: <BookOpen className="w-4 h-4" />,link:book.googleplay },
                        { name: "Publisher", color: "from-gray-600 to-gray-700", icon: <Globe className="w-4 h-4" />,link:book.official }
                      ].map((platform, i) => (
                        <a  key={i} href={platform.link}>
                        <motion.button
                         
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex items-center justify-center px-3 py-2 bg-gradient-to-r ${platform.color} text-white rounded-xl text-xs font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer`}
                        >
                          {platform.icon}
                          <span className="ml-2">{platform.name}</span>
                        </motion.button>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/50"
        >
          <motion.h3 
            className="text-4xl font-bold text-gray-900 mb-8 text-center"
            animate={{ color: ["#1f2937", "#3b82f6", "#1f2937"] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Featured Blog Topics  
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <a key={index} href={blog.link}>
              <motion.div
                
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  x: 10,
                  backgroundColor: "#eff6ff",
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)"
                }}
                className="flex items-center space-x-4 p-6 bg-gray-50/80 rounded-2xl transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <FileText className="w-6 h-6 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <motion.span 
                    className="text-gray-700 font-semibold group-hover:text-blue-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {blog.title}
                  </motion.span>
                </div>
                
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex-shrink-0"
                >
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </motion.div>
              </motion.div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications