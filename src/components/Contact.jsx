import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    from_phone: '',
    from_subject: '',
    message: '',
  });

  const form = useRef();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_93nofbn', 'template_0n6rets', form.current, {
      publicKey: 'p8ypLRlrAKz-mq9nm',
    }).then(() => {
      alert('SUCCESS!');
    }, (error) => {
      console.log('FAILED...', error.text);
    });

    setFormData({
      from_name: '',
      from_email: '',
      from_phone: '',
      from_subject: '',
      message: '',
    });
  };

  const inputBase = 'bg-transparent border-2 border-white/60 text-white rounded px-3 py-2 text-sm focus:outline-none focus:border-white placeholder-white/60';

  return (
    <div id="contact" className="relative w-full min-h-screen flex flex-col items-center px-4 text-white pt-24 bg-black">
      <div className="absolute top-[110%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl z-0"></div>
      <h1 className="text-3xl font-semibold text-white/90 mb-16">
        Contact <span className="italic text-white/70 tracking-[-0.1em] font-normal">Me!</span>
      </h1>

      <form ref={form} onSubmit={sendEmail} className="w-full max-w-2xl flex flex-col gap-6 items-center">
        <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
          <motion.input
            type="text"
            name="from_name"
            placeholder="Full Name"
            value={formData.from_name}
            onChange={handleChange}
            className={inputBase + ' w-full'}
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          />
          <motion.input
            type="email"
            name="from_email"
            placeholder="Email Address"
            value={formData.from_email}
            onChange={handleChange}
            className={inputBase + ' w-full'}
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5 }}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
          <motion.input
            type="text"
            name="from_phone"
            placeholder="Mobile Number"
            value={formData.from_phone}
            onChange={handleChange}
            className={inputBase + ' w-full'}
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2 }}
          />
          <motion.input
            type="text"
            name="from_subject"
            placeholder="Email Subject"
            value={formData.from_subject}
            onChange={handleChange}
            className={inputBase + ' w-full'}
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.8 }}
          />
        </div>

        <motion.textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className={inputBase + ' h-40 resize-none w-full'}
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2 }}
        />

        <motion.button
          type="submit"
          className="w-52 h-12 border-2 text-white/60 border-white/60 hover:text-white transition-all duration-300 rounded cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
