import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, MapPin, DollarSign, Clock, Building2, Heart } from 'lucide-react';

interface MatchPageProps {
    onBack: () => void;
    onOpenAuth: () => void;
}

const MatchPage: React.FC<MatchPageProps> = ({ onBack, onOpenAuth }) => {
    const jobs = [
        {
            title: 'Senior Frontend Developer',
            company: 'TechCorp Inc.',
            location: 'San Francisco, CA',
            salary: '$150K - $200K',
            type: 'Full-time',
            remote: true,
            match: 95,
            skills: ['React', 'TypeScript', 'Next.js'],
            posted: '2 days ago',
        },
        {
            title: 'Product Designer',
            company: 'DesignStudio',
            location: 'New York, NY',
            salary: '$120K - $160K',
            type: 'Full-time',
            remote: true,
            match: 92,
            skills: ['Figma', 'UI/UX', 'Design Systems'],
            posted: '1 day ago',
        },
        {
            title: 'Data Scientist',
            company: 'DataDriven Co.',
            location: 'Boston, MA',
            salary: '$140K - $180K',
            type: 'Full-time',
            remote: false,
            match: 88,
            skills: ['Python', 'Machine Learning', 'SQL'],
            posted: '3 days ago',
        },
        {
            title: 'DevOps Engineer',
            company: 'CloudScale',
            location: 'Seattle, WA',
            salary: '$160K - $210K',
            type: 'Full-time',
            remote: true,
            match: 85,
            skills: ['AWS', 'Kubernetes', 'Terraform'],
            posted: '5 days ago',
        },
        {
            title: 'Full Stack Developer',
            company: 'StartupXYZ',
            location: 'Austin, TX',
            salary: '$130K - $170K',
            type: 'Full-time',
            remote: true,
            match: 90,
            skills: ['Node.js', 'React', 'PostgreSQL'],
            posted: '1 day ago',
        },
        {
            title: 'Mobile App Developer',
            company: 'AppWorks',
            location: 'Los Angeles, CA',
            salary: '$125K - $165K',
            type: 'Full-time',
            remote: true,
            match: 87,
            skills: ['React Native', 'iOS', 'Android'],
            posted: '4 days ago',
        },
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
                            <Briefcase className="inline-block mr-3 text-brand-accent" size={40} />
                            Match
                        </h1>
                        <p className="text-brand-dark/60 mt-2">Find opportunities that match your skills</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {[
                        { value: '2,500+', label: 'Active Jobs' },
                        { value: '500+', label: 'Partner Companies' },
                        { value: '95%', label: 'Match Rate' },
                        { value: '48hrs', label: 'Avg. Response' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="p-4 bg-white rounded-xl text-center border border-brand-dark/5"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="text-2xl font-bold text-brand-accent">{stat.value}</div>
                            <div className="text-sm text-brand-dark/50">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Jobs List */}
                <div className="space-y-4">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={job.title + job.company}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-brand-dark/5"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ x: 4 }}
                            onClick={onOpenAuth}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="font-bold text-lg text-brand-dark">{job.title}</h3>
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${job.match >= 90 ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                            }`}>
                                            {job.match}% Match
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-brand-dark/60 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Building2 size={14} />
                                            {job.company}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            {job.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <DollarSign size={14} />
                                            {job.salary}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} />
                                            {job.posted}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {job.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-brand-dark/5 rounded-full text-xs font-medium text-brand-dark/70"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {job.remote && (
                                            <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full text-xs font-medium">
                                                Remote
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button className="p-2 hover:bg-brand-dark/5 rounded-full transition-colors">
                                        <Heart size={20} className="text-brand-dark/40" />
                                    </button>
                                    <button className="px-6 py-2.5 bg-brand-dark text-brand-cream rounded-xl text-sm font-semibold hover:bg-brand-dark/90 transition-colors">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default MatchPage;
