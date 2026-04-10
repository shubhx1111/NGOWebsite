import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import MemberDashboard from './MemberDashboard';

const Panel = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div className="pt-32 text-center font-bold">Loading...</div>;
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-12">
        {user.role === 'ADMIN' ? <AdminDashboard /> : <MemberDashboard />}
      </div>
    </div>
  );
};

export default Panel;
