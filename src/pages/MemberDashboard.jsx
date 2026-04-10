import React, { useContext, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { QRCodeSVG } from 'qrcode.react';
import { Download, CreditCard, Award, FileText, Bell, ChevronRight, Activity, Calendar } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const MemberDashboard = () => {
  const { user } = useContext(AuthContext);
  const cardRef = useRef();

  const downloadIDCard = () => {
    html2canvas(cardRef.current, { scale: 3, backgroundColor: null }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 10, 10, 190, (190 * canvas.height) / canvas.width);
      pdf.save(`ID_Card_${user?.name || 'Member'}.pdf`);
    });
  };

  return (
    <div className="space-y-10 animate-fade-in relative z-10">
      {/* Background decorations for the whole page */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-primary-200/40 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-accent-200/40 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header Section */}
      <header className="bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all hover:shadow-md">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary-600 to-accent-500 p-0.5 shadow-lg">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary-600 to-primary-900">
                {user?.name?.[0] || 'U'}
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white z-10 flex items-center justify-center" title="Active Member">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">{user?.name || 'Member'}</span>!
            </h1>
            <p className="text-slate-500 font-medium flex items-center gap-2">
              <Activity size={16} className="text-green-500" /> Your dashboard is synced and up to date.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-3 bg-white border border-slate-200 rounded-full text-slate-500 hover:text-primary-600 hover:border-primary-200 hover:shadow-md transition-all relative group">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          <div className="px-5 py-2.5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 rounded-full font-bold text-sm shadow-sm flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Status: Active
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Column - ID Card & Profile */}
        <div className="xl:col-span-1 space-y-8">
          {/* Enhanced Digital ID Card */}
          <div className="bg-white/80 backdrop-blur-lg border border-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700"></div>
            
            <div className="flex justify-between items-center mb-6 relative z-10">
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3 text-primary-600">
                  <CreditCard size={20} />
                </div>
                Digital Access Card
              </h2>
            </div>
            
            <div className="relative group/card perspective-1000">
              <div 
                ref={cardRef} 
                className="bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 p-6 rounded-2xl shadow-2xl text-white relative overflow-hidden aspect-[1.58/1] w-full max-w-sm mx-auto transform transition-transform duration-500 ease-out group-hover/card:scale-[1.02] border border-white/10"
              >
                {/* Premium Card Effects */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/10 to-transparent rounded-full -mr-24 -mt-24 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent rounded-full -ml-16 -mb-16 pointer-events-none"></div>
                
                {/* Holographic overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_100%] animate-[shimmer_3s_infinite] pointer-events-none"></div>
                
                <div className="flex justify-between items-start relative z-10 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-4 h-4 bg-accent-500 rounded-sm"></div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-primary-200 font-bold">Foundation ID</p>
                    </div>
                    <p className="text-lg font-bold text-white tracking-wide">Akash Kashyap</p>
                  </div>
                  <div className="bg-white/90 p-1.5 rounded-xl shadow-inner backdrop-blur-md">
                    <QRCodeSVG value={`https://hopegivers.org/verify/${user?.id || 'demo'}`} size={54} />
                  </div>
                </div>

                <div className="flex items-center space-x-4 relative z-10 my-4">
                  <div className="w-14 h-14 bg-gradient-to-tr from-white/10 to-white/30 rounded-xl border border-white/20 backdrop-blur-md flex items-center justify-center text-2xl font-bold shadow-lg">
                    {user?.name?.[0] || 'U'}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white">{user?.name || 'Unknown User'}</h3>
                    <p className="text-sm text-primary-300 font-medium">{user?.designation || 'Volunteer Member'}</p>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end border-t border-white/10 pt-4 z-10">
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-primary-300 font-bold mb-1 opacity-80">Member ID</p>
                    <p className="text-xs font-mono tracking-widest bg-black/30 px-2 py-1 rounded border border-white/5">{user?.memberId || 'HG-2024-XXXX'}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] uppercase tracking-wider text-primary-300 font-bold mb-1 opacity-80">Valid Thru</p>
                    <p className="text-xs font-mono tracking-widest">{user?.validityDate || '12/25'}</p>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={downloadIDCard}
              className="mt-8 w-full flex items-center justify-center space-x-2 py-3.5 bg-slate-900 border border-slate-800 rounded-xl font-bold text-white hover:bg-primary-600 hover:border-primary-600 transition-all shadow-lg hover:shadow-primary-600/30 group"
            >
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              <span>Export High-Res PDF</span>
            </button>
          </div>

          {/* Mini Stats Card */}
          <div className="bg-gradient-to-br from-accent-500 to-accent-700 p-6 rounded-3xl shadow-lg shadow-accent-500/20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
            <div className="flex justify-between items-center relative z-10">
              <div>
                <p className="text-accent-100 text-sm font-medium mb-1">Total Hours Volunteered</p>
                <p className="text-4xl font-extrabold">124<span className="text-xl text-accent-200 ml-1">hrs</span></p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <Activity size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Documents & Notices */}
        <div className="xl:col-span-2 space-y-8">
          
          {/* Quick Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl border border-white shadow-lg hover:shadow-xl group hover:border-primary-200 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-inner border border-white">
                <FileText size={28} />
              </div>
              <h3 className="text-xl font-extrabold text-slate-800 mb-2">Appointment Letter</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">Download your officially signed, completely verified appointment letter with secure QR integration.</p>
              <button className="text-primary-700 font-bold text-sm flex items-center group-hover:text-primary-600 bg-primary-50 px-4 py-2 rounded-lg transition-colors">
                Download PDF <Download className="ml-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl border border-white shadow-lg hover:shadow-xl group hover:border-accent-200 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-accent-100 rounded-2xl flex items-center justify-center text-accent-600 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-inner border border-white">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-extrabold text-slate-800 mb-2">My Certificates</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">Access your participation, appreciation, and exclusive volunteer certificates for various events.</p>
              <button className="text-accent-700 font-bold text-sm flex items-center group-hover:text-accent-600 bg-accent-50 px-4 py-2 rounded-lg transition-colors">
                View Gallery <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Notice Board Section */}
          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-32 -mt-32 -z-10"></div>
             
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                <div className="p-2 bg-slate-100 rounded-xl text-slate-500 border border-slate-200">
                  <Calendar size={24} />
                </div>
                Notice Board
              </h3>
              <button className="text-sm font-bold text-primary-600 hover:text-primary-800 transition-colors">View All</button>
            </div>
            
            <div className="space-y-5">
              {/* Important Notice */}
              <div className="group p-5 bg-gradient-to-r from-primary-50 to-white rounded-2xl border-l-4 border-l-primary-500 border-y border-r border-slate-100 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-1 bg-primary-100 text-primary-700 text-[10px] font-extrabold uppercase tracking-widest rounded-md">Urgent</span>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Oct 20, 2024</p>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">Annual General Meeting Next Week</h4>
                <p className="text-sm text-slate-600 leading-relaxed">All active members are requested to attend the highly anticipated meeting at 10:00 AM in the city hall main office. Attendance is mandatory for volunteer coordinators.</p>
              </div>
              
              {/* Standard Notice */}
              <div className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                   <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Oct 15, 2024</p>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">Winter Blanket Distribution Drive</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Volunteers urgently needed for the upcoming city-wide blanket drive. Register your names by Friday to secure an assigned location.</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <button className="text-slate-500 font-medium hover:text-slate-800 flex items-center justify-center w-full gap-2 transition-colors">
                Load previous announcements <ChevronRight size={16} />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
