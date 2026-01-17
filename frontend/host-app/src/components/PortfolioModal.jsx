import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        title: "Nellie",
        description: "AI-driven autonomous agent for complex task orchestration and execution.",
        tags: ["AI", "React", "Python"],
        image: "🤖",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Nebula",
        description: "Distributed cloud orchestration platform for managing micro-services at scale.",
        tags: ["Cloud", "Go", "Kubernetes"],
        image: "☁️",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Hyperion",
        description: "High-performance data visualization engine for real-time analytics.",
        tags: ["WebGL", "Three.js", "D3"],
        image: "📊",
        color: "from-emerald-500 to-teal-500"
    },
    {
        title: "Aegis",
        description: "Next-generation cybersecurity monitoring and threat detection system.",
        tags: ["Security", "Rust", "ML"],
        image: "🛡️",
        color: "from-red-500 to-orange-500"
    },
    {
        title: "Quantum",
        description: "Quantum computing simulation framework for research and development.",
        tags: ["Quantum", "Python", "Research"],
        image: "⚛️",
        color: "from-indigo-500 to-purple-500"
    },
    {
        title: "Phoenix",
        description: "Real-time collaboration platform with advanced synchronization.",
        tags: ["WebRTC", "Node.js", "Redis"],
        image: "🔥",
        color: "from-orange-500 to-red-500"
    }
];

const PortfolioModal = ({ isOpen, onClose }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative flex flex-col"
                        >
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all z-10 backdrop-blur-sm"
                            >
                                <span className="text-2xl text-gray-600">×</span>
                            </button>

                            {/* Header */}
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 text-white">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio Showcase</h2>
                                    <p className="text-gray-300 text-lg">
                                        Explore our collection of innovative projects and solutions.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Projects Grid */}
                            <div className="flex-1 overflow-y-auto p-8 md:p-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {projects.map((project, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * index }}
                                            whileHover={{ y: -5 }}
                                            className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
                                        >
                                            {/* Gradient background on hover */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                                            <div className="relative z-10">
                                                {/* Icon */}
                                                <div className="text-6xl mb-4">{project.image}</div>

                                                {/* Tags */}
                                                <div className="flex gap-2 mb-4 flex-wrap">
                                                    {project.tags.map(tag => (
                                                        <span
                                                            key={tag}
                                                            className="text-xs font-mono font-bold uppercase tracking-widest border border-gray-300 px-3 py-1 rounded-full text-gray-600 bg-gray-50"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-cyan-600 transition-all">
                                                    {project.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-gray-600 leading-relaxed mb-4">
                                                    {project.description}
                                                </p>

                                                {/* View button */}
                                                <motion.button
                                                    whileHover={{ x: 5 }}
                                                    className="inline-flex items-center gap-2 font-bold text-gray-900 group-hover:text-emerald-600 transition-colors"
                                                >
                                                    View Details
                                                    <span className="text-xl">→</span>
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Footer CTA */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-12 text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200"
                                >
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        Interested in working together?
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Let's discuss how we can bring your vision to life.
                                    </p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={onClose}
                                        className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all"
                                    >
                                        Get in Touch
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default PortfolioModal;
