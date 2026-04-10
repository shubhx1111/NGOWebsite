import React, { useState } from 'react';
import { CreditCard, DollarSign, Heart } from 'lucide-react';

const Donate = () => {
  const [amount, setAmount] = useState(25);
  const amounts = [10, 25, 50, 100, 250, 500];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side: Info */}
            <div className="space-y-8">
              <h1 className="section-title text-left mb-4">Make a <span className="text-primary-600">Donation</span></h1>
              <p className="text-lg text-slate-600">
                Your contribution directly supports our ongoing programs. 100% of your donation is tax-deductible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                    <span className="text-primary-600 font-bold">$10</span>
                  </div>
                  <p className="text-slate-700 pt-2"><span className="font-bold">Supplies:</span> Provides a month of school supplies for one student.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                    <span className="text-primary-600 font-bold">$25</span>
                  </div>
                  <p className="text-slate-700 pt-2"><span className="font-bold">Nutrition:</span> Provides healthy meals for a family for two weeks.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                    <span className="text-primary-600 font-bold">$100</span>
                  </div>
                  <p className="text-slate-700 pt-2"><span className="font-bold">Health:</span> Provides a full medical checkup and treatment for a child.</p>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <Heart className="mr-2 text-primary-600" fill="currentColor" />
                Select Amount
              </h2>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {amounts.map(a => (
                  <button
                    key={a}
                    onClick={() => setAmount(a)}
                    className={`py-3 rounded-xl font-bold transition-all ${amount === a ? 'bg-primary-600 text-white shadow-lg shadow-primary-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                  >
                    ${a}
                  </button>
                ))}
              </div>

              <div className="mb-8 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <DollarSign className="text-slate-400" size={20} />
                </div>
                <input
                  type="number"
                  placeholder="Other Amount"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-bold text-lg"
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>

              <button className="w-full btn-primary py-4 text-lg flex items-center justify-center space-x-2">
                <CreditCard size={20} />
                <span>Donate ${amount || 0} Now</span>
              </button>
              
              <p className="text-center text-xs text-slate-400 mt-6">
                Secure SSL Encrypted Payment. Your data is safe.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
