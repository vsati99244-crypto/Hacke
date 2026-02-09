
import React, { useState } from 'react';
import { generateTextStream } from '../services/geminiService';

const ContentGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'blog' | 'email' | 'code'>('blog');

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setResult('');
    
    let fullPrompt = prompt;
    if (activeTab === 'blog') fullPrompt = `Write a detailed, engaging blog post about: ${prompt}`;
    if (activeTab === 'email') fullPrompt = `Write a professional email regarding: ${prompt}`;
    if (activeTab === 'code') fullPrompt = `Write clean, documented code for: ${prompt}`;

    try {
      await generateTextStream(fullPrompt, (chunk) => {
        setResult(prev => prev + chunk);
      });
    } catch (err) {
      setResult("Error generating content. Please check your API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-outfit font-bold text-white mb-8">AI Content Writer</h2>
      
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex border-b border-slate-800">
          {(['blog', 'email', 'code'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === tab ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={`What would you like to write about? (e.g., "The future of space travel")`}
            className="w-full h-32 bg-slate-950 border border-slate-700 rounded-xl p-4 text-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
          />
          
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt}
            className={`mt-4 w-full py-4 rounded-xl font-bold transition-all shadow-lg ${
              loading || !prompt ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20'
            }`}
          >
            {loading ? 'Generating...' : 'Magic Generate ✨'}
          </button>
        </div>

        {result && (
          <div className="p-6 border-t border-slate-800 bg-slate-950/50">
            <h4 className="text-indigo-400 font-bold mb-4 uppercase text-xs tracking-widest">Generated Result</h4>
            <div className="prose prose-invert max-w-none text-slate-300 whitespace-pre-wrap leading-relaxed">
              {result}
            </div>
            <button 
                onClick={() => navigator.clipboard.writeText(result)}
                className="mt-6 text-xs text-slate-500 hover:text-indigo-400 flex items-center gap-2"
            >
                Copy to Clipboard 📋
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentGenerator;
