import React from 'react';
import { ChevronRight, Bot } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      
      {/* Red glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-red-600/20 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-10 md:p-16 rounded-2xl border border-gray-700 shadow-2xl shadow-red-900/10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-6">
              <Bot className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your <span className="text-red-500">AI Team</span>?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Join thousands of teams already saving 5+ hours every week with their AI-powered workflow. Start for free today.
            </p>
            
            <button 
              onClick={() => document.getElementById('accessForm')?.classList.remove('hidden')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105 flex items-center"
            >
              <span>Start Saving Time Now</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            
            <p className="mt-6 text-gray-400">
              Free 14-day trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;