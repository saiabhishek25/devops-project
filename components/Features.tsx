import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, Briefcase } from 'lucide-react';

type ViewState = 'landing' | 'learn' | 'certify' | 'match' | 'community' | 'dashboard';

interface FeaturesProps {
    onNavigate: (view: ViewState) => void;
}

const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
    const features = [
        {
            icon: BookOpen,
            title: 'Learn',
            description: 'Access world-class courses from industry experts. Master new skills at your own pace.',
            view: 'learn' as ViewState,
            color: 'from-blue-500 to-indigo-600',
        },
        {
            icon: Award,
            title: 'Certify',
            description: 'Earn industry-recognized certifications that validate your expertise and boost your credibility.',
            view: 'certify' as ViewState,
            color: 'from-emerald-500 to-teal-600',
        },
        {
            icon: Briefcase,
            title: 'Match',
            description: 'Get matched with opportunities that align with your skills, goals, and aspirations.',
            view: 'match' as ViewState,
            color: 'from-orange-500 to-red-600',
        },
        {
            icon: Users,
            title: 'Community',
            description: 'Connect with peers, mentors, and industry leaders. Grow together in a supportive ecosystem.',
            view: 'community' as ViewState,
            color: 'from-purple-500 to-pink-600',
        },
    ];

    return (
        <section className="py-24 md:py-32 px-6">
            <div className="container mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4">
                        The Complete <span className="text-brand-accent">Ecosystem</span>
                    </h2>
                    <p className="text-lg text-brand-dark/60 max-w-2xl mx-auto">
                        Everything you need to accelerate your career, all in one place.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.button
                            key={feature.title}
                            onClick={() => onNavigate(feature.view)}
                            className="group p-8 bg-white rounded-3xl text-left hover:shadow-xl transition-all duration-500 border border-brand-dark/5"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon size={24} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-3">{feature.title}</h3>
                            <p className="text-brand-dark/60 text-sm leading-relaxed">{feature.description}</p>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
