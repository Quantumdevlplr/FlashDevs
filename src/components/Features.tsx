import React from 'react';
import { CheckCircle, Clock, Users, Shield, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: 'Quality Code',
      description: 'We write clean, maintainable code that follows industry best practices and standards.',
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
    },
    {
      title: 'Fast Delivery',
      description: 'Our agile development process ensures quick turnaround times without compromising quality.',
      icon: <Clock className="h-6 w-6 text-blue-500" />,
    },
    {
      title: 'Collaborative Approach',
      description: 'We work closely with you throughout the development process to ensure your vision is realized.',
      icon: <Users className="h-6 w-6 text-purple-500" />,
    },
    {
      title: 'Secure Solutions',
      description: 'Security is built into everything we create, protecting your data and your users.',
      icon: <Shield className="h-6 w-6 text-red-500" />,
    },
    {
      title: 'Performance Optimized',
      description: 'Our applications are built for speed and efficiency, providing the best user experience.',
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: 'Expert Developers',
      description: 'Our team consists of experienced developers with expertise across various technologies.',
      icon: <Award className="h-6 w-6 text-indigo-500" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose FlashDevs?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We're committed to delivering exceptional digital solutions that exceed expectations.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="lg:grid lg:grid-cols-2">
            <div className="px-6 py-12 max-w-xl lg:max-w-5xl lg:px-12">
              <motion.h2 
                className="text-2xl font-bold text-gray-900 sm:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Our Development Process
              </motion.h2>
              <motion.p 
                className="mt-4 text-lg text-gray-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                We follow a structured approach to ensure your project is delivered on time and exceeds expectations.
              </motion.p>
              <div className="mt-8">
                {[
                  { step: 1, title: "Discovery & Planning", desc: "We start by understanding your requirements and creating a detailed project plan." },
                  { step: 2, title: "Design & Development", desc: "Our team designs and develops your solution with regular updates and feedback." },
                  { step: 3, title: "Testing & Deployment", desc: "We thoroughly test your application before deploying it to production." },
                  { step: 4, title: "Maintenance & Support", desc: "We provide ongoing support and maintenance to ensure your application runs smoothly." }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className={`${index > 0 ? 'mt-6 ' : ''}flex items-center`}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div 
                        className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <span className="text-lg font-bold">{item.step}</span>
                      </motion.div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                      <p className="mt-2 text-base text-gray-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                className="h-full w-full object-cover"
                src="https://res-console.cloudinary.com/dvoned9mv/media_explorer_thumbnails/7efb37f3c162bd8fea6f4f6592214975/detailed"
                alt="Team collaboration"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;