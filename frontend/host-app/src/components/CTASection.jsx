import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import ContactFormModal from './ContactFormModal';
import PortfolioModal from './PortfolioModal';

const CTASection = () => {
    const [isHoveringStart, setIsHoveringStart] = useState(false);
    const [isHoveringView, setIsHoveringView] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);

    // Floating particles animation
    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="relative py-32 px-6 md:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
            {/* Animated background gradients */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ transform: 'translate(-50%, -50%)' }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ transform: 'translate(50%, 50%)' }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{ transform: 'translate(-50%, -50%)' }}
                />
            </div>

            {/* Floating decorative elements */}
            <motion.div
                className="absolute top-20 left-10 w-3 h-3 bg-emerald-500 rounded-full opacity-60"
                variants={floatingVariants}
                animate="animate"
            />
            <motion.div
                className="absolute top-40 right-20 w-2 h-2 bg-purple-500 rounded-full opacity-60"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 0.5 }}
            />
            <motion.div
                className="absolute bottom-32 left-1/4 w-4 h-4 bg-cyan-500 rounded-full opacity-40"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
            />

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-700 text-sm font-bold rounded-full border border-emerald-200 shadow-sm">
                            ✨ Ready to Start?
                        </span>
                    </motion.div>

                    {/* Main heading with gradient animation */}
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                        Let's Build<br />
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 inline-block"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                backgroundSize: '200% 200%',
                            }}
                        >
                            Something Amazing
                        </motion.span>
                    </h2>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Ready to transform your vision into reality? Let's collaborate and create
                        <span className="text-emerald-600 font-bold"> digital experiences</span> that make an impact.
                    </motion.p>

                    {/* Enhanced buttons with Rocket-style interactions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
                        <motion.button
                            onHoverStart={() => setIsHoveringStart(true)}
                            onHoverEnd={() => setIsHoveringStart(false)}
                            onClick={() => setIsContactModalOpen(true)}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative px-10 py-5 bg-black text-white font-bold text-lg rounded-full overflow-hidden shadow-2xl shadow-black/20 transition-all duration-300"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600"
                                initial={{ x: '-100%' }}
                                animate={{ x: isHoveringStart ? '0%' : '-100%' }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10 flex items-center gap-2">
                                Start a Project
                                <motion.span
                                    animate={{ x: isHoveringStart ? 5 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    →
                                </motion.span>
                            </span>
                        </motion.button>

                        <motion.button
                            onHoverStart={() => setIsHoveringView(true)}
                            onHoverEnd={() => setIsHoveringView(false)}
                            onClick={() => setIsPortfolioModalOpen(true)}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative px-10 py-5 bg-white text-black border-2 border-gray-300 font-bold text-lg rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isHoveringView ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10 flex items-center gap-2">
                                View Portfolio
                                <motion.span
                                    animate={{
                                        rotate: isHoveringView ? 360 : 0,
                                        scale: isHoveringView ? 1.2 : 1
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    ✦
                                </motion.span>
                            </span>
                        </motion.button>
                    </div>

                    {/* Feature highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap items-center justify-center gap-8 mb-12 text-sm font-semibold text-gray-500"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-emerald-500">✓</span>
                            <span>Production-Ready Code</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-emerald-500">✓</span>
                            <span>Modern Architecture</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-emerald-500">✓</span>
                            <span>Scalable Solutions</span>
                        </div>
                    </motion.div>

                    {/* Contact info with enhanced styling */}
                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-600 font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <motion.a
                            href="mailto:rishabh.soni_11@outlook.com"
                            className="group flex items-center gap-2 hover:text-emerald-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="text-emerald-500 group-hover:scale-110 transition-transform">✉</span>
                            rishabh.soni_11@outlook.com
                        </motion.a>
                        <span className="hidden md:inline text-gray-300">•</span>
                        <motion.a
                            href="tel:+917879761418"
                            className="group flex items-center gap-2 hover:text-emerald-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="text-emerald-500 group-hover:scale-110 transition-transform">☎</span>
                            +91 7879761418
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Modals */}
            <ContactFormModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
            <PortfolioModal
                isOpen={isPortfolioModalOpen}
                onClose={() => setIsPortfolioModalOpen(false)}
            />
        </section>
    );
};

export default CTASection;
