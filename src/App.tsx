/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { 
  MapPin, 
  Calendar, 
  Users, 
  ChevronRight, 
  Instagram, 
  Twitter, 
  Facebook,
  ArrowRight,
  Activity,
  Clock,
  Trophy,
  Sun,
  Moon
} from 'lucide-react';
import { RunEvent, ClubStat } from './types';

const UPCOMING_RUNS: RunEvent[] = [
  {
    id: '1',
    title: 'Interval Training',
    date: 'Tuesday',
    time: '18:00',
    location: 'Complexe Raid Farradj',
    distance: 'Varies',
    difficulty: 'Intermediate'
  },
  {
    id: '2',
    title: 'Long Run Session',
    date: 'Friday',
    time: '07:30',
    location: 'Salamandre',
    distance: '10km+',
    difficulty: 'Advanced'
  },
  {
    id: '3',
    title: 'Strength & Conditioning',
    date: 'Sunday',
    time: '18:00',
    location: 'Complexe Raid Farradj',
    distance: 'N/A',
    difficulty: 'Beginner'
  }
];

const Logo = ({ size = "md", className = "", layoutId }: { size?: "sm" | "md" | "lg", className?: string, layoutId?: string }) => {
  const sizes = {
    sm: "h-12",
    md: "h-32",
    lg: "h-64"
  };
  
  return (
    <motion.div 
      layoutId={layoutId}
      className={`flex items-center justify-center select-none ${className}`}
    >
      <img 
        src="/logo.png" 
        alt="Mosta Run Club Logo" 
        className={`${sizes[size]} w-auto object-contain`}
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
};

export default function App() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [isRising, setIsRising] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [logoRisen, setLogoRisen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language, isRTL]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isDarkMode ? 'dark bg-black text-white' : 'bg-white text-black'}`}>
      <AnimatePresence>
        {/* Splash Screen / Video & Logo Animation */}
        {!showMain && (
          <motion.section 
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 1.02
            }}
            animate={{ 
              backgroundColor: videoEnded ? (isDarkMode ? "#000000" : "#FFFFFF") : "#000000",
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.43, 0.13, 0.23, 0.96] 
            }}
            className="fixed inset-0 z-[100] w-full h-screen overflow-hidden flex items-center justify-center"
          >
            {/* First Video Background - Fades out very slowly */}
            <motion.div
              animate={{ opacity: videoEnded ? 0 : 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="absolute inset-0 z-0"
            >
              <video
                autoPlay
                muted
                playsInline
                onEnded={() => setVideoEnded(true)}
                className="w-full h-full object-cover"
              >
                <source src="/back.mp4" type="video/mp4" />
              </video>
              <motion.div 
                animate={{ opacity: videoEnded ? 0 : 1 }}
                className="absolute inset-0 bg-black/20" 
              />
            </motion.div>

            {/* Second Video Background - Fades in after first video ends */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: videoEnded ? 1 : 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="absolute inset-0 z-0"
            >
              {videoEnded && (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/background.mp4" type="video/mp4" />
                </video>
              )}
              {/* Subtle overlay for legibility without blur */}
              <div className="absolute inset-0 bg-black/10 dark:bg-black/40" />
            </motion.div>

            <div className="relative z-20 w-full h-full flex flex-col items-center justify-center">
              {/* Trigger button appearance after video transitions */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: videoEnded ? 1 : 0 }}
                transition={{ duration: 0.1 }}
                onAnimationComplete={() => {
                  if (videoEnded && !logoRisen) {
                    // Start the button reveal timer when video ends
                    setTimeout(() => setLogoRisen(true), 2500);
                  }
                }}
              />

              {/* Visit Website Trigger */}
              <AnimatePresence>
                {logoRisen && !isRising && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 20 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <button
                      onClick={() => {
                        setIsRising(true);
                        setShowMain(true);
                      }}
                      className="pointer-events-auto cssbuttons-io"
                    >
                      <span className="flex items-center gap-3">
                        {t('hero.visit')}
                        <ArrowRight className={`w-5 h-5 transition-transform duration-500 group-hover:translate-x-2 ${isRTL ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
                      </span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Skip Button */}
            {!videoEnded && (
              <button 
                onClick={() => setVideoEnded(true)}
                className="absolute bottom-10 right-10 z-30 text-black/60 dark:text-white/30 hover:text-brand-blue text-xs font-bold uppercase tracking-widest transition-colors"
              >
                Skip Intro
              </button>
            )}
          </motion.section>
        )}

        {/* Main Content */}
        {showMain && (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.1
            }}
            className="relative min-h-screen"
          >
            {/* Dynamic Background Image */}
            <motion.div 
              initial={{ scale: 1.15 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="fixed inset-0 z-0 pointer-events-none transition-all duration-1000"
              style={{
                backgroundImage: `url(${
                  isMobile 
                    ? (isDarkMode ? '/darkbackphone.png' : '/backphone.png')
                    : (isDarkMode ? '/darkback.png' : '/whiteback.png')
                })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 1,
                filter: 'blur(4px)'
              }}
            />

            <div className="relative z-10">
              {/* Navigation */}
          <nav className="sticky top-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-md border-b border-white/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              <Logo size="sm" layoutId="main-logo" />
            </div>
            
            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-4">
              <select 
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className="bg-transparent text-xs font-bold uppercase tracking-wider text-black dark:text-white outline-none"
              >
                <option value="fr">FR</option>
                <option value="ar">AR</option>
                <option value="en">EN</option>
              </select>
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-black" />}
              </button>
              <button className="bg-brand-blue text-black px-4 py-2 rounded-full font-black text-xs hover:bg-white border-2 border-brand-blue transition-all">
                {t('nav.join')}
              </button>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
              <a href="#about" className={`${isDarkMode ? 'text-gray-300' : 'text-black'} hover:text-brand-blue transition-colors dark:hover:text-brand-blue`}>{t('nav.about')}</a>
              <a href="#schedule" className={`${isDarkMode ? 'text-gray-300' : 'text-black'} hover:text-brand-blue transition-colors dark:hover:text-brand-blue`}>{t('nav.schedule')}</a>
              <a href="#membership" className={`${isDarkMode ? 'text-gray-300' : 'text-black'} hover:text-brand-blue transition-colors dark:hover:text-brand-blue`}>{t('nav.membership')}</a>
              
              <select 
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className="bg-transparent text-xs font-bold uppercase tracking-wider text-black dark:text-white outline-none cursor-pointer hover:text-brand-blue transition-colors"
              >
                <option value="fr" className="dark:bg-black">FR</option>
                <option value="ar" className="dark:bg-black">AR</option>
                <option value="en" className="dark:bg-black">EN</option>
              </select>

              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-black" />}
              </button>

              <button className="cssbuttons-io">
                <span>{t('nav.join')}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                </span>
                {t('hero.badge')}
              </div>
              <h1 className={`text-6xl md:text-7xl font-black ${isDarkMode ? 'text-white' : 'text-black'} leading-tight mb-6`}>
                {t('hero.title')}<span className="text-brand-blue">{t('hero.titleAccent')}</span>
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-black'} mb-10 max-w-lg leading-relaxed`}>
                {t('hero.desc')}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="cssbuttons-io">
                  <span className="flex items-center gap-2">
                    {t('hero.ctaStart')} <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                  </span>
                </button>
                <button className="cssbuttons-io !bg-white/10 !border !border-white/10">
                  <span>{t('hero.ctaSchedule')}</span>
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/running/800/1000" 
                  alt="Runners in Mosta" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-black p-6 rounded-2xl shadow-xl dark:shadow-2xl dark:border dark:border-white/10 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-brand-blue/20 rounded-full flex items-center justify-center">
                    <Trophy className="text-brand-blue w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-black/50 dark:text-gray-400 uppercase">Weekly Goal</div>
                </div>
                <div className="text-2xl font-black text-black dark:text-white">2,500 KM</div>
                <div className="w-full bg-gray-100 dark:bg-white/10 h-2 rounded-full mt-3">
                  <div className="bg-brand-blue h-full rounded-full w-[75%]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Runs */}
      <section id="schedule" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h2 className="text-4xl font-black text-black dark:text-white mb-4">{t('schedule.title')}</h2>
              <p className="text-black dark:text-gray-400 max-w-md">{t('schedule.desc')}</p>
            </div>
            <button className="text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
              {t('schedule.fullCalendar')} <ChevronRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {UPCOMING_RUNS.map((run, idx) => (
              <motion.div 
                key={run.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-transparent hover:border-brand-blue/20 dark:hover:border-brand-blue/40 hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-brand-blue group-hover:text-black transition-colors">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    run.difficulty === 'Beginner' ? `bg-green-100 dark:bg-green-900/30 ${isDarkMode ? 'text-green-400' : 'text-green-900'}` :
                    run.difficulty === 'Intermediate' ? `bg-blue-100 dark:bg-blue-900/30 ${isDarkMode ? 'text-blue-400' : 'text-blue-900'}` :
                    `bg-red-100 dark:bg-red-900/30 ${isDarkMode ? 'text-red-400' : 'text-red-900'}`
                  }`}>
                    {run.difficulty === 'Beginner' ? t('schedule.difficulty.beginner') : 
                     run.difficulty === 'Intermediate' ? t('schedule.difficulty.intermediate') : 
                     t('schedule.difficulty.advanced')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4 group-hover:text-brand-blue transition-colors">
                  {idx === 0 ? t('schedule.runs.interval.title') : 
                   idx === 1 ? t('schedule.runs.long.title') : 
                   t('schedule.runs.strength.title')}
                </h3>
                <div className="space-y-3 text-sm text-black dark:text-gray-400">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-brand-blue" />
                    {idx === 0 ? t('schedule.runs.interval.date') : 
                     idx === 1 ? t('schedule.runs.long.date') : 
                     t('schedule.runs.strength.date')} @ {run.time}
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-brand-blue" />
                    {idx === 0 ? t('schedule.runs.interval.location') : 
                     idx === 1 ? t('schedule.runs.long.location') : 
                     t('schedule.runs.strength.location')}
                  </div>
                  <div className="flex items-center gap-3">
                    <Activity className="w-4 h-4 text-brand-blue" />
                    {run.distance}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership / CTA */}
      <section id="membership" className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 bg-white/40 dark:bg-transparent backdrop-blur-sm py-16 rounded-[3rem] shadow-2xl border border-white/20">
          <h2 className={`text-5xl md:text-6xl font-black ${isDarkMode ? 'text-white' : 'text-black'} mb-8`}>{t('membership.title')}</h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-black'} text-xl mb-12 leading-relaxed`}>
            {t('membership.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder={t('membership.placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-4 rounded-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 text-black dark:text-white placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-brand-blue w-full sm:w-80"
            />
            <button className="cssbuttons-io">
              <span>{t('membership.cta')}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-gray-100 dark:border-white/5 bg-white/30 dark:bg-transparent backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 ${isRTL ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
            <div className={`col-span-1 md:col-span-2 flex flex-col items-center ${isRTL ? 'md:items-end' : 'md:items-start'}`}>
              <div className="flex items-center gap-4 mb-8">
                <Logo size="sm" />
              </div>
              <p className={`${isDarkMode ? 'text-white/70' : 'text-black/90'} max-w-sm mb-8`}>
                {t('footer.desc')}
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/mostarunclub/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-black transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=100054214491761&locale=fr_FR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-black transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-black text-brand-blue mb-6 uppercase text-xs tracking-widest">{t('footer.links')}</h4>
              <ul className={`space-y-4 text-sm ${isDarkMode ? 'text-white/60' : 'text-black/80'}`}>
                <li><a href="#" className="hover:text-brand-blue transition-colors">{t('nav.about')}</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">{t('nav.schedule')}</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">{t('nav.membership')}</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">Club Gear</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-brand-blue mb-6 uppercase text-xs tracking-widest">{t('footer.contact')}</h4>
              <ul className={`space-y-4 text-sm ${isDarkMode ? 'text-white/60' : 'text-black/70'}`}>
                <li><a href="mailto:hello@mostarunclub.com" className="hover:text-brand-blue transition-colors">hello@mostarunclub.com</a></li>
                <li>Mosta, Algeria</li>
                <li><a href="tel:+213559391211" className="hover:text-brand-blue transition-colors font-bold">+213 559 39 12 11</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-100 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-black/70 dark:text-gray-400">{t('footer.rights')}</p>
            <div className="flex gap-8 text-xs text-black/70 dark:text-gray-400">
              <a href="#" className="hover:text-brand-blue">Privacy Policy</a>
              <a href="#" className="hover:text-brand-blue">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
