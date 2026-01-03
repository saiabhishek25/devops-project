import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
    onOpenAuth: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAuth }) => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
            <div className="container mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 rounded-full mb-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.4 }}
                    >
                        <Sparkles size={16} className="text-brand-accent" />
                        <span className="text-sm font-medium text-brand-accent">
                            The Future of Career Development
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-brand-dark mb-6 leading-[1.1]">
                        Where Talent
                        <br />
                        <span className="text-brand-accent">Meets Opportunity</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-brand-dark/60 max-w-2xl mx-auto mb-10 font-medium">
                        The complete ecosystem for learning, certification, and career matching.
                        Your journey to professional excellence starts here.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.button
                            onClick={onOpenAuth}
                            className="group px-8 py-4 bg-brand-dark text-brand-cream rounded-full font-semibold text-sm uppercase tracking-wider hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Start Your Journey
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        <button className="px-8 py-4 border-2 border-brand-dark/20 text-brand-dark rounded-full font-semibold text-sm uppercase tracking-wider hover:border-brand-dark/40 transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                    {/* Stats */}
                    <motion.div
                        className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.6 }}
                    >
                        {[
                            { value: '50K+', label: 'Active Learners' },
                            { value: '500+', label: 'Courses' },
                            { value: '95%', label: 'Placement Rate' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-brand-dark">{stat.value}</div>
                                <div className="text-sm text-brand-dark/50 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
