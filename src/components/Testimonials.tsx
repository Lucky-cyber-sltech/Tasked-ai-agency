import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, company }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 relative">
      <Quote className="absolute text-red-500/20 h-16 w-16 -top-6 -left-6" />
      <p className="text-gray-300 mb-6 relative z-10">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-xl">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="text-white font-semibold">{name}</p>
          <p className="text-gray-400 text-sm">
            {role}, <span className="text-red-500">{company}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Users Are <span className="text-red-500">Saying</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Teams of all sizes are transforming how they work with Taskade AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Testimonial
            quote="Since implementing Taskade AI, our team has cut meeting time by 60% and increased output by 3x. The AI agents handle all our routine tasks while we focus on creative strategy."
            name="Sarah Chen"
            role="Marketing Director"
            company="TechVision"
          />
          
          <Testimonial
            quote="As a solopreneur juggling multiple projects, Taskade AI has been a game-changer. It's like having a virtual team that understands my business and takes care of the heavy lifting."
            name="Michael Rodriguez"
            role="Founder"
            company="DesignLab"
          />
          
          <Testimonial
            quote="We were skeptical about AI tools, but Taskade AI proved us wrong. The agents are scary good at understanding context and actually delivering useful work. It's the first AI tool our team actively wants to use."
            name="Emily Johnson"
            role="Product Manager"
            company="StreamFlow"
          />
          
          <Testimonial
            quote="Taskade AI has revolutionized how our remote team collaborates across time zones. The AI handles overnight tasks so everyone has what they need when they start their day. Pure magic."
            name="David Kim"
            role="CTO"
            company="GlobalTech"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;