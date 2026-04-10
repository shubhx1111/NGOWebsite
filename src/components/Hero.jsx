import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero.jpg" 
          alt="NGO Hero" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary-600/30 text-primary-300 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-primary-500/20">
              Transforming Lives Together
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              Every Child Deserves <br />
              <span className="text-primary-400">A Brighter Future.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Join us in our mission to provide education, healthcare, and sustainable opportunities to underprivileged communities around the world.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="btn-primary flex items-center justify-center group text-lg px-8">
                Start Your Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="flex items-center justify-center space-x-3 text-white font-bold hover:text-primary-400 transition-colors py-3 px-6 rounded-full bg-white/10 backdrop-blur-md">
                <span className="w-10 h-10 flex items-center justify-center bg-primary-600 rounded-full">
                  <Play size={16} fill="white" />
                </span>
                <span>Watch Our Story</span>
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex items-center space-x-12"
          >
            <div>
              <p className="text-3xl font-bold text-white mb-1">2M+</p>
              <p className="text-sm text-slate-400 uppercase tracking-wider">Lives Impacted</p>
            </div>
            <div className="w-px h-12 bg-slate-700"></div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">50+</p>
              <p className="text-sm text-slate-400 uppercase tracking-wider">Global Projects</p>
            </div>
            <div className="w-px h-12 bg-slate-700"></div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">15+</p>
              <p className="text-sm text-slate-400 uppercase tracking-wider">Years Active</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Shapes Decorations */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
    </section>
  );
};

export default Hero;
