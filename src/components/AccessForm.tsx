import React, { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const AccessForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem('popupShown');
    
    if (!popupShown) {
      const timer = setTimeout(() => {
        document.getElementById('accessForm')?.classList.remove('hidden');
        setHasShown(true);
        sessionStorage.setItem('popupShown', 'true');
      }, 5000);
      
      return () => clearTimeout(timer);
    } else {
      setHasShown(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{ name, email, phone }]);

      if (error) throw error;

      setSubmitted(true);
      toast.success('Thank you for your interest!');
      
      setTimeout(() => {
        document.getElementById('accessForm')?.classList.add('hidden');
      }, 3000);
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const closeForm = () => {
    document.getElementById('accessForm')?.classList.add('hidden');
  };

  return (
    <div 
      id="accessForm" 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 hidden p-4"
    >
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 md:p-8 max-w-md w-full relative animate-fadeIn">
        <button 
          onClick={closeForm}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-gray-300">
              We've received your request for early access. You'll hear from us soon!
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">LIMITED TIME OFFER!</h3>
              <p className="text-gray-300">
                Get FREE access to our AI productivity suite worth $297/month
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white transition-all"
                  placeholder="you@company.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : 'CLAIM MY FREE ACCESS NOW'}
              </button>
              
              <p className="text-xs text-gray-400 text-center">
                ⚡ Only 47 spots remaining today! No spam, unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AccessForm;