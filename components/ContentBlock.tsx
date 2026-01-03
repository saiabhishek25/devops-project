import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ContentBlock: React.FC = () => {
    const benefits = [
        'Industry-leading curriculum designed by experts',
        'Hands-on projects and real-world applications',
        'Personalized learning paths and recommendations',
        'Direct access to hiring partners worldwide',
    ];

    return (
        <section className="py-24 md:py-32 px-6 bg-brand-dark text-brand-cream">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Why Choose
                            <br />
                            <span className="text-brand-accent">The Hiring?</span>
                        </h2>
                        <p className="text-brand-cream/60 text-lg mb-8 leading-relaxed">
                            We're not just another learning platform. We're a complete career ecosystem
                            that bridges the gap between learning and employment.
                        </p>
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <CheckCircle size={20} className="text-brand-accent mt-1 flex-shrink-0" />
                                    <span className="text-brand-cream/80">{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="aspect-square bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 rounded-3xl flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="text-7xl md:text-8xl font-bold text-brand-accent mb-4">95%</div>
                                <p className="text-xl text-brand-cream/80">of our graduates land jobs within 6 months</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent/10 rounded-2xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-accent/5 rounded-2xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContentBlock;
