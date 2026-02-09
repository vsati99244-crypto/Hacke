
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import ContentGenerator from './views/ContentGenerator';
import ImageGenerator from './views/ImageGenerator';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 py-3">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <span className="text-white text-2xl font-bold">G</span>
        </div>
        <span className="text-xl font-outfit font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">GenieAI</span>
      </Link>
      <div className="flex space-x-6 text-sm font-medium text-slate-300">
        <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
        <Link to="/write" className="hover:text-indigo-400 transition-colors">Write</Link>
        <Link to="/draw" className="hover:text-indigo-400 transition-colors">Draw</Link>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 mt-20">
    <div className="max-w-7xl mx-auto text-center">
      <p className="text-slate-500 text-sm mb-4">© 2024 GenieAI Hub. Powered by Gemini. Netlify Optimized.</p>
      <div className="flex justify-center space-x-6 grayscale opacity-50">
        {/* Placeholder for ad partners or small social icons */}
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Ad Ready Platform</span>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/write" element={<ContentGenerator />} />
            <Route path="/draw" element={<ImageGenerator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
