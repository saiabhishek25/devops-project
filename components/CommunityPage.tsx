import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, MessageCircle, Calendar, TrendingUp, Award, Heart } from 'lucide-react';

interface CommunityPageProps {
    onBack: () => void;
    onOpenAuth: () => void;
}

const CommunityPage: React.FC<CommunityPageProps> = ({ onBack, onOpenAuth }) => {
    const discussions = [
        {
            title: 'Best practices for system design interviews',
            author: 'Alex Chen',
            replies: 47,
            likes: 156,
            category: 'Interviews',
            avatar: '👨‍💻',
        },
        {
            title: 'How I transitioned from marketing to data science',
            author: 'Sarah Miller',
            replies: 89,
            likes: 324,
            category: 'Career Change',
            avatar: '👩‍🔬',
        },
        {
            title: 'Remote work tips for new developers',
            author: 'James Wilson',
            replies: 63,
            likes: 218,
            category: 'Remote Work',
            avatar: '👨‍🎓',
        },
        {
            title: 'Building a portfolio that gets noticed',
            author: 'Emma Davis',
            replies: 112,
            likes: 467,
            category: 'Portfolio',
            avatar: '👩‍🎨',
        },
    ];

    const events = [
        {
            title: 'Tech Interview Bootcamp',
            date: 'Jan 15, 2026',
            time: '10:00 AM PST',
            attendees: 234,
            type: 'Workshop',
        },
        {
            title: 'Resume Review Session',
            date: 'Jan 18, 2026',
            time: '2:00 PM PST',
            attendees: 156,
            type: 'Live Session',
        },
        {
            title: 'Networking Mixer: Bay Area',
            date: 'Jan 22, 2026',
            time: '6:00 PM PST',
            attendees: 89,
            type: 'In-Person',
        },
    ];

    const mentors = [
        { name: 'Dr. Lisa Park', role: 'AI Research Lead @ Google', rating: 4.9, avatar: '👩‍🔬' },
        { name: 'Michael Chen', role: 'Staff Engineer @ Meta', rating: 4.8, avatar: '👨‍💻' },
        { name: 'Sarah Johnson', role: 'VP of Product @ Stripe', rating: 4.9, avatar: '👩‍💼' },
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
                            <Users className="inline-block mr-3 text-brand-accent" size={40} />
                            Community
                        </h1>
                        <p className="text-brand-dark/60 mt-2">Connect, learn, and grow together</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Discussions */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-brand-dark">Trending Discussions</h2>
                                <button className="text-sm text-brand-accent font-medium hover:underline">
                                    View All
                                </button>
                            </div>
                            <div className="space-y-4">
                                {discussions.map((discussion, index) => (
                                    <motion.div
                                        key={discussion.title}
                                        className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer border border-brand-dark/5"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={onOpenAuth}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="text-3xl">{discussion.avatar}</div>
                                            <div className="flex-1">
                                                <span className="text-xs font-medium text-brand-accent bg-brand-accent/10 px-2 py-1 rounded-full">
                                                    {discussion.category}
                                                </span>
                                                <h3 className="font-semibold text-brand-dark mt-2 mb-1">{discussion.title}</h3>
                                                <p className="text-sm text-brand-dark/50">by {discussion.author}</p>
                                                <div className="flex items-center gap-4 mt-3 text-sm text-brand-dark/50">
                                                    <span className="flex items-center gap-1">
                                                        <MessageCircle size={14} />
                                                        {discussion.replies} replies
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Heart size={14} />
                                                        {discussion.likes} likes
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Events */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-brand-dark">Upcoming Events</h2>
                                <button className="text-sm text-brand-accent font-medium hover:underline">
                                    View All
                                </button>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4">
                                {events.map((event, index) => (
                                    <motion.div
                                        key={event.title}
                                        className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer border border-brand-dark/5"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={onOpenAuth}
                                    >
                                        <span className="text-xs font-medium text-brand-accent bg-brand-accent/10 px-2 py-1 rounded-full">
                                            {event.type}
                                        </span>
                                        <h3 className="font-semibold text-brand-dark mt-3 mb-2">{event.title}</h3>
                                        <div className="space-y-1 text-sm text-brand-dark/50">
                                            <p className="flex items-center gap-2">
                                                <Calendar size={14} />
                                                {event.date}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <Users size={14} />
                                                {event.attendees} attending
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Stats */}
                        <div className="bg-brand-dark text-brand-cream rounded-2xl p-6">
                            <h3 className="font-bold text-lg mb-4">Community Stats</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: Users, value: '50K+', label: 'Members' },
                                    { icon: MessageCircle, value: '12K+', label: 'Discussions' },
                                    { icon: TrendingUp, value: '95%', label: 'Success Rate' },
                                ].map((stat) => (
                                    <div key={stat.label} className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-brand-cream/10 rounded-lg flex items-center justify-center">
                                            <stat.icon size={18} className="text-brand-accent" />
                                        </div>
                                        <div>
                                            <div className="font-bold">{stat.value}</div>
                                            <div className="text-sm text-brand-cream/60">{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Top Mentors */}
                        <div className="bg-white rounded-2xl p-6 border border-brand-dark/5">
                            <h3 className="font-bold text-lg text-brand-dark mb-4">Top Mentors</h3>
                            <div className="space-y-4">
                                {mentors.map((mentor) => (
                                    <div
                                        key={mentor.name}
                                        className="flex items-center gap-3 cursor-pointer hover:bg-brand-dark/5 p-2 rounded-xl transition-colors"
                                        onClick={onOpenAuth}
                                    >
                                        <div className="text-2xl">{mentor.avatar}</div>
                                        <div className="flex-1">
                                            <h4 className="font-medium text-brand-dark text-sm">{mentor.name}</h4>
                                            <p className="text-xs text-brand-dark/50">{mentor.role}</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm text-amber-500">
                                            <Award size={12} />
                                            {mentor.rating}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CommunityPage;
