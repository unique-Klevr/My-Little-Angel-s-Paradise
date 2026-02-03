import { useEffect, useRef, useState } from 'react';
import './index.css';

// SVG Icons as components
const HeartIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const ShieldIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const StarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const BookIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const ClockIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PhoneIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CheckCircleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UsersIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const SparklesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const SunIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const PaletteIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const CakeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
  </svg>
);

const AcademicCapIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const MenuIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Angel Wing Logo Component
const AngelWingLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
      <linearGradient id="haloGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fcd34d" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
    </defs>
    {/* Halo */}
    <ellipse cx="32" cy="12" rx="12" ry="4" stroke="url(#haloGradient)" strokeWidth="2.5" fill="none" />
    {/* Left Wing */}
    <path d="M6 32C6 32 10 20 20 18C30 16 28 30 28 30C28 30 24 22 16 24C8 26 6 32 6 32Z" fill="url(#wingGradient)" opacity="0.9" />
    <path d="M8 38C8 38 12 28 20 26C28 24 26 36 26 36C26 36 22 30 16 32C10 34 8 38 8 38Z" fill="url(#wingGradient)" opacity="0.7" />
    <path d="M12 44C12 44 16 36 22 35C28 34 26 42 26 42C26 42 22 38 18 40C14 42 12 44 12 44Z" fill="url(#wingGradient)" opacity="0.5" />
    {/* Right Wing */}
    <path d="M58 32C58 32 54 20 44 18C34 16 36 30 36 30C36 30 40 22 48 24C56 26 58 32 58 32Z" fill="url(#wingGradient)" opacity="0.9" />
    <path d="M56 38C56 38 52 28 44 26C36 24 38 36 38 36C38 36 42 30 48 32C54 34 56 38 56 38Z" fill="url(#wingGradient)" opacity="0.7" />
    <path d="M52 44C52 44 48 36 42 35C36 34 38 42 38 42C38 42 42 38 46 40C50 42 52 44 52 44Z" fill="url(#wingGradient)" opacity="0.5" />
    {/* Center Body (Child silhouette) */}
    <circle cx="32" cy="28" r="8" fill="url(#wingGradient)" />
    <path d="M24 40C24 40 26 52 32 52C38 52 40 40 40 40C40 40 38 46 32 46C26 46 24 40 24 40Z" fill="url(#wingGradient)" />
  </svg>
);

// Custom hook for scroll animation
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Daily Life', href: '#daily-life' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <AngelWingLogo className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" />
            <div className="hidden sm:block">
              <span className="font-serif text-lg font-semibold text-purple-800">My Little Angel's Paradise</span>
              <span className="block text-xs text-purple-600/80 tracking-wide">Daycare & Preschool</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-500 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#enroll"
              className="btn-shine bg-gradient-to-r from-purple-600 to-violet-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-glow transition-all duration-300"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-purple-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XIcon className="w-6 h-6 text-purple-700" /> : <MenuIcon className="w-6 h-6 text-purple-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-purple-100 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-700 hover:text-purple-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#enroll"
                className="block bg-gradient-to-r from-purple-600 to-violet-500 text-white px-6 py-3 rounded-full font-semibold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enroll Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="cloud-bg w-96 h-48 top-20 -left-20 animate-float" />
        <div className="cloud-bg w-80 h-40 top-40 right-10 animate-float animate-delay-200" />
        <div className="cloud-bg w-64 h-32 bottom-40 left-1/4 animate-float animate-delay-400" />

        {/* Subtle sparkles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50 animate-pulse animate-delay-200" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-sky-300 rounded-full opacity-60 animate-pulse animate-delay-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft mb-6 animate-fade-in">
              <SparklesIcon className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-purple-700">16 Years of Nurturing Excellence</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in animate-delay-100">
              Where Every Child Is{' '}
              <span className="text-gradient">A Little Angel</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed animate-fade-in animate-delay-200">
              A loving, faith-inspired sanctuary where your child's brightest future begins.
              Where every day is an adventure in learning, growing, and discovering.
            </p>

            <p className="text-base italic text-purple-700/80 mb-8 animate-fade-in animate-delay-300">
              "Train up a child in the way he should go and when he is old, he will not depart from it." — Proverbs 22:6
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animate-delay-400">
              <a
                href="#enroll"
                className="btn-shine bg-gradient-to-r from-purple-600 to-violet-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-soft hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
              >
                Enroll Your Child Today
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="bg-white text-purple-700 border-2 border-purple-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-purple-400 hover:shadow-soft transition-all duration-300"
              >
                Schedule a Tour
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 animate-fade-in animate-delay-500">
              <div className="flex items-center gap-2 text-gray-600">
                <ShieldIcon className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">CDA Certified</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <HeartIcon className="w-5 h-5 text-red-400" />
                <span className="text-sm font-medium">CPR & First Aid</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <BookIcon className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium">Frog Street Curriculum</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative z-10 animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-sky-400 rounded-3xl transform rotate-3 opacity-20" />
              <img
                src="https://www.procaresoftware.com/wp-content/uploads/2024/06/circle-time-at-preschool.webp"
                alt="Happy children learning together"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-sky-500 rounded-full flex items-center justify-center">
                    <HeartIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ages 3 weeks – 12 years</p>
                    <p className="text-sm text-gray-500">All stages of early childhood</p>
                  </div>
                </div>
              </div>

              {/* Hours Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-soft p-3 animate-float animate-delay-200">
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-purple-500" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Mon-Sat</p>
                    <p className="text-xs text-gray-500">6:30 AM – 5:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <ShieldIcon className="w-8 h-8" />,
      title: "Safety First",
      description: "CPR & First Aid certified staff with comprehensive safety protocols. Your child's wellbeing is our highest priority.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <StarIcon className="w-8 h-8" />,
      title: "16 Years of Excellence",
      description: "Nearly two decades of trusted childcare experience serving the Opelousas community with dedication and love.",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: <BookIcon className="w-8 h-8" />,
      title: "Curriculum-Based Learning",
      description: "Frog Street Curriculum provides research-based, developmentally appropriate education that prepares children for success.",
      color: "from-purple-400 to-violet-500"
    },
    {
      icon: <CakeIcon className="w-8 h-8" />,
      title: "Nutritious Meals Included",
      description: "Breakfast, lunch, and snacks provided daily. Wholesome, balanced nutrition to fuel growing minds and bodies.",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "Faith-Guided Values",
      description: "Nurturing character development through timeless values of kindness, respect, and compassion.",
      color: "from-sky-400 to-blue-500"
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Community Partnership",
      description: "Strong parental involvement fostering meaningful connections between home and school.",
      color: "from-violet-400 to-purple-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-section">
          <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HeartIcon className="w-4 h-4" />
            Why Families Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A Foundation Built on <span className="text-gradient">Trust & Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            For over 16 years, we've been more than just a daycare—we're an extension of your family.
            Here's why parents trust us with their most precious gifts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`fade-section group bg-white rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 border border-gray-100 hover:border-purple-200`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 via-white to-sky-50 rounded-3xl p-8 md:p-12 fade-section">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full shadow-soft flex items-center justify-center mx-auto mb-3">
                <AcademicCapIcon className="w-10 h-10 text-purple-600" />
              </div>
              <p className="font-semibold text-gray-900">CDA Certified</p>
              <p className="text-sm text-gray-500">Child Development Associate</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full shadow-soft flex items-center justify-center mx-auto mb-3">
                <ShieldIcon className="w-10 h-10 text-green-600" />
              </div>
              <p className="font-semibold text-gray-900">Ancillary Certified</p>
              <p className="text-sm text-gray-500">State Approved</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full shadow-soft flex items-center justify-center mx-auto mb-3">
                <HeartIcon className="w-10 h-10 text-red-500" />
              </div>
              <p className="font-semibold text-gray-900">CPR & First Aid</p>
              <p className="text-sm text-gray-500">Certified Staff</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full shadow-soft flex items-center justify-center mx-auto mb-3">
                <BookIcon className="w-10 h-10 text-sky-600" />
              </div>
              <p className="font-semibold text-gray-900">Frog Street</p>
              <p className="text-sm text-gray-500">Research-Based Curriculum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Programs Section
const ProgramsSection = () => {
  const programs = [
    {
      title: "Infant Care",
      ages: "3 weeks – 12 months",
      description: "Gentle, nurturing care in a safe, stimulating environment. Individualized attention, sensory activities, and loving bonds that give infants the best start.",
      features: ["Individualized schedules", "Sensory development", "Safe sleep practices", "Daily parent updates"],
      image: "https://littlescholarsnyc.com/wp-content/uploads/2024/01/IMG_5400.jpg",
      color: "from-pink-400 to-rose-500"
    },
    {
      title: "Toddler Program",
      ages: "1 – 2 years",
      description: "Active exploration and discovery in a secure setting. Building independence, language skills, and social foundations through purposeful play.",
      features: ["Language development", "Motor skill activities", "Social interaction", "Creative exploration"],
      image: "https://www.parentmap.com/sites/default/files/styles/1180x660_scaled_cropped/public/2024-08/toyr%20to%20prepare%20for%20preschool%20teacher%20with%20students%20in%20a%20preschool%20classroom_istock.jpg?itok=WSriHIUY",
      color: "from-orange-400 to-amber-500"
    },
    {
      title: "Preschool",
      ages: "3 – 4 years",
      description: "Kindergarten readiness through our Frog Street Curriculum. Building literacy, math foundations, and the confidence to succeed in school and life.",
      features: ["Kindergarten prep", "Early literacy", "Math foundations", "Science exploration"],
      image: "https://raisingchildren.net.au/__data/assets/image/0027/48069/encouraging-creativity-preschoolersnarrow.jpg",
      color: "from-purple-400 to-violet-500"
    },
    {
      title: "After School",
      ages: "5 – 12 years",
      description: "Safe, enriching after-school care with homework help, creative activities, and supervised play. A home away from home for school-age children.",
      features: ["Homework assistance", "Enrichment activities", "Safe supervision", "Healthy snacks"],
      image: "https://littlemiracles.com.au/wp-content/uploads/2024/10/Kids-Doing-Art-In-School.webp",
      color: "from-sky-400 to-blue-500"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-section">
          <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <AcademicCapIcon className="w-4 h-4" />
            Age-Appropriate Programs
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Programs Designed for <span className="text-gradient">Every Stage</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From their very first weeks to their school-age years, we provide nurturing,
            developmentally appropriate programs that meet children exactly where they are.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="fade-section group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 border border-gray-100"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${program.color} text-white px-4 py-1.5 rounded-full text-sm font-medium`}>
                  {program.ages}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {program.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Philosophy Section
const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-section">
            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HeartIcon className="w-4 h-4" />
              Our Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nurturing the <span className="text-gradient">Whole Child</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At My Little Angel's Paradise, we believe every child is a unique blessing with infinite potential.
              Our faith-inspired approach creates a loving environment where children feel safe, valued, and empowered to explore.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We nurture not just academic readiness, but the whole child—their emotional wellbeing,
              social skills, physical development, and spiritual foundation. Through our partnership with families,
              we create a seamless support system that helps each child flourish.
            </p>

            <div className="space-y-4">
              {[
                { icon: <HeartIcon className="w-5 h-5" />, text: "Faith-inspired values in a welcoming environment" },
                { icon: <SparklesIcon className="w-5 h-5" />, text: "Whole-child development approach" },
                { icon: <UsersIcon className="w-5 h-5" />, text: "Strong parent-teacher partnership" },
                { icon: <BookIcon className="w-5 h-5" />, text: "Research-based Frog Street Curriculum" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 text-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-sky-100 rounded-full flex items-center justify-center text-purple-600">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <blockquote className="mt-10 p-6 bg-gradient-to-r from-purple-50 to-sky-50 rounded-2xl border-l-4 border-purple-500">
              <p className="text-lg italic text-gray-700 mb-2">
                "Train up a child in the way he should go and when he is old, he will not depart from it."
              </p>
              <cite className="text-purple-700 font-medium">— Proverbs 22:6</cite>
            </blockquote>
          </div>

          <div className="fade-section relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-sky-400 rounded-3xl transform -rotate-3 opacity-20" />
              <img
                src="https://www.harmonylearning.com/wp-content/uploads/2020/09/Happy-Preschool-Drop-off.jpg"
                alt="Nurturing environment"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            {/* Values Cards */}
            <div className="absolute -bottom-8 left-4 right-4 bg-white rounded-2xl shadow-soft p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <HeartIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="font-semibold text-gray-900">Love</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <SparklesIcon className="w-6 h-6 text-sky-600" />
                  </div>
                  <p className="font-semibold text-gray-900">Growth</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <ShieldIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="font-semibold text-gray-900">Safety</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Daily Life Section
const DailyLifeSection = () => {
  const activities = [
    {
      icon: <SunIcon className="w-8 h-8" />,
      title: "Morning Welcome",
      time: "6:30 AM",
      description: "Warm greetings, free play, and gentle transitions to start the day with joy.",
      color: "from-amber-400 to-orange-400"
    },
    {
      icon: <BookIcon className="w-8 h-8" />,
      title: "Learning Time",
      time: "9:00 AM",
      description: "Engaging curriculum activities, circle time, and hands-on learning experiences.",
      color: "from-purple-400 to-violet-500"
    },
    {
      icon: <CakeIcon className="w-8 h-8" />,
      title: "Nutritious Meals",
      time: "Throughout Day",
      description: "Wholesome breakfast, lunch, and snacks prepared fresh daily for growing bodies.",
      color: "from-pink-400 to-rose-400"
    },
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: "Creative Play",
      time: "10:30 AM",
      description: "Art, music, and imaginative play that sparks creativity and self-expression.",
      color: "from-sky-400 to-blue-500"
    },
    {
      icon: <MoonIcon className="w-8 h-8" />,
      title: "Rest Time",
      time: "12:30 PM",
      description: "Peaceful nap time in a calm, comfortable environment for growing minds.",
      color: "from-indigo-400 to-purple-500"
    },
    {
      icon: <PaletteIcon className="w-8 h-8" />,
      title: "Afternoon Discovery",
      time: "3:00 PM",
      description: "Outdoor play, exploration, and enrichment activities to end the day.",
      color: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <section id="daily-life" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-section">
          <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <SunIcon className="w-4 h-4" />
            A Day at Our Center
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Where Every Day Is <span className="text-gradient">An Adventure</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our thoughtfully planned daily schedule balances structured learning with free play,
            ensuring each child experiences joy, discovery, and growth every single day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="fade-section group bg-white rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 border border-gray-100 hover:border-purple-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 bg-gradient-to-r ${activity.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {activity.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-purple-600 mb-1">{activity.time}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 fade-section">
          <img
            src="https://www.procaresoftware.com/wp-content/uploads/2024/06/circle-time-at-preschool.webp"
            alt="Circle time"
            className="rounded-2xl h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://raisingchildren.net.au/__data/assets/image/0027/48069/encouraging-creativity-preschoolersnarrow.jpg"
            alt="Creative activities"
            className="rounded-2xl h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/5f83855960657429dda4af3c/8ec6a708-56dd-4ff1-9ff0-c0a6a9e4116b/IMG_6627.JPG"
            alt="Lunch time"
            className="rounded-2xl h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://littlemiracles.com.au/wp-content/uploads/2024/10/Kids-Doing-Art-In-School.webp"
            alt="Art activities"
            className="rounded-2xl h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

// Trust Signals Section
const TrustSignalsSection = () => {
  const stats = [
    { value: "16+", label: "Years of Experience", icon: <StarIcon className="w-6 h-6" /> },
    { value: "1000+", label: "Children Nurtured", icon: <HeartIcon className="w-6 h-6" /> },
    { value: "100%", label: "Certified Staff", icon: <ShieldIcon className="w-6 h-6" /> },
    { value: "6", label: "Days a Week", icon: <ClockIcon className="w-6 h-6" /> }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-section">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by Families Since 2009
          </h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Our commitment to excellence has earned the trust of hundreds of families in the Opelousas community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-section">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                {stat.icon}
              </div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-purple-200 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section id="enroll" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-50 via-white to-sky-50 rounded-3xl p-8 md:p-16 shadow-soft text-center fade-section border border-purple-100">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <HeartIcon className="w-10 h-10 text-white" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Give Your Child the <span className="text-gradient">Gift of a Bright Future</span>
          </h2>

          <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
            Every great journey begins with a single step. Take that step today and discover why
            families have trusted My Little Angel's Paradise for over 16 years.
          </p>

          <p className="text-base italic text-purple-700/80 mb-10">
            A Loving Start for a Bright Future
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:337-678-0456"
              className="btn-shine bg-gradient-to-r from-purple-600 to-violet-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-soft hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-3"
            >
              <PhoneIcon className="w-5 h-5" />
              Call Now: 337-678-0456
            </a>
            <a
              href="#contact"
              className="bg-white text-purple-700 border-2 border-purple-200 px-10 py-4 rounded-full font-semibold text-lg hover:border-purple-400 hover:shadow-soft transition-all duration-300"
            >
              Schedule Your Tour
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-500" />
              <span>No enrollment fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-500" />
              <span>Flexible scheduling</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-500" />
              <span>Tours available daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <AngelWingLogo className="w-14 h-14" />
              <div>
                <h3 className="font-serif text-xl font-semibold text-white">My Little Angel's Paradise</h3>
                <p className="text-sm text-gray-400">Daycare & Preschool</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A loving, faith-inspired childcare center serving the Opelousas community for over 16 years.
              Where every day is an adventure and every child is treasured.
            </p>
            <p className="text-sm italic text-purple-400">
              "Train up a child in the way he should go..." — Proverbs 22:6
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:337-678-0456" className="flex items-center gap-3 hover:text-purple-400 transition-colors">
                <PhoneIcon className="w-5 h-5 text-purple-400" />
                <span>337-678-0456</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>2059 Anna Lee Street<br />Opelousas, LA</span>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon className="w-5 h-5 text-purple-400" />
                <div>
                  <p>Mon – Sat</p>
                  <p className="text-white">6:30 AM – 5:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#about" className="block hover:text-purple-400 transition-colors">Why Choose Us</a>
              <a href="#programs" className="block hover:text-purple-400 transition-colors">Our Programs</a>
              <a href="#philosophy" className="block hover:text-purple-400 transition-colors">Our Philosophy</a>
              <a href="#daily-life" className="block hover:text-purple-400 transition-colors">Daily Life</a>
              <a href="#enroll" className="block hover:text-purple-400 transition-colors">Enroll Now</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} My Little Angel's Paradise Daycare & Preschool. All rights reserved.
            </p>
            <a
              href="#enroll"
              className="bg-gradient-to-r from-purple-600 to-violet-500 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-glow transition-all duration-300"
            >
              Enroll Your Child Today
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyChooseUsSection />
      <ProgramsSection />
      <PhilosophySection />
      <DailyLifeSection />
      <TrustSignalsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
