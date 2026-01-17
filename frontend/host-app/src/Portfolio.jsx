import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';
import TechTicker from './components/TechTicker';
import ProfileSection from './components/ProfileSection';
import ProjectsSection from './components/ProjectsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const Portfolio = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Global Animated Background Gradients - Optimized */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <motion.div
                    className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-400/15 to-cyan-400/15 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <Navbar />

                <main className="container mx-auto px-6 pt-24 pb-12">
                    <Hero />
                    <TechTicker />
                    <ProfileSection />
                    <ProjectsSection />
                    <CTASection />
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default Portfolio;
