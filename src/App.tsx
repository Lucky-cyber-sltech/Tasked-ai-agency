import React, { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AccessForm from './components/AccessForm';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Toaster position="top-center" />
      <Header />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <AccessForm />
    </div>
  );
}

export default App;