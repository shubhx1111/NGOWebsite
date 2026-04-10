import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Quality Education",
      description: "Providing books, digital tools, and learning spaces for children in underserved regions.",
      image: "/assets/education.jpg",
      tags: ["Learning", "Schools"]
    },
    {
      title: "Healthcare Access",
      description: "Mobile clinics and community hospitals providing life-saving care to remote areas.",
      image: "/assets/healthcare.jpg",
      tags: ["Medical", "Wellness"]
    },
    {
      title: "Clean Water",
      description: "Building sustainable water filtration systems and wells for rural communities.",
      image: "https://images.unsplash.com/photo-1541252260730-0412e3e2108e?auto=format&fit=crop&q=80&w=800",
      tags: ["Sanitation", "Health"]
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 px-2">
          <div className="max-w-2xl">
            <h2 className="section-title">Focus <span className="text-primary-600">Areas</span></h2>
            <p className="text-lg text-slate-600">
              We focus on areas where we can make the most significant and sustainable difference in people's lives.
            </p>
          </div>
          <button className="hidden md:flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors">
            View All Programs <ArrowRight className="ml-2" size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {program.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">{program.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {program.description}
                </p>
                <button className="flex items-center font-bold text-slate-900 hover:text-primary-600 transition-colors group/btn">
                  Learn More 
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="btn-outline w-full">View All Programs</button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
