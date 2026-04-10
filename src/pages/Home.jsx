import React from 'react';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import Programs from '../components/Programs';
import { motion } from 'framer-motion';
import { Heart, Globe, ShieldCheck } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Our Mission Snippet */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Pure Compassion</h3>
              <p className="text-slate-600">Driven by the simple belief that every human being deserves a chance to thrive, regardless of their background.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center text-accent-600 mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Network</h3>
              <p className="text-slate-600">Working across 20+ countries with local partners to ensure cultural relevance and sustainable development.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Full Transparency</h3>
              <p className="text-slate-600">95% of all donations go directly to program services. We provide detailed impact reports for every project.</p>
            </div>
          </div>
        </div>
      </section>

      <Impact />
      
      <Programs />

      {/* CTA Section */}
      <section className="py-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card bg-white/10 backdrop-blur-lg border-white/10 p-12 md:p-20 max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">Ready to Make <span className="text-primary-400">History?</span></h2>
            <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Your contribution, no matter how small, can be the spark that ignites a child's future. Join our community of change-makers today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="btn-primary bg-white text-primary-900 hover:bg-primary-50 px-10 py-4 text-lg">
                Become a Volunteer
              </button>
              <button className="px-10 py-4 text-lg border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-primary-900 transition-all duration-300">
                Donate Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
