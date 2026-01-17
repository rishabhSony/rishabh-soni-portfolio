import React from 'react';
import { motion } from 'framer-motion';

const ProfileSection = () => {
    const skills = [
        { title: "System Design", desc: "Microservices, Event-Driven Architecture, Hexagonal Pattern", icon: "🏗️" },
        { title: "Cloud Native", desc: "AWS, Kubernetes, Docker, Terraform", icon: "☁️" },
        { title: "Full Stack", desc: "Java (Spring), React, TypeScript, Node.js", icon: "💻" },
        { title: "DevOps", desc: "CI/CD Pipelines, Monitoring (Prometheus/Grafana)", icon: "⚙️" },
    ];

    return (
        <section id="profile" className="py-24 relative">
            {/* Floating decorative elements */}
            <motion.div
                className="absolute top-10 right-10 w-3 h-3 bg-emerald-500 rounded-full opacity-40"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 left-10 w-2 h-2 bg-purple-500 rounded-full opacity-40"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <motion.div
                    className="col-span-12 md:col-span-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        PROFILE
                    </h2>
                    <motion.div
                        className="w-24 h-2 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full mb-8"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <div className="col-span-12 md:col-span-8 space-y-12">
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-sm font-mono font-bold mb-4 uppercase tracking-widest text-emerald-600">
                            Bio
                        </h3>
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-800">
                            I'm a passionate and honest <span className="font-semibold text-emerald-600">architect of AI systems</span> with over 4 years of experience building production-ready solutions.
                            My work focuses on bridging the gap between cutting-edge research and scalable enterprise applications.
                            I specialize in <span className="font-semibold">Large Language Models, Multi-Agent Systems, Computer Vision, and MLOps</span>.
                            From architecting intelligent systems to deploying them at scale, I'm committed to creating AI that drives real business value through honest innovation.
                        </p>
                    </motion.div>

                    {/* Core Competencies */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-sm font-mono font-bold mb-6 uppercase tracking-widest text-emerald-600">
                            Core Competencies
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-xl border-2 border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative z-10">
                                        <div className="text-4xl mb-3">{skill.icon}</div>
                                        <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors">
                                            {skill.title}
                                        </h4>
                                        <p className="text-gray-600 font-light text-sm leading-relaxed">
                                            {skill.desc}
                                        </p>
                                    </div>

                                    {/* Animated corner accent */}
                                    <motion.div
                                        className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-bl-full"
                                        initial={{ scale: 0 }}
                                        whileHover={{ scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
