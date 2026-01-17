import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const quickLinks = ['Home', 'Projects', 'About', 'Skills', 'Process', 'Contact'];

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6 md:px-12 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand Column */}
                    <motion.div
                        className="col-span-12 md:col-span-5 space-y-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3">
                            <motion.div
                                className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-emerald-500/30"
                                whileHover={{ scale: 1.1, rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                P
                            </motion.div>
                            <span className="text-3xl font-bold tracking-tight">Rishabh Soni</span>
                        </div>
                        <h3 className="text-xl text-emerald-400 font-semibold">Generative AI Engineer</h3>
                        <p className="text-gray-300 leading-relaxed max-w-sm">
                            Building production-ready AI solutions with over 4 years of experience in LLMs, Multi-Agent Systems, and MLOps.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="col-span-6 md:col-span-3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4 text-gray-300">
                            {quickLinks.map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <motion.a
                                        href={`#${item.toLowerCase()}`}
                                        className="hover:text-emerald-400 transition-colors duration-200 inline-flex items-center gap-2 group"
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="w-0 h-0.5 bg-emerald-400 group-hover:w-4 transition-all duration-300" />
                                        {item}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Connect */}
                    <motion.div
                        className="col-span-6 md:col-span-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-bold text-lg mb-6 text-white">Connect</h4>
                        <ul className="space-y-4 text-gray-300">
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                <a
                                    href="mailto:rishabh.soni_11@outlook.com"
                                    className="hover:text-emerald-400 transition-colors block group"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="text-emerald-400">✉</span>
                                        rishabh.soni_11@outlook.com
                                    </span>
                                </a>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                <a
                                    href="tel:+917879761418"
                                    className="hover:text-emerald-400 transition-colors block group"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="text-emerald-400">☎</span>
                                        +91 7879761418
                                    </span>
                                </a>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                <a
                                    href="https://www.linkedin.com/in/bdc-rishabh-soni/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-emerald-400 transition-colors block group"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="text-emerald-400">💼</span>
                                        LinkedIn Profile
                                    </span>
                                </a>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                <a
                                    href="https://github.com/rishabhSony"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-emerald-400 transition-colors block group"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="text-emerald-400">💻</span>
                                        GitHub Profile
                                    </span>
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="flex items-center gap-2">
                        © 2026 Rishabh Soni. All rights reserved.
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            ✨
                        </motion.span>
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <motion.a
                            href="#"
                            className="hover:text-emerald-400 transition-colors"
                            whileHover={{ y: -2 }}
                        >
                            Privacy Policy
                        </motion.a>
                        <motion.a
                            href="#"
                            className="hover:text-emerald-400 transition-colors"
                            whileHover={{ y: -2 }}
                        >
                            Terms of Service
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
