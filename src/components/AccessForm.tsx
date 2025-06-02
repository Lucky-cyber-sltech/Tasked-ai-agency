import React, { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';

const AccessForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if the popup has been shown before in this session
    const popupShown = sessionStorage.getItem('popupShown');
    
    if (!popupShown) {
      // Show popup after 5 seconds if not shown before
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log({ name, email, phone });
    
    // Show success state
    setSubmitted(true);
    
    // Close the form after 3 seconds
    setTimeout(() => {
      document.getElementById('accessForm')?.classList.add('hidden');
    }, 3000);
  };

  const closeForm = () => {
    document.getElementById('accessForm')?.classList.add('hidden');
  };

  return (
    <div 
      id="accessForm" 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 hidden"
    >
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 max-w-md w-full relative animate-fadeIn">
        <button 
          onClick={closeForm}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>
        
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-gray-300">
              We've received your request for early access. You'll hear from us soon!
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-white mb-2">Get Early Access</h3>
            <p className="text-gray-300 mb-6">
              Be among the first to experience the future of AI-powered productivity.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                  placeholder="you@company.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Request Access
              </button>
              
              <p className="text-xs text-gray-400 mt-4 text-center">
                By submitting, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AccessForm;