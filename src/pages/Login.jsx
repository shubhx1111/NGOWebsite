import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { LogIn, Mail, Lock } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      login(res.data.user);
      localStorage.setItem('ngo_token', res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-6">
            <LogIn size={32} />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900">Akash Kashyap Foundation</h1>
          <p className="text-slate-500 mt-2">Sign in to your NGO account</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm font-medium border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="email"
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium"
                placeholder="admin@hopegivers.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="password"
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            disabled={loading}
            className="w-full btn-primary py-4 text-lg font-bold flex items-center justify-center"
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 text-center space-y-2">
          <p className="text-slate-500 text-sm">
            Don't have an account? <Link to="/signup" className="text-primary-600 font-bold hover:underline">Create Account</Link>
          </p>
          <p className="text-slate-500 text-sm">
            Need admin access? <a href="#" className="text-primary-600 font-bold hover:underline">Contact Administrator</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
