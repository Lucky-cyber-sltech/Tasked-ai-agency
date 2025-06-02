import React from 'react';
import { ChevronRight, Bot, Shield, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black to-black animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/30 via-transparent to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3 animate-fadeIn">
            <Bot className="h-8 w-8 text-red-500 animate-float" />
            <span className="text-2xl font-bold">
              Taskade<span className="text-red-500">AI</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="nav-link text-gray-300 hover:text-white">Features</a>
            <a href="#testimonials" className="nav-link text-gray-300 hover:text-white">Testimonials</a>
            <a href="#faq" className="nav-link text-gray-300 hover:text-white">FAQ</a>
            <button 
              onClick={() => document.getElementById('accessForm')?.classList.remove('hidden')}
              className="cta-button px-6 py-2 rounded-full text-white font-medium"
            >
              Get Started
              <ArrowRight className="inline-block ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 animate-fadeIn">
            Train Your AI Team to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Get More Done
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fadeIn delay-100">
            Stop juggling 15 different tools. Taskade AI gives you intelligent agents that plan, write, organize, and execute tasks alongside your team in real-time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fadeIn delay-200">
            <button 
              onClick={() => document.getElementById('accessForm')?.classList.remove('hidden')}
              className="cta-button px-8 py-4 rounded-full text-lg font-medium flex items-center"
            >
              <span>CLAIM YOUR AI TEAM NOW</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            
            <div className="flex items-center text-gray-400">
              <Shield className="h-5 w-5 mr-2" />
              <span>LIMITED TIME: FREE for first 1000 users</span>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 text-center animate-fadeIn delay-300">
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-6">Trusted by innovative teams at</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {['Microsoft', 'Dropbox', 'Uber', 'Adobe', 'Shopify'].map((company) => (
              <span key={company} className="text-xl font-semibold text-gray-300 hover:text-white transition-colors">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;