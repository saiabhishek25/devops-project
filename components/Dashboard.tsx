import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Briefcase, Users, TrendingUp, Clock, Target, Zap } from 'lucide-react';

type ViewState = 'landing' | 'learn' | 'certify' | 'match' | 'community' | 'dashboard';

interface DashboardProps {
    onNavigate: (view: ViewState) => void;
    userName: string;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate, userName }) => {
    const quickActions = [
        { icon: BookOpen, label: 'Continue Learning', view: 'learn' as ViewState, color: 'from-blue-500 to-indigo-600' },
        { icon: Award, label: 'Get Certified', view: 'certify' as ViewState, color: 'from-emerald-500 to-teal-600' },
        { icon: Briefcase, label: 'Find Jobs', view: 'match' as ViewState, color: 'from-orange-500 to-red-600' },
        { icon: Users, label: 'Community', view: 'community' as ViewState, color: 'from-purple-500 to-pink-600' },
    ];

    const stats = [
        { icon: BookOpen, value: '12', label: 'Courses Enrolled', trend: '+3 this month' },
        { icon: Award, value: '4', label: 'Certifications', trend: '+1 this month' },
        { icon: Target, value: '85%', label: 'Skill Match', trend: '+5% this week' },
        { icon: Zap, value: '24', label: 'Active Streak', trend: 'days' },
    ];

    const recentActivity = [
        { action: 'Completed Module 5', course: 'React Fundamentals', time: '2 hours ago', icon: '✅' },
        { action: 'Started new course', course: 'TypeScript Mastery', time: '1 day ago', icon: '📚' },
        { action: 'Earned badge', course: 'Fast Learner', time: '2 days ago', icon: '🏆' },
        { action: 'Joined discussion', course: 'Career Tips Forum', time: '3 days ago', icon: '💬' },
    ];

    const recommendedJobs = [
        { title: 'Senior React Developer', company: 'TechCorp', match: 95 },
        { title: 'Full Stack Engineer', company: 'StartupXYZ', match: 92 },
        { title: 'Frontend Lead', company: 'DesignCo', match: 88 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-24 pb-16 px-6"
        >
            <div className="container mx-auto">
                {/* Welcome Header */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2">
                        Welcome back, <span className="text-brand-accent">{userName}</span>! 👋
                    </h1>
                    <p className="text-brand-dark/60">Here's your career progress overview</p>
                </motion.div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {quickActions.map((action, index) => (
                        <motion.button
                            key={action.label}
                            onClick={() => onNavigate(action.view)}
                            className={`p-6 bg-gradient-to-br ${action.color} rounded-2xl text-white text-left hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <action.icon size={28} className="mb-3" />
                            <span className="font-semibold text-sm">{action.label}</span>
                        </motion.button>
                    ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="bg-white rounded-2xl p-5 border border-brand-dark/5"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                                    <stat.icon size={20} className="text-brand-accent" />
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-brand-dark mb-1">{stat.value}</div>
                            <div className="text-sm text-brand-dark/50">{stat.label}</div>
                            <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                                <TrendingUp size={12} />
                                {stat.trend}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Recent Activity */}
                    <div className="lg:col-span-2">
                        <h2 className="text-xl font-bold text-brand-dark mb-4">Recent Activity</h2>
                        <div className="bg-white rounded-2xl border border-brand-dark/5 overflow-hidden">
                            {recentActivity.map((activity, index) => (
                                <motion.div
                                    key={index}
                                    className="p-4 flex items-center gap-4 border-b border-brand-dark/5 last:border-0 hover:bg-brand-dark/5 transition-colors"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="text-2xl">{activity.icon}</div>
                                    <div className="flex-1">
                                        <p className="font-medium text-brand-dark">{activity.action}</p>
                                        <p className="text-sm text-brand-dark/50">{activity.course}</p>
                                    </div>
                                    <span className="text-xs text-brand-dark/40 flex items-center gap-1">
                                        <Clock size={12} />
                                        {activity.time}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Recommended Jobs */}
                    <div>
                        <h2 className="text-xl font-bold text-brand-dark mb-4">Top Job Matches</h2>
                        <div className="space-y-3">
                            {recommendedJobs.map((job, index) => (
                                <motion.div
                                    key={job.title}
                                    className="bg-white rounded-2xl p-4 border border-brand-dark/5 cursor-pointer hover:shadow-md transition-all"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 4 }}
                                    onClick={() => onNavigate('match')}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-brand-dark">{job.title}</h3>
                                        <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                            {job.match}%
                                        </span>
                                    </div>
                                    <p className="text-sm text-brand-dark/50">{job.company}</p>
                                </motion.div>
                            ))}
                            <button
                                onClick={() => onNavigate('match')}
                                className="w-full py-3 text-center text-brand-accent font-medium hover:underline"
                            >
                                View All Jobs →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Dashboard;
