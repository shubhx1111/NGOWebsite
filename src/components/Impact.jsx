import React from 'react';
import { Users, Droplets, BookOpen, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

const Impact = () => {
  const stats = [
    { icon: <BookOpen className="text-blue-500" />, label: 'Children Educated', value: '450K+', color: 'bg-blue-50' },
    { icon: <Droplets className="text-cyan-500" />, label: 'Clean Water Projects', value: '1,200', color: 'bg-cyan-50' },
    { icon: <HeartPulse className="text-rose-500" />, label: 'Medical CAMPS', value: '850', color: 'bg-rose-50' },
    { icon: <Users className="text-amber-500" />, label: 'Volunteers Active', value: '15K+', color: 'bg-amber-50' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Tangible <span className="text-primary-600">Impact</span></h2>
          <p className="section-subtitle">
            Numbers tell only half the story. Behind every statistic is a life transformed, a community empowered, and a brighter tomorrow forged.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 glass-card border-slate-100 hover:border-primary-100 group cursor-default"
            >
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {React.cloneElement(stat.icon, { size: 32 })}
              </div>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-2">{stat.value}</h3>
              <p className="font-semibold text-slate-500 uppercase tracking-wider text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
