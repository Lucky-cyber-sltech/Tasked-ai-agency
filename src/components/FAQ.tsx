import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-6">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-white">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-red-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-red-500" />
        )}
      </button>
      <div
        className={`mt-3 text-gray-300 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How accurate and reliable are Taskade's AI agents?",
      answer:
        "Our AI agents are trained on industry-specific data and continuously improve through user feedback. They achieve 95%+ accuracy for most tasks and include built-in verification systems that flag potential issues for human review. Unlike generic AI tools, Taskade agents are specialized for productivity workflows."
    },
    {
      question: "Is Taskade AI difficult to set up and learn?",
      answer:
        "Not at all! Taskade AI is designed for immediate productivity with a 15-minute setup process. Our guided onboarding helps you train your first agent in under an hour, with no technical knowledge required. Most users report mastering the platform within their first week."
    },
    {
      question: "How does Taskade AI protect my data and ensure privacy?",
      answer:
        "Taskade AI employs enterprise-grade security with end-to-end encryption, GDPR compliance, and SOC 2 certification. Your data is never used to train our models without explicit permission, and you maintain full ownership of all content. We offer data residency options for teams with specific regional requirements."
    },
    {
      question: "Can Taskade AI integrate with my existing tools and workflows?",
      answer:
        "Absolutely! Taskade AI integrates seamlessly with popular tools including Slack, Microsoft Teams, Google Workspace, Notion, Asana, and more. Our open API allows for custom integrations, and we offer dedicated support for enterprise implementations requiring specialized connections."
    }
  ];

  return (
    <section id="faq" className="bg-gradient-to-b from-black to-gray-900 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-red-500">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Taskade AI and how it can transform your workflow.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;