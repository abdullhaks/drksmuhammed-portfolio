import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import HERO from "../assets/HERO.JPG";
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
import { useMousePosition } from '../hooks/customHooks';

const Hero = ({ activeSection, setActiveSection }) => {
  const [currentText, setCurrentText] = useState(0);
  const mousePosition = useMousePosition();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 1400], [1, 0]);
  const now =  new Date();
  const start = new Date("2015-1-1");
  const exp = now.getFullYear()-start.getFullYear();
  const patients = exp*500;


  function handleMessage (){

  }

  const texts = [
    "Homeopathic Excellence",
    "Poultry Health Specialist", 
    "Online Consultation Expert",
    "Published Author & Researcher"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.section 
      id="hero" 
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/80" />
        <motion.div
                className="absolute inset-0 opacity-80"
                style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0 L10 20 M0 10 L20 10' stroke='%23e0f2fe' stroke-width='1'/%3E%3C/svg%3E")`

                }}
                animate={{ 
                  backgroundPosition: [`0px 0px`, `200px 200px`] 
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-32 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-32 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0] 
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-blue-800 text-sm font-semibold shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Heart className="w-5 h-5 mr-2 text-red-500" />
              </motion.div>
              Trusted by {patients}+ Patients Worldwide
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <motion.span 
                  className="block bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Dr. Muhammed KS
                </motion.span>
                <motion.span 
                  className="block text-4xl lg:text-5xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-light mt-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  BHMS
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              className="h-12 flex items-center"
              key={currentText}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p 
                className="text-2xl text-gray-700 font-semibold"
                animate={{ 
                  color: ["#374151", "#2563eb", "#0891b2", "#374151"] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {texts[currentText]}
              </motion.p>
            </motion.div>

            <motion.p 
              className="text-lg text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Pioneering homeopathic solutions with over a decade of experience in traditional medicine 
              and modern poultry health management. Committed to holistic healing and accessible healthcare 
              through innovative online consultation services.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-6 "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a href="https://wa.me/c/919677301810">
              <motion.button
                
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl transition-all duration-300 shadow-xl font-semibold cursor-pointer"
              >
                <Calendar className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                Book Consultation
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
              </a>
              
              <motion.button
                onClick={() => scrollToSection("publications")}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-2xl transition-all duration-300 font-semibold hover:bg-blue-50 cursor-pointer"
              >
                <BookOpen className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                View Publications
              </motion.button>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {[
                { value: `${patients}+`, label: 'Patients Treated', icon: <Users className="w-6 h-6 text-blue-600" /> },
                { value: '1+', label: 'Books Published', icon: <BookOpen className="w-6 h-6 text-green-600" /> },
                { value: `${exp}+`, label: 'Years Experience', icon: <Award className="w-6 h-6 text-purple-600" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center p-4 rounded-xl hover:bg-white/80 hover:shadow-lg transition-all duration-300"
                >
                  <motion.div 
                    className="flex justify-center mb-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.6 }}
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`
              }}
            >
              <img
                src={HERO}
                alt="Dr. Muhammed KS"
                className=" w-full  object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-cyan-500/20" />
              
              {/* Floating icons */}
              {[
                { icon: <Heart className="w-8 h-8 text-red-500" />, position: "top-10 left-10", delay: 0 },
                { icon: <Leaf className="w-8 h-8 text-green-500" />, position: "top-24 right-10", delay: 0.5 },
                { icon: <Award className="w-8 h-8 text-yellow-500" />, position: "bottom-20 left-20", delay: 1 },
                { icon: <Globe className="w-8 h-8 text-blue-500" />, position: "bottom-32 right-16", delay: 1.5 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl`}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: item.delay,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.3 }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-300/40 to-cyan-300/40 rounded-full blur-2xl"
              animate={{ scale: [1, 1.5, 1], rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full blur-2xl"
              animate={{ scale: [1.5, 1, 1.5], rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero