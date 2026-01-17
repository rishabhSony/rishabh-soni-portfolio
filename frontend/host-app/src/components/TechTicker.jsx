import React from 'react';
import { motion } from 'framer-motion';

const techs = [
    { name: "Python", icon: "🐍", desc: "AI/ML Core", color: "from-blue-500 to-cyan-500" },
    { name: "LLMs", icon: "🤖", desc: "Language Models", color: "from-purple-500 to-pink-500" },
    { name: "FastAPI", icon: "⚡", desc: "Backend API", color: "from-emerald-500 to-teal-500" },
    { name: "React", icon: "⚛️", desc: "Frontend UI", color: "from-cyan-500 to-blue-500" },
    { name: "AWS", icon: "☁️", desc: "Cloud Platform", color: "from-orange-500 to-red-500" },
    { name: "Docker", icon: "🐳", desc: "Containers", color: "from-blue-600 to-indigo-600" },
    { name: "Kubernetes", icon: "⎈", desc: "Orchestration", color: "from-indigo-500 to-purple-500" },
    { name: "TensorFlow", icon: "🧠", desc: "Deep Learning", color: "from-amber-500 to-orange-500" },
];

const TechCard = ({ name, icon, desc, color, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="group relative flex-shrink-0 w-56 h-32 bg-white/90 backdrop-blur-md rounded-2xl border-2 border-gray-200 hover:border-transparent p-6 flex flex-col justify-between mr-6 overflow-hidden transition-all duration-300 hover:shadow-2xl"
    >
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

        {/* Content */}
        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
                <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-cyan-600 transition-all duration-300">
                    {name}
                </h3>
            </div>
            <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                {desc}
            </p>
        </div>

        {/* Corner accent */}
        <motion.div
            className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${color} opacity-0 group-hover:opacity-20 rounded-tl-full transition-opacity duration-300`}
        />
    </motion.div>
);

const TechTicker = () => {
    return (
        <section className="py-16 overflow-hidden relative">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-emerald-600 mb-2">
                    Tech Stack
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Technologies & Tools
                </h2>
            </motion.div>

            {/* Scrolling Container with CSS Animation */}
            <div className="relative">
                <div className="flex overflow-x-auto pb-4 scrollbar-hide gap-6 scroll-smooth">
                    {techs.map((tech, i) => (
                        <TechCard key={i} {...tech} index={i} />
                    ))}
                </div>

                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
            </div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-6 text-center"
            >
                <p className="text-sm text-gray-400 font-mono">
                    ← Scroll to explore →
                </p>
            </motion.div>

            {/* Add custom scrollbar hiding */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default TechTicker;
