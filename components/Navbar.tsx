import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, User, LogOut } from 'lucide-react';

type ViewState = 'landing' | 'learn' | 'certify' | 'match' | 'community' | 'dashboard';

interface NavbarProps {
    onOpenAuth: () => void;
    currentView: ViewState;
    onNavigate: (view: ViewState) => void;
    isLoggedIn: boolean;
    onLogout: () => void;
    userName: string;
}

const Navbar: React.FC<NavbarProps> = ({
    onOpenAuth,
    currentView,
    onNavigate,
    isLoggedIn,
    onLogout,
    userName
}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Learn', view: 'learn' as ViewState },
        { label: 'Certify', view: 'certify' as ViewState },
        { label: 'Match', view: 'match' as ViewState },
        { label: 'Community', view: 'community' as ViewState },
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-brand-cream/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.button
                        onClick={() => onNavigate(isLoggedIn ? 'dashboard' : 'landing')}
                        className="text-xl md:text-2xl font-bold tracking-tight text-brand-dark"
                        whileHover={{ scale: 1.02 }}
                    >
                        The Hiring
                    </motion.button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.view}
                                onClick={() => onNavigate(item.view)}
                                className={`text-sm font-medium transition-colors ${currentView === item.view
                                        ? 'text-brand-accent'
                                        : 'text-brand-dark/70 hover:text-brand-dark'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Auth Button */}
                    <div className="hidden md:flex items-center gap-4">
                        {isLoggedIn ? (
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => onNavigate('dashboard')}
                                    className="flex items-center gap-2 text-sm font-medium text-brand-dark/70 hover:text-brand-dark"
                                >
                                    <User size={18} />
                                    {userName}
                                </button>
                                <button
                                    onClick={onLogout}
                                    className="p-2 text-brand-dark/60 hover:text-brand-dark transition-colors"
                                >
                                    <LogOut size={18} />
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={onOpenAuth}
                                className="px-6 py-2.5 bg-brand-dark text-brand-cream rounded-full text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Get Started
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 pb-4 border-t border-brand-dark/10"
                    >
                        <div className="flex flex-col gap-3 pt-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.view}
                                    onClick={() => {
                                        onNavigate(item.view);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`text-left py-2 text-sm font-medium ${currentView === item.view ? 'text-brand-accent' : 'text-brand-dark/70'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                            {isLoggedIn ? (
                                <button
                                    onClick={() => {
                                        onLogout();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="mt-2 py-2 text-left text-sm font-medium text-brand-dark/70"
                                >
                                    Logout
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        onOpenAuth();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="mt-2 px-6 py-2.5 bg-brand-dark text-brand-cream rounded-full text-sm font-medium text-center"
                                >
                                    Get Started
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
