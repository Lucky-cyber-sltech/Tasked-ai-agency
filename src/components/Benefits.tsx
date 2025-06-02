import React from 'react';
import { Clock, Users, Zap, Lock, BrainCircuit } from 'lucide-react';

const BenefitCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}> = ({ icon, title, description, delay }) => {
  return (
    <div className={`feature-card p-8 rounded-2xl animate-fadeIn ${delay}`}>
      <div className="text-red-500 mb-6 animate-float">
        <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeIn">
            Why Teams Choose <span className="text-red-500">Taskade AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeIn delay-100">
            Transform how you work with AI agents that understand your context and execute tasks intelligently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard
            icon={<Clock className="h-8 w-8" />}
            title="Save 5+ Hours Weekly"
            description="Let AI agents handle routine tasks like report generation, meeting scheduling, and content creation while you focus on strategic work."
            delay="delay-100"
          />
          
          <BenefitCard
            icon={<Users className="h-8 w-8" />}
            title="Real-Time Collaboration"
            description="Work alongside AI agents in shared documents and projects. They understand context, maintain consistency, and adapt to your team's workflow."
            delay="delay-200"
          />
          
          <BenefitCard
            icon={<Zap className="h-8 w-8" />}
            title="Zero Learning Curve"
            description="Start productive immediately. Our AI agents learn from your natural language instructions and adapt to your working style."
            delay="delay-300"
          />
          
          <BenefitCard
            icon={<BrainCircuit className="h-8 w-8" />}
            title="Context-Aware Intelligence"
            description="Unlike generic chatbots, our agents understand your projects, remember your preferences, and provide truly helpful assistance."
            delay="delay-100"
          />
          
          <BenefitCard
            icon={<Lock className="h-8 w-8" />}
            title="Enterprise-Grade Security"
            description="Your data stays private with end-to-end encryption and strict compliance with global security standards."
            delay="delay-200"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;