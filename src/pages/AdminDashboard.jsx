import React, { useState, useEffect } from 'react';
import { Users, DollarSign, Bell, Shield, Search, UserMinus, UserCheck, Plus } from 'lucide-react';
import axios from 'axios';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('members');
  const [members, setMembers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'MEMBER', status: 'ACTIVE', memberId: 'HG-2024-001' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'MANAGER', status: 'ACTIVE', memberId: 'HG-2024-002' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'MEMBER', status: 'BLOCKED', memberId: 'HG-2024-003' },
  ]);

  const tabs = [
    { id: 'members', label: 'Members', icon: <Users size={20} /> },
    { id: 'donations', label: 'Donations', icon: <DollarSign size={20} /> },
    { id: 'notices', label: 'Notices', icon: <Bell size={20} /> },
    { id: 'settings', label: 'Admin Tools', icon: <Shield size={20} /> },
  ];

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 leading-tight">Admin Control Center</h1>
          <p className="text-slate-500">Manage your NGO operations and community.</p>
        </div>
        <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-slate-100">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === tab.id ? 'bg-primary-600 text-white shadow-lg shadow-primary-200' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </header>

      {activeTab === 'members' && (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by name, ID or email..." 
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none"
              />
            </div>
            <button className="btn-primary flex items-center space-x-2 px-8">
              <Plus size={20} />
              <span>Add New Member</span>
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 font-bold text-xs uppercase tracking-wider">
                  <th className="px-8 py-5">Member Details</th>
                  <th className="px-8 py-5">Role</th>
                  <th className="px-8 py-5">Member ID</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {members.map(member => (
                  <tr key={member.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-5">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500">
                          {member.name[0]}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{member.name}</p>
                          <p className="text-xs text-slate-500">{member.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-sm font-semibold text-slate-600">{member.role}</td>
                    <td className="px-8 py-5 font-mono text-xs text-slate-500">{member.memberId}</td>
                    <td className="px-8 py-5">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${member.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex justify-center space-x-3">
                        <button className="p-2 text-slate-400 hover:text-primary-600 transition-colors" title="Edit Profile">
                          <Plus size={18} />
                        </button>
                        {member.status === 'ACTIVE' ? (
                          <button className="p-2 text-slate-400 hover:text-red-500 transition-colors" title="Block Member">
                            <UserMinus size={18} />
                          </button>
                        ) : (
                          <button className="p-2 text-slate-400 hover:text-green-500 transition-colors" title="Unblock Member">
                            <UserCheck size={18} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Other tabs placeholders */}
      {activeTab === 'donations' && (
        <div className="bg-white p-12 rounded-3xl text-center shadow-xl">
          <DollarSign className="mx-auto text-primary-100 mb-6" size={64} />
          <h2 className="text-2xl font-bold mb-2 text-slate-900">Donation History</h2>
          <p className="text-slate-500 max-w-sm mx-auto">This section will list all online and cash donations with receipt generation options.</p>
        </div>
      )}

      {activeTab === 'notices' && (
        <div className="bg-white p-12 rounded-3xl text-center shadow-xl">
          <Bell className="mx-auto text-orange-100 mb-6" size={64} />
          <h2 className="text-2xl font-bold mb-2 text-slate-900">Send Notice</h2>
          <p className="text-slate-500 max-w-sm mx-auto">Send bulk messages or emails to all members or selected roles.</p>
          <div className="mt-8">
            <textarea className="w-full max-w-xl p-4 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-primary-500" placeholder="Type notice content here..." rows="4"></textarea>
            <br />
            <button className="btn-primary px-10 mt-4">Send to All Members</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
