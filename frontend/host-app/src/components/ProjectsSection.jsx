import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Nellie",
        description: "AI-driven autonomous agent for complex task orchestration and execution.",
        tags: ["AI", "React", "Python"],
        link: "#",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        title: "Nebula",
        description: "Distributed cloud orchestration platform for managing micro-services at scale.",
        tags: ["Cloud", "Go", "Kubernetes"],
        link: "#",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "Hyperion",
        description: "High-performance data visualization engine for real-time analytics.",
        tags: ["WebGL", "Three.js", "D3"],
        link: "#",
        gradient: "from-emerald-500 to-teal-500"
    },
    {
        title: "Aegis",
        description: "Next-generation cybersecurity monitoring and threat detection system.",
        tags: ["Security", "Rust", "ML"],
        link: "#",
        gradient: "from-red-500 to-orange-500"
    }
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 relative">
            {/* Floating decorative elements */}
            <motion.div
                className="absolute top-20 left-20 w-4 h-4 bg-cyan-500 rounded-full opacity-30"
                animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-40 right-20 w-3 h-3 bg-pink-500 rounded-full opacity-30"
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            Selected<br />Works
                        </h2>
                        <motion.div
                            className="w-24 h-2 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                    </motion.div>
                    <motion.p
                        className="text-gray-600 max-w-sm mt-8 md:mt-0 text-lg font-light"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        A collection of digital products and systems crafted with precision and purpose.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl p-8 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between min-h-[320px] overflow-hidden"
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                            <div className="relative z-10">
                                <div className="flex gap-2 mb-6 flex-wrap">
                                    {project.tags.map(tag => (
                                        <motion.span
                                            key={tag}
                                            className="text-xs font-mono font-bold uppercase tracking-widest border-2 border-gray-300 px-3 py-1.5 rounded-full text-gray-600 group-hover:border-emerald-500 group-hover:text-emerald-600 transition-all duration-300"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-cyan-600 transition-all duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <motion.div
                                className="mt-8 relative z-10"
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <a href={project.link} className="inline-flex items-center gap-2 font-bold text-lg text-gray-900 group-hover:text-emerald-600 transition-colors">
                                    View Project
                                    <motion.span
                                        className="text-2xl"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.span>
                                </a>
                            </motion.div>

                            {/* Animated corner decoration */}
                            <motion.div
                                className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-tl-full"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                viewport={{ once: true }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
