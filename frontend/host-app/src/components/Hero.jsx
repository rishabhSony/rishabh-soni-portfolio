import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-start pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-lg md:text-xl font-mono text-gray-500 mb-4 tracking-widest">
                    RISHABH SONI — 2026
                </h2>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-8 text-black"
            >
                SYSTEM<br />
                ARCHITECT
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-2xl text-xl md:text-2xl text-gray-700 font-light leading-relaxed"
            >
                Specializing in distributed systems, micro-frontends, and cloud orchestration.
                Building the future of digital infrastructure.
            </motion.p>
        </section>
    );
};

export default Hero;
