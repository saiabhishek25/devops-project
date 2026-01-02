import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ContentBlock from './components/ContentBlock';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import LearnPage from './components/LearnPage';
import CertifyPage from './components/CertifyPage';
import MatchPage from './components/MatchPage';
import CommunityPage from './components/CommunityPage';
import Dashboard from './components/Dashboard';

type ViewState = 'landing' | 'learn' | 'certify' | 'match' | 'community' | 'dashboard';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('Alex'); // Default for demo

  useEffect(() => {
    // 2200ms matches the 2000ms loader duration + slight buffer for exit animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenAuth = () => {
    setIsAuthOpen(true);
  };

  const handleCloseAuth = () => {
    setIsAuthOpen(false);
  };

  const handleLogin = (name: string) => {
    setUserName(name);
    setIsLoggedIn(true);
    setCurrentView('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('Alex'); // Reset to default or clear
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (view: ViewState) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen w-full bg-brand-cream text-brand-dark relative font-sans selection:bg-brand-dark selection:text-brand-accent">
      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={handleCloseAuth} 
        onLogin={handleLogin}
      />

      <AnimatedBackground />
      
      {/* Content is rendered immediately but revealed as Loader lifts */}
      <div className="relative z-10">
        <Navbar 
          onOpenAuth={handleOpenAuth} 
          currentView={currentView}
          onNavigate={navigateTo}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          userName={userName}
        />
        
        <main>
          <AnimatePresence mode="wait">
            {currentView === 'landing' && (
              <React.Fragment key="landing">
                <Hero onOpenAuth={handleOpenAuth} />
                <ContentBlock />
                <Features onNavigate={navigateTo} />
                
                {/* CTA Section */}
                <section className="py-24 md:py-40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-accent/5" />
                  <div className="container mx-auto px-6 text-center relative z-10">
                      <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 text-brand-dark tracking-tighter">Ready to <span className="text-brand-accent">evolve?</span></h2>
                      <p className="text-base md:text-xl font-medium text-brand-dark/60 mb-8 md:mb-12 max-w-2xl mx-auto">Join the ecosystem that is redefining the global standard for career development.</p>
                      <button 
                        onClick={handleOpenAuth}
                        className="px-10 md:px-12 py-4 md:py-5 bg-brand-dark text-brand-cream rounded-full font-bold text-sm uppercase tracking-widest hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                      >
                        Join "The Hiring"
                      </button>
                  </div>
                </section>
              </React.Fragment>
            )}
            
            {currentView === 'dashboard' && (
               <motion.div
                 key="dashboard"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
               >
                 <Dashboard onNavigate={navigateTo} userName={userName} />
               </motion.div>
            )}

            {currentView === 'learn' && (
              <LearnPage 
                key="learn" 
                onBack={() => navigateTo(isLoggedIn ? 'dashboard' : 'landing')} 
                onOpenAuth={handleOpenAuth}
              />
            )}

            {currentView === 'certify' && (
               <CertifyPage
                key="certify"
                onBack={() => navigateTo(isLoggedIn ? 'dashboard' : 'landing')}
                onOpenAuth={handleOpenAuth}
               />
            )}

            {currentView === 'match' && (
               <MatchPage
                key="match"
                onBack={() => navigateTo(isLoggedIn ? 'dashboard' : 'landing')}
                onOpenAuth={handleOpenAuth}
               />
            )}

            {currentView === 'community' && (
               <CommunityPage
                key="community"
                onBack={() => navigateTo(isLoggedIn ? 'dashboard' : 'landing')}
                onOpenAuth={handleOpenAuth}
               />
            )}
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;