import React from 'react';

const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="section-title">Our <span className="text-primary-600">Story</span></h1>
        <p className="section-subtitle">A journey of a thousand miles begins with a single step of kindness.</p>
        
        <div className="max-w-4xl mx-auto mt-12 text-left space-y-8 text-slate-700 leading-relaxed text-lg">
          <p>
            Founded in 2010, HopeGivers started as a small group of volunteers delivering food to local shelters. Today, we are a global organization impact life across three continents.
          </p>
          <p>
            Our mission is simple: to create a world where every individual has the opportunity to live a healthy, productive life. We focus on education, health, and economic development, working closely with local communities to create sustainable change.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Vision</h3>
              <p>A world free from poverty, where every child can dream and achieve their full potential through equitable access to resources.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Mission</h3>
              <p>To empower marginalized communities through education, healthcare, and sustainable livelihood programs that foster self-reliance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
