
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const tools = [
    {
      title: "AI Writer",
      desc: "Blogs, emails, and social posts generated in seconds.",
      icon: "✍️",
      link: "/write",
      color: "border-indigo-500/30 bg-indigo-500/5 hover:bg-indigo-500/10"
    },
    {
      title: "AI Image Studio",
      desc: "Turn your imagination into stunning visuals.",
      icon: "🎨",
      link: "/draw",
      color: "border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
          Monetization Ready Platform
        </span>
        <h1 className="text-5xl md:text-7xl font-outfit font-extrabold text-white mb-6 leading-tight">
          Unleash the Power of <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Gemini Intelligence
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          The all-in-one AI tool for content creators, developers, and marketers. Generate text, images, and more with the speed of thought.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/write" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-indigo-600/20">
            Start Writing
          </Link>
          <Link to="/draw" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all">
            Generate Images
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {tools.map((tool, i) => (
          <Link key={i} to={tool.link} className={`p-8 rounded-2xl border transition-all transform hover:-translate-y-1 ${tool.color}`}>
            <div className="text-4xl mb-4">{tool.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{tool.title}</h3>
            <p className="text-slate-400">{tool.desc}</p>
          </Link>
        ))}
      </div>

      {/* Ad Placeholder Section for UI demo */}
      <div className="mt-20 p-8 border border-dashed border-slate-700 rounded-2xl flex flex-col items-center justify-center bg-slate-900/50">
        <p className="text-slate-500 text-sm mb-2 italic">Advertisement Space</p>
        <div className="w-full h-24 bg-slate-800/50 rounded flex items-center justify-center">
            <span className="text-slate-600">Your Ads Here</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
