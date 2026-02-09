
import React, { useState } from 'react';
import { generateImage } from '../services/geminiService';

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setImage(null);
    try {
      const url = await generateImage(prompt);
      setImage(url);
    } catch (err) {
      alert("Image generation failed. Ensure your API key supports Gemini 2.5 Flash Image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-outfit font-bold text-white mb-8">AI Image Studio</h2>

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
            <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Describe your image</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A futuristic city with flying neon cars, cyberpunk aesthetic, high resolution..."
              className="w-full h-40 bg-slate-950 border border-slate-700 rounded-xl p-4 text-slate-200 focus:ring-2 focus:ring-purple-500 outline-none resize-none transition-all"
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !prompt}
              className={`mt-6 w-full py-4 rounded-xl font-bold transition-all ${
                loading || !prompt ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-500 text-white shadow-xl shadow-purple-600/20'
              }`}
            >
              {loading ? 'Creating Artwork...' : 'Paint Masterpiece 🎨'}
            </button>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
            <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Tips</h4>
            <ul className="text-xs text-slate-400 space-y-2">
              <li>• Mention lighting (e.g., cinematic, golden hour)</li>
              <li>• Specify style (e.g., oil painting, 3D render)</li>
              <li>• Be descriptive with colors and textures</li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="aspect-square bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl group relative">
            {image ? (
              <>
                <img src={image} alt="Generated" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={image} download="genie-ai-art.png" className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm">Download</a>
                </div>
              </>
            ) : (
              <div className="text-center p-12">
                {loading ? (
                  <div className="space-y-4">
                    <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="text-slate-400 animate-pulse">Summoning pixels...</p>
                  </div>
                ) : (
                  <>
                    <div className="text-6xl mb-4 opacity-20">🖼️</div>
                    <p className="text-slate-500">Enter a prompt and click generate to see the magic happen.</p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
