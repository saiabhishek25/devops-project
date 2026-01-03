import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    const links = {
        Product: ['Learn', 'Certify', 'Match', 'Community'],
        Company: ['About', 'Careers', 'Press', 'Blog'],
        Resources: ['Help Center', 'Partners', 'Developers', 'Status'],
        Legal: ['Privacy', 'Terms', 'Cookies', 'Licenses'],
    };

    const socials = [
        { icon: Twitter, href: '#' },
        { icon: Linkedin, href: '#' },
        { icon: Github, href: '#' },
        { icon: Mail, href: '#' },
    ];

    return (
        <footer className="bg-brand-dark text-brand-cream py-16 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-2xl font-bold mb-4">The Hiring</h3>
                        <p className="text-brand-cream/50 text-sm mb-6">
                            The complete career ecosystem for the modern professional.
                        </p>
                        <div className="flex gap-4">
                            {socials.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-brand-cream/10 flex items-center justify-center hover:bg-brand-accent transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(links).map(([category, items]) => (
                        <div key={category}>
                            <h4 className="font-semibold mb-4 text-brand-cream/80">{category}</h4>
                            <ul className="space-y-2">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="text-sm text-brand-cream/50 hover:text-brand-accent transition-colors"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-brand-cream/40 text-sm">
                        © 2026 The Hiring. All rights reserved.
                    </p>
                    <p className="text-brand-cream/40 text-sm">
                        Made with ❤️ for career excellence
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
