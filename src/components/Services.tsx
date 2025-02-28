import React from 'react';
import { Globe, Smartphone, Server, Code, Database, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites built with modern technologies that are fast, responsive, and user-friendly.',
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
      icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side solutions that power your applications with security and scalability in mind.',
      icon: <Server className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: 'Frontend Development',
      description: 'Beautiful, interactive user interfaces built with the latest frameworks and best practices.',
      icon: <Code className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: 'Database Design',
      description: 'Efficient database architectures that ensure your data is organized, secure, and easily accessible.',
      icon: <Database className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: 'API Development',
      description: 'Custom API solutions that connect your applications and services seamlessly.',
      icon: <Layers className="h-8 w-8 text-indigo-600" />,
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We offer a comprehensive range of development services to bring your digital ideas to life.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div 
                className="mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;