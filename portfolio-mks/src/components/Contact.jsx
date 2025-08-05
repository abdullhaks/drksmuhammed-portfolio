import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle } from 'lucide-react';
import { message } from 'antd';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const now = new Date();
  const start = new Date('2015-01-01');
  const exp = now.getFullYear() - start.getFullYear();
  const patients = isNaN(exp) ? 5000 : exp * 500;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      message.error('Please enter your name');
      return;
    }
    if (!validateEmail(formData.email)) {
      message.error('Please enter a valid email address');
      return;
    }
    if (!formData.message.trim()) {
      message.error('Please enter your message');
      return;
    }
    setIsSubmitting(true);
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        date: new Date().toLocaleDateString(),
        year: new Date().getFullYear(),
      };
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      message.success('Enquiry sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      message.error('Failed to send enquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/40" />
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,0 200,50 200,150 100,200 0,150 0,50' fill='none' stroke='%233b82f6' stroke-width='2'/%3E%3Cpolygon points='100,50 150,75 150,125 100,150 50,125 50,75' fill='%236366f1' fill-opacity='0.1'/%3E%3C/svg%3E")`,
        }}
        animate={{ backgroundPosition: ['0px 0px', '200px 200px'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ready to start your journey towards better health? Contact Dr. Muhammed for consultation and guidance.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative">
            <motion.div
              className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-white/50"
              whileHover={{ scale: 1.02, boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8"
                animate={{ color: ['#1f2937', '#3b82f6', '#1f2937'] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Send a Message
              </motion.h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: 'name', type: 'text', label: 'Full Name', placeholder: 'Enter your full name' },
                  { name: 'email', type: 'email', label: 'Email Address', placeholder: 'Enter your email address' },
                  { name: 'message', type: 'textarea', label: 'Message', placeholder: 'Describe your health concerns or questions...', rows: 5 },
                ].map((field, index) => (
                  <motion.div key={field.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                    <label htmlFor={field.name} className="block text-sm font-semibold text-gray-700 mb-3">
                      {field.label} *
                    </label>
                    {field.type === 'textarea' ? (
                      <motion.textarea
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        rows={field.rows}
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                        placeholder={field.placeholder}
                        whileFocus={{ scale: 1.02, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.1)' }}
                      />
                    ) : (
                      <motion.input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder={field.placeholder}
                        whileFocus={{ scale: 1.02, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.1)' }}
                      />
                    )}
                  </motion.div>
                ))}
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)', y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-3 font-semibold text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? (
                    <motion.div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />
                  ) : (
                    <>
                      <Send className="w-5 sm:w-6 h-5 sm:h-6" />
                      <span>Send Message</span>
                      <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ArrowRight className="w-5 sm:w-5 h-5 sm:h-5" />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="space-y-6 sm:space-y-8">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />,
                    label: 'Personal Email',
                    value: 'drksmuhammed@gmail.com',
                    color: 'from-blue-500 to-cyan-500',
                    bgColor: 'bg-blue-100',
                    link: 'mailto:drksmuhammed@gmail.com',
                  },
                  {
                    icon: <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />,
                    label: 'Office Email',
                    value: 'razihealthcarecentre@gmail.com',
                    color: 'from-blue-500 to-cyan-500',
                    bgColor: 'bg-blue-100',
                    link: 'mailto:razihealthcarecentre@gmail.com',
                  },
                  {
                    icon: <Phone className="w-6 sm:w-8 h-6 sm:h-8 text-green-600" />,
                    label: 'Phone',
                    value: '+91 8157868116',
                    color: 'from-green-500 to-emerald-500',
                    bgColor: 'bg-green-100',
                    link: 'tel:+918157868116',
                  },
                  {
                    icon: <MapPin className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600" />,
                    label: 'Location',
                    value: 'Valanchery, Malappuram, Kerala, India',
                    color: 'from-purple-500 to-pink-500',
                    bgColor: 'bg-purple-100',
                    link: 'https://maps.app.goo.gl/TRdof4nus42UQtf27',
                  },
                ].map((item, index) => (
                  <a key={index} href={item.link}>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, x: 10, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                      className="flex items-center space-x-4 sm:space-x-6 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 cursor-pointer group transition-all duration-300"
                    >
                      <motion.div
                        className={`w-12 sm:w-16 h-12 sm:h-16 ${item.bgColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div className="flex-1">
                        <motion.p className="font-semibold text-gray-900 text-base sm:text-lg group-hover:text-blue-600 transition-colors" whileHover={{ x: 5 }}>
                          {item.label}
                        </motion.p>
                        <motion.p className="text-gray-600 text-sm sm:text-base group-hover:text-gray-800 transition-colors" whileHover={{ x: 5 }}>
                          {item.value}
                        </motion.p>
                      </div>
                      <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                        <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </motion.div>
                    </motion.div>
                  </a>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.02, boxShadow: '0 25px 50px rgba(34, 197, 94, 0.15)' }}
              className="bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 group cursor-pointer"
            >
              <motion.h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-green-600 transition-colors" whileHover={{ x: 5 }}>
                Online Consultation Available
              </motion.h4>
              <motion.p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed" whileHover={{ x: 5 }}>
                Schedule your personalized homeopathic consultation from the comfort of your home. Available for patients worldwide with flexible timing options.
              </motion.p>
              <motion.div className="flex items-center space-x-3 text-green-600" whileHover={{ x: 10 }}>
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6" />
                </motion.div>
                <span className="font-semibold text-sm sm:text-base">Trusted by {patients.toLocaleString()}+ patients globally</span>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.02, boxShadow: '0 25px 50px rgba(59, 130, 246, 0.15)' }}
              className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 group cursor-pointer"
            >
              <motion.h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-blue-600 transition-colors" whileHover={{ x: 5 }}>
                Areas of Expertise
              </motion.h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  'General Homeopathy',
                  'Poultry Health',
                  'Chronic Diseases',
                  'Preventive Care',
                  'Health Education',
                  'Wellness Coaching',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 group/item cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}>
                      <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 group-hover/item:text-green-600 transition-colors" />
                    </motion.div>
                    <span className="text-sm text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;