import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactFormModal from './ContactFormModal';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#', icon: '🏠' },
        { name: 'Profile', href: '#profile', icon: '👤' },
        { name: 'Projects', href: '#projects', icon: '💼' },
        { name: 'Contact', href: '#contact', icon: '📧' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-200/50 py-3'
                    : 'bg-white/30 backdrop-blur-md py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex justify-between items-center">
                        {/* Animated Logo */}
                        <motion.div
                            className="flex items-center gap-3 group cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Hexagonal Tech Logo */}
                            <div className="relative w-14 h-14">
                                {/* Rotating outer hexagon */}
                                <motion.div
                                    className="absolute inset-0"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <polygon
                                            points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                                            fill="none"
                                            stroke="url(#gradient1)"
                                            strokeWidth="2"
                                            opacity="0.4"
                                        />
                                        <defs>
                                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#10b981" />
                                                <stop offset="100%" stopColor="#06b6d4" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </motion.div>

                                {/* Inner hexagon with gradient */}
                                <motion.div
                                    className="absolute inset-1"
                                    animate={{
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                                        <polygon
                                            points="50,8 85,28 85,72 50,92 15,72 15,28"
                                            fill="url(#gradient2)"
                                        />
                                        <defs>
                                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#10b981" />
                                                <stop offset="50%" stopColor="#06b6d4" />
                                                <stop offset="100%" stopColor="#3b82f6" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </motion.div>

                                {/* RS Text */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white font-black text-lg tracking-tighter drop-shadow-md">
                                        RS
                                    </span>
                                </div>

                                {/* Glowing effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 blur-xl"
                                    animate={{
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                />

                                {/* Corner accents */}
                                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                                        style={{
                                            top: '50%',
                                            left: '50%',
                                            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-24px)`,
                                        }}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.5, 1, 0.5],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: i * 0.2,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Brand name with gradient */}
                            <div className="flex flex-col">
                                <motion.span
                                    className="text-xl md:text-2xl font-black tracking-tighter bg-gradient-to-r from-gray-900 via-emerald-600 to-cyan-600 bg-clip-text text-transparent"
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
                                    RISHABH SONI
                                </motion.span>
                                <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
                                    Generative AI Engineer
                                </span>
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-2">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -2 }}
                                    className={`group relative px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${activeSection === item.name.toLowerCase()
                                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/30'
                                        : 'text-gray-700 hover:text-emerald-600'
                                        }`}
                                    onClick={() => setActiveSection(item.name.toLowerCase())}
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="text-base">{item.icon}</span>
                                        {item.name}
                                    </span>

                                    {/* Hover underline effect */}
                                    {activeSection !== item.name.toLowerCase() && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </motion.a>
                            ))}

                            {/* CTA Button */}
                            <motion.button
                                onClick={() => setIsContactModalOpen(true)}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold text-sm rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300"
                            >
                                <span className="flex items-center gap-2">
                                    Let's Talk
                                    <motion.span
                                        animate={{ x: [0, 3, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.span>
                                </span>
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/30"
                        >
                            <div className="flex flex-col gap-1.5">
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                    className="w-5 h-0.5 bg-white rounded-full"
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    className="w-5 h-0.5 bg-white rounded-full"
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                    className="w-5 h-0.5 bg-white rounded-full"
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-80 bg-gradient-to-br from-white to-gray-50 shadow-2xl z-50 md:hidden overflow-y-auto"
                        >
                            <div className="p-8">
                                {/* Close button */}
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                >
                                    <span className="text-2xl text-gray-600">×</span>
                                </motion.button>

                                {/* Mobile Logo */}
                                <div className="mb-12 mt-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg">
                                            <span className="text-white font-black text-xl">RS</span>
                                        </div>
                                        <div>
                                            <h3 className="font-black text-lg bg-gradient-to-r from-gray-900 to-emerald-600 bg-clip-text text-transparent">
                                                RISHABH SONI
                                            </h3>
                                            <p className="text-xs text-gray-500 font-mono">SYSTEM ARCHITECT</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile Nav Items */}
                                <nav className="space-y-2">
                                    {navItems.map((item, index) => (
                                        <motion.a
                                            key={item.name}
                                            href={item.href}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="flex items-center gap-4 p-4 rounded-xl bg-white hover:bg-gradient-to-r hover:from-emerald-50 hover:to-cyan-50 border-2 border-gray-100 hover:border-emerald-500 transition-all duration-300 group"
                                        >
                                            <span className="text-3xl">{item.icon}</span>
                                            <span className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                                                {item.name}
                                            </span>
                                            <motion.span
                                                className="ml-auto text-gray-400 group-hover:text-emerald-600"
                                                whileHover={{ x: 5 }}
                                            >
                                                →
                                            </motion.span>
                                        </motion.a>
                                    ))}
                                </nav>

                                {/* Mobile CTA */}
                                <motion.button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsContactModalOpen(true);
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30"
                                >
                                    Let's Talk →
                                </motion.button>

                                {/* Social Links */}
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <p className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-wider">Connect</p>
                                    <div className="flex gap-3">
                                        {['💼', '🐦', '📸', '💻'].map((icon, i) => (
                                            <motion.button
                                                key={i}
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 hover:from-emerald-500 hover:to-cyan-500 flex items-center justify-center text-xl transition-all duration-300 shadow-md hover:shadow-lg"
                                            >
                                                {icon}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Contact Modal */}
            <ContactFormModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
};

export default Navbar;
