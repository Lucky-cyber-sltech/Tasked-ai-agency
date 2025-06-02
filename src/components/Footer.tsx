import React from 'react';
import { Bot, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="h-6 w-6 text-red-500" />
              <span className="text-xl font-bold text-white">Taskade<span className="text-red-500">AI</span></span>
            </div>
            <p className="mb-4">
              AI-powered productivity platform for teams and individuals. Train virtual agents to handle your workload.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Use Cases</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">API</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Taskade AI. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <span className="px-2">Privacy</span>
            <span className="border-l border-gray-700 h-4 mx-2"></span>
            <span className="px-2">Terms</span>
            <span className="border-l border-gray-700 h-4 mx-2"></span>
            <span className="px-2">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;