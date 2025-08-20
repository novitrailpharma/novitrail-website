'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Mail, 
  User, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle,
  AlertCircle,
  Loader,
  Heart,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const formFields = [
    { name: 'name', label: 'Full Name', type: 'text', icon: User, placeholder: 'Enter your full name' },
    { name: 'email', label: 'Email Address', type: 'email', icon: Mail, placeholder: 'Enter your email address' }
  ];

  const contactInfo = [
    { icon: Phone, title: 'Phone', info: '+91 99901 15992', color: 'from-blue-500 to-blue-600' },
    { icon: Mail, title: 'Email', info: 'info@novitrail.com', color: 'from-green-500 to-green-600' },
    { icon: MapPin, title: 'Address', info: 'SN.123, Vardhman Crown Mall, Plot No.2, Sector-19, Dwarka, New Delhi -110075', color: 'from-purple-500 to-purple-600' },
    { icon: Clock, title: 'Business Hours', info: '9 AM - 8 PM IST', color: 'from-orange-500 to-orange-600' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* COLORFUL Multi-Layer Background */}
      <div className="absolute inset-0">
        {/* Strong base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-novitrail-blue/35 via-blue-100/50 to-novitrail-orange/40" />

        {/* Additional color overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-purple-100/30 to-orange-200/45" />

        {/* Top section with strong blue for navbar contrast */}
        <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-novitrail-blue/25 via-blue-100/20 to-transparent" />

        {/* Middle colorful section - BENEATH "Get In Touch" */}
        <div className="absolute inset-x-0 top-[200px] h-[600px] bg-gradient-to-br from-blue-300/25 via-purple-200/30 to-orange-300/35" />

        {/* Bottom section with strong orange */}
        <div className="absolute inset-x-0 bottom-0 h-[400px] bg-gradient-to-t from-novitrail-orange/20 via-orange-100/15 to-transparent" />

        {/* Extra colorful accent bands */}
        <div className="absolute inset-x-0 top-1/3 h-64 bg-gradient-to-r from-blue-200/20 via-purple-200/25 to-orange-200/20 transform -skew-y-1" />
        <div className="absolute inset-x-0 bottom-1/3 h-48 bg-gradient-to-r from-orange-200/25 via-pink-200/20 to-blue-200/25 transform skew-y-1" />
      </div>

      {/* ENHANCED Animated Background Elements with MORE COLOR */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large vibrant floating elements */}
        <motion.div
          animate={{
            x: [-300, 1400],
            y: [150, -150],
            rotate: [0, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-novitrail-blue/25 to-novitrail-orange/25 rounded-full blur-2xl"
        />

        <motion.div
          animate={{
            x: [1400, -300],
            y: [-100, 900],
            rotate: [360, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 5 }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-orange-300/20 to-blue-300/20 rounded-full blur-2xl"
        />

        {/* Medium colorful elements */}
        <motion.div
          animate={{
            x: [800, -200],
            y: [250, 650],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: 8 }}
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-300/25 to-pink-300/25 rounded-full blur-xl"
        />

        {/* Small vibrant accent elements */}
        <motion.div
          animate={{
            x: [0, 1300, 0],
            y: [400, 200, 400],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear', delay: 12 }}
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-300/20 to-yellow-300/20 rounded-full blur-lg"
        />

        {/* TOP AREA - More colorful elements for navbar contrast */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-novitrail-blue/30 to-purple-300/25 rounded-full blur-2xl"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.8, 0.5],
            rotate: [360, 270, 180, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute top-20 right-1/3 w-[350px] h-[350px] bg-gradient-to-bl from-novitrail-orange/35 to-pink-300/20 rounded-full blur-2xl"
        />

        {/* BENEATH "Get In Touch" - Extra colorful elements */}
        <motion.div
          animate={{
            x: [100, 900, 100],
            y: [300, 500, 300],
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        />

        <motion.div
          animate={{
            x: [1000, 200, 1000],
            y: [350, 550, 350],
            scale: [1.1, 1, 1.1],
            rotate: [180, 360, 540]
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 10 }}
          className="absolute w-80 h-80 bg-gradient-to-l from-orange-400/25 to-red-400/20 rounded-full blur-lg"
        />

        {/* Additional colorful accents */}
        <motion.div
          animate={{
            scale: [0.8, 1.5, 0.8],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-tr from-teal-300/20 to-cyan-300/20 rounded-full blur-xl"
        />

        <motion.div
          animate={{
            scale: [1.3, 0.9, 1.3],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 7 }}
          className="absolute top-2/3 right-1/4 w-64 h-64 bg-gradient-to-bl from-indigo-300/25 to-violet-300/20 rounded-full blur-lg"
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl w-full"
        >
          {/* Header Section with enhanced colors (added desktop m-10 p-10) */}
          <motion.div variants={itemVariants} className="text-center mb-16 lg:m-10 lg:p-10">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-novitrail-blue to-novitrail-orange rounded-2xl flex items-center justify-center mx-auto shadow-2xl ring-4 ring-white/20">
                <Send className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-novitrail-blue to-novitrail-orange mb-6 font-tomorrow drop-shadow-lg">
              Get In Touch
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '8rem' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-2 bg-gradient-to-r from-novitrail-blue via-purple-500 to-novitrail-orange mx-auto mb-6 rounded-full shadow-lg"
            />
            <p className="text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed font-medium">
              Ready to elevate your pharmaceutical operations? We&apos;re here to help you succeed with innovative solutions and expert support.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form with more transparency to show colors */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/40 relative overflow-hidden">
                {/* Colorful background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-novitrail-blue/20 to-novitrail-orange/20" />
                  <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-400/10 rounded-full blur-xl" />
                  <div className="absolute center w-24 h-24 bg-blue-400/10 rounded-full blur-lg" />
                </div>

                <div className="relative z-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                  >
                    <h2 className="text-3xl font-bold text-novitrail-blue mb-4 font-tomorrow">
                      Send us a Message
                    </h2>
                    <p className="text-gray-700">
                      Fill out the form below and we&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {formFields.map((field, index) => (
                        <motion.div
                          key={field.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {field.label} <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                              focusedField === field.name ? 'text-novitrail-orange' : 'text-gray-400'
                            }`}>
                              <field.icon className="w-5 h-5" />
                            </div>
                            <motion.input
                              whileFocus={{ scale: 1.02 }}
                              type={field.type}
                              name={field.name}
                              value={formData[field.name as keyof typeof formData]}
                              onChange={handleChange}
                              onFocus={() => setFocusedField(field.name)}
                              onBlur={() => setFocusedField(null)}
                              placeholder={field.placeholder}
                              className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white ${
                                errors[field.name]
                                  ? 'border-red-300 focus:border-red-500'
                                  : focusedField === field.name
                                    ? 'border-novitrail-orange focus:border-novitrail-orange'
                                    : 'border-gray-200 focus:border-novitrail-blue'
                              }`}
                            />
                            {errors[field.name] && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 mt-2 text-red-500 text-sm"
                              >
                                <AlertCircle className="w-4 h-4" />
                                {errors[field.name]}
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Subject Field */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                          focusedField === 'subject' ? 'text-novitrail-orange' : 'text-gray-400'
                        }`}>
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <motion.input
                          whileFocus={{ scale: 1.02 }}
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="What is your inquiry about?"
                          className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white ${
                            errors.subject
                              ? 'border-red-300 focus:border-red-500'
                              : focusedField === 'subject'
                                ? 'border-novitrail-orange focus:border-novitrail-orange'
                                : 'border-gray-200 focus:border-novitrail-blue'
                          }`}
                        />
                        {errors.subject && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mt-2 text-red-500 text-sm"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.subject}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <motion.textarea
                          whileFocus={{ scale: 1.02 }}
                          name="message"
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Tell us about your requirements, questions, or how we can help you..."
                          className={`w-full p-4 bg-gray-50 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white resize-none ${
                            errors.message
                              ? 'border-red-300 focus:border-red-500'
                              : focusedField === 'message'
                                ? 'border-novitrail-orange focus:border-novitrail-orange'
                                : 'border-gray-200 focus:border-novitrail-blue'
                          }`}
                        />
                        {errors.message && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mt-2 text-red-500 text-sm"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.message}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="pt-4"
                    >
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full relative overflow-hidden bg-gradient-to-r from-novitrail-blue to-novitrail-blue/90 hover:from-novitrail-orange hover:to-novitrail-orange/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-500 shadow-xl hover:shadow-2xl ${
                          isSubmitting ? 'cursor-not-allowed opacity-70' : ''
                        }`}
                      >
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div
                              key="loading"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center justify-center gap-3"
                            >
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              >
                                <Loader className="w-5 h-5" />
                              </motion.div>
                              Sending Message...
                            </motion.div>
                          ) : (
                            <motion.div
                              key="send"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center justify-center gap-3"
                            >
                              Send Message
                              <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <Send className="w-5 h-5" />
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </motion.div>
                  </form>

                  {/* Status Messages */}
                  <AnimatePresence>
                    {status && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        className={`mt-6 p-4 rounded-xl flex items-center gap-3 ${
                          status === 'success'
                            ? 'bg-green-50 border border-green-200 text-green-800'
                            : 'bg-red-50 border border-red-200 text-red-800'
                        }`}
                      >
                        {status === 'success' ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
                          >
                            <CheckCircle className="w-6 h-6" />
                          </motion.div>
                        ) : (
                          <AlertCircle className="w-6 h-6" />
                        )}
                        <div>
                          {status === 'success' 
                            ? "Message sent successfully! We'll get back to you within 24 hours."
                            : 'Failed to send message. Please try again or contact us directly.'
                          }
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Contact Information with reduced transparency */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/75 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/40 group hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{contact.title}</h3>
                    <p className="text-gray-700">{contact.info}</p>
                  </motion.div>
                ))}
              </div>

              {/* Why Choose Us Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-gradient-to-br from-novitrail-blue to-novitrail-blue/90 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-novitrail-orange/20 rounded-full blur-xl" />

                <div className="relative z-10">
                  <motion.div 
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="mb-6"
                  >
                    <Heart className="w-8 h-8 text-novitrail-orange" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 font-tomorrow">Why Partner With Us?</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Globe, text: "Global reach across 20+ countries" },
                      { icon: Shield, text: "FDA-compliant and GDP-certified" },
                      { icon: Zap, text: "24/7 expert support and consultation" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <item.icon className="w-5 h-5 text-novitrail-orange" />
                        <span className="text-blue-100">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Quote Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="bg-white/75 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/40 text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-6xl text-novitrail-orange mb-4"
                >
                  &quot;
                </motion.div>
                <p className="text-gray-800 italic text-lg leading-relaxed mb-4 font-medium">
                  Empowering your journey with innovation, trust, and reliability in pharmaceutical excellence.
                </p>
                <div className="text-sm text-gray-600 font-semibold">
                  — Novitrail Pharmaceuticals Team
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;