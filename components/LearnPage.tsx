import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, Star, Play, Users } from 'lucide-react';

interface LearnPageProps {
    onBack: () => void;
    onOpenAuth: () => void;
}

const LearnPage: React.FC<LearnPageProps> = ({ onBack, onOpenAuth }) => {
    const courses = [
        {
            title: 'Full-Stack Web Development',
            instructor: 'Sarah Johnson',
            duration: '40 hours',
            rating: 4.9,
            students: '12.5K',
            category: 'Development',
            level: 'Intermediate',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
        },
        {
            title: 'Data Science Fundamentals',
            instructor: 'Dr. Michael Chen',
            duration: '35 hours',
            rating: 4.8,
            students: '9.2K',
            category: 'Data Science',
            level: 'Beginner',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        },
        {
            title: 'UI/UX Design Masterclass',
            instructor: 'Emma Williams',
            duration: '28 hours',
            rating: 4.9,
            students: '8.7K',
            category: 'Design',
            level: 'All Levels',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
        },
        {
            title: 'Cloud Architecture with AWS',
            instructor: 'James Miller',
            duration: '45 hours',
            rating: 4.7,
            students: '6.3K',
            category: 'Cloud',
            level: 'Advanced',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
        },
        {
            title: 'Machine Learning Engineering',
            instructor: 'Dr. Lisa Park',
            duration: '50 hours',
            rating: 4.9,
            students: '7.8K',
            category: 'AI/ML',
            level: 'Advanced',
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
        },
        {
            title: 'Product Management Essentials',
            instructor: 'Alex Turner',
            duration: '25 hours',
            rating: 4.8,
            students: '5.4K',
            category: 'Business',
            level: 'Intermediate',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        },
    ];

    const categories = ['All', 'Development', 'Data Science', 'Design', 'Cloud', 'AI/ML', 'Business'];

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
                            <BookOpen className="inline-block mr-3 text-brand-accent" size={40} />
                            Learn
                        </h1>
                        <p className="text-brand-dark/60 mt-2">Master new skills with world-class courses</p>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {categories.map((category, index) => (
                        <button
                            key={category}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${index === 0
                                    ? 'bg-brand-dark text-brand-cream'
                                    : 'bg-brand-dark/5 text-brand-dark hover:bg-brand-dark/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Courses Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.title}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-brand-dark/5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                            onClick={onOpenAuth}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                                    <span className="px-3 py-1 bg-brand-accent text-white text-xs font-medium rounded-full">
                                        {course.category}
                                    </span>
                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                                        <Play size={16} className="text-white ml-0.5" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <div className="flex items-center gap-2 text-xs text-brand-dark/50 mb-2">
                                    <span className="px-2 py-0.5 bg-brand-dark/5 rounded">{course.level}</span>
                                </div>
                                <h3 className="font-bold text-lg text-brand-dark mb-2 line-clamp-2">
                                    {course.title}
                                </h3>
                                <p className="text-sm text-brand-dark/60 mb-4">{course.instructor}</p>

                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-4 text-brand-dark/50">
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} />
                                            {course.duration}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users size={14} />
                                            {course.students}
                                        </span>
                                    </div>
                                    <span className="flex items-center gap-1 text-amber-500 font-medium">
                                        <Star size={14} fill="currentColor" />
                                        {course.rating}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default LearnPage;
