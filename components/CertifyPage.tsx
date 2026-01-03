import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, CheckCircle, Clock, Trophy, Shield } from 'lucide-react';

interface CertifyPageProps {
    onBack: () => void;
    onOpenAuth: () => void;
}

const CertifyPage: React.FC<CertifyPageProps> = ({ onBack, onOpenAuth }) => {
    const certifications = [
        {
            title: 'Professional Web Developer',
            provider: 'The Hiring',
            duration: '3 months',
            exams: 4,
            badge: '🏆',
            color: 'from-blue-500 to-indigo-600',
            verified: true,
        },
        {
            title: 'Data Analytics Specialist',
            provider: 'The Hiring',
            duration: '2 months',
            exams: 3,
            badge: '📊',
            color: 'from-emerald-500 to-teal-600',
            verified: true,
        },
        {
            title: 'Cloud Solutions Architect',
            provider: 'AWS Partnership',
            duration: '4 months',
            exams: 5,
            badge: '☁️',
            color: 'from-orange-500 to-red-600',
            verified: true,
        },
        {
            title: 'UX Design Professional',
            provider: 'The Hiring',
            duration: '2.5 months',
            exams: 3,
            badge: '🎨',
            color: 'from-purple-500 to-pink-600',
            verified: true,
        },
        {
            title: 'AI & Machine Learning Engineer',
            provider: 'Google Partnership',
            duration: '5 months',
            exams: 6,
            badge: '🤖',
            color: 'from-cyan-500 to-blue-600',
            verified: true,
        },
        {
            title: 'Product Management Expert',
            provider: 'The Hiring',
            duration: '2 months',
            exams: 3,
            badge: '📋',
            color: 'from-amber-500 to-orange-600',
            verified: true,
        },
    ];

    const benefits = [
        { icon: Trophy, title: 'Industry Recognition', desc: 'Certificates recognized by top companies worldwide' },
        { icon: Shield, title: 'Verified Skills', desc: 'Blockchain-backed verification of your expertise' },
        { icon: CheckCircle, title: 'Career Boost', desc: 'Certified professionals earn 40% more on average' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-24 pb-16 px-6"
        >
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <button
                        onClick={onBack}
                        className="p-2 hover:bg-brand-dark/5 rounded-full transition-colors"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">
                            <Award className="inline-block mr-3 text-brand-accent" size={40} />
                            Certify
                        </h1>
                        <p className="text-brand-dark/60 mt-2">Earn industry-recognized certifications</p>
                    </div>
                </div>

                {/* Benefits */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            className="p-6 bg-brand-dark text-brand-cream rounded-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <benefit.icon size={28} className="text-brand-accent mb-4" />
                            <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                            <p className="text-brand-cream/60 text-sm">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Grid */}
                <h2 className="text-2xl font-bold text-brand-dark mb-6">Available Certifications</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-brand-dark/5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                            onClick={onOpenAuth}
                        >
                            {/* Header */}
                            <div className={`h-24 bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
                                <span className="text-5xl">{cert.badge}</span>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    {cert.verified && (
                                        <span className="flex items-center gap-1 text-xs text-brand-accent font-medium">
                                            <Shield size={12} />
                                            Verified
                                        </span>
                                    )}
                                </div>
                                <h3 className="font-bold text-lg text-brand-dark mb-2">{cert.title}</h3>
                                <p className="text-sm text-brand-dark/60 mb-4">{cert.provider}</p>

                                <div className="flex items-center justify-between text-sm text-brand-dark/50">
                                    <span className="flex items-center gap-1">
                                        <Clock size={14} />
                                        {cert.duration}
                                    </span>
                                    <span>{cert.exams} exams</span>
                                </div>

                                <button className="w-full mt-4 py-2.5 bg-brand-dark text-brand-cream rounded-xl text-sm font-semibold hover:bg-brand-dark/90 transition-colors">
                                    Start Certification
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default CertifyPage;
