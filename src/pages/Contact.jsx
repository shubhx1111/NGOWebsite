import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      if (res.data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="section-title">Get in <span className="text-primary-600">Touch</span></h1>
          <p className="section-subtitle">Have questions about our programs or want to volunteer? We'd love to hear from you.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex items-start space-x-6">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                <p className="text-slate-600 text-sm">contact@hopegivers.org</p>
                <p className="text-slate-600 text-sm">support@hopegivers.org</p>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex items-start space-x-6">
              <div className="w-14 h-14 bg-accent-100 rounded-2xl flex items-center justify-center text-accent-600 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                <p className="text-slate-600 text-sm">+1 (234) 567-890</p>
                <p className="text-slate-600 text-sm">Mon - Fri, 9am - 6pm</p>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex items-start space-x-6">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Visit Us</h4>
                <p className="text-slate-600 text-sm">123 Kindness Way, Suite 101</p>
                <p className="text-slate-600 text-sm">New York, NY 10001</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea
                  required
                  rows="5"
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                disabled={status === 'sending'}
                className="btn-primary w-full py-5 text-lg flex items-center justify-center space-x-3"
              >
                {status === 'sending' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-600 font-bold text-center animate-bounce">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
