/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2, Zap, Droplets, UserMinus, ShieldCheck, MapPin, Info } from 'lucide-react';
import React, { useState } from 'react';
import img1 from '@/assets/img1.png';
import img2 from '@/assets/img2.png';

export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // In Vite we respect the base path, but our custom backend route is strictly /api/leads
      // Because base is configured in Vite config, we should make sure the fetch goes to the correct URL
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white font-sans selection:bg-[#BEF264]/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-[#BEF264]" />
            <span className="text-xl font-black tracking-tighter uppercase text-white">The Protein <span className="text-[#BEF264]">Crate</span></span>
          </div>
          <a
            href="#apply"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#BEF264] bg-white/5 border border-white/20 rounded hover:text-black hover:bg-[#BEF264] transition-colors"
          >
            Partner With Us
          </a>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative px-4 pt-20 pb-24 sm:pt-32 sm:pb-32 overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#BEF264]/10 via-[#0A0A0B]/0 to-[#0A0A0B]/0"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#BEF264] text-black text-[10px] font-bold uppercase tracking-widest mb-4">
              <Zap className="w-4 h-4" />
              Fueling Your Members. Growing Your Revenue.
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-[0.9]">
              Turn Your Gym's Empty Space Into <span className="text-[#BEF264]">Effortless Monthly Income.</span>
            </h1>
            
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Partner with The Protein Crate to provide your members with premium, chilled pre- and post-workout nutrition. We handle the machines, the stock, and the electricity. You just collect your share of the profits.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#apply"
                className="w-full sm:w-auto px-8 py-4 text-sm font-black uppercase tracking-widest text-black bg-[#BEF264] hover:bg-[#a8d655] transition-colors"
              >
                Apply for a Free Machine Installation
              </a>
            </div>
            
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest flex items-center justify-center gap-2 pt-6">
              <MapPin className="w-4 h-4" />
              Currently expanding across top local gyms in Bengaluru, Hyderabad, and Chennai.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-5xl mx-auto mt-16"
          >
            <div className="aspect-[16/9] sm:aspect-[21/9] bg-white/5 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden rounded-xl">
              <img src={img1} alt="Vending machine" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </section>

        {/* The Problem vs. The Solution */}
        <section className="py-24 bg-[#0F0F10] border-y border-white/10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">The Problem vs. The Solution</h2>
              <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                Gym owners know that members constantly need quick protein fixes, but running a front-desk supplement shop is exhausting.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* The Old Way */}
              <div className="bg-[#0A0A0B] p-8 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gray-600"></div>
                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 border border-white/20 text-gray-500 text-sm">✕</span>
                  The Old Way
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-gray-500 shrink-0"></span>
                    Buying expensive tubs of protein and worrying about expiry dates.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-gray-500 shrink-0"></span>
                    Dealing with messy scoops, spilled milk, and the constant risk of ants or cockroaches.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-gray-500 shrink-0"></span>
                    Tying up your trainers and front-desk staff to act as cashiers and baristas.
                  </li>
                </ul>
              </div>

              {/* The Protein Crate Way */}
              <div className="bg-[#161618] p-8 border border-[#BEF264]/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#BEF264]"></div>
                <h3 className="text-xl font-black uppercase tracking-tight text-[#BEF264] mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-[#BEF264] text-black text-sm">✓</span>
                  The Protein Crate Way
                </h3>
                <p className="text-sm text-white mb-6 leading-relaxed">
                  We install a state-of-the-art smart fridge in your gym that serves off-the-shelf, pre-packaged items that are already available in supermarkets (like Yoga Bar and Epigamia).
                </p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 shrink-0 border border-white/20 p-2 text-[#BEF264]">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-white font-bold uppercase tracking-widest text-[10px] mb-1">Zero Mess or Pests</strong>
                      <span className="text-gray-400 text-xs leading-relaxed">This is a 100% dry, sealed operation with zero spill risk.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 shrink-0 border border-white/20 p-2 text-[#BEF264]">
                      <UserMinus className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-white font-bold uppercase tracking-widest text-[10px] mb-1">Zero Staff Involvement</strong>
                      <span className="text-gray-400 text-xs leading-relaxed">100% automated UPI payments. Your staff never has to touch cash, mix a shake, or process a refund.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 shrink-0 border border-white/20 p-2 text-[#BEF264]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-white font-bold uppercase tracking-widest text-[10px] mb-1">Instant Brand Trust</strong>
                      <span className="text-gray-400 text-xs leading-relaxed">By stocking well-known retail brands, you don't need to display authenticity certificates or convince members to try unknown powders.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How The Partnership Works */}
        <section className="py-24 bg-[#0A0A0B]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">How The Partnership Works</h2>
              <p className="text-[10px] uppercase font-bold tracking-widest text-[#BEF264]">Zero Risk to You</p>
              <p className="text-sm text-gray-400 max-w-2xl mx-auto mt-4">
                We believe in making this as easy as possible for gym owners. Here is our simple partnership model:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "You Provide the Space",
                  desc: "The machine only requires minimal floor space and a standard power socket. No plumbing or direct water lines needed!"
                },
                {
                  step: "2",
                  title: "We Handle Everything Else",
                  desc: "I completely own the running costs such as electricity for the machine and re-stocking. We visit regularly to clean, refill, and manage inventory."
                },
                {
                  step: "3",
                  title: "You Get Paid",
                  desc: "You will get a percentage of monthly sales and in return you just need to provide the space and permission for the vending machine. It is pure, passive profit."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 relative">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#BEF264] flex items-center justify-center text-black font-black uppercase">
                    {item.step}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-3 mt-2">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 pb-24 bg-[#0F0F10]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white/5 border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/10 text-gray-400 uppercase tracking-widest text-[10px]">
                    <tr>
                      <th className="p-4 sm:p-6">Feature</th>
                      <th className="p-4 sm:p-6">Traditional Gym Juice Bar</th>
                      <th className="p-4 sm:p-6 text-white font-bold">The Protein Crate Partnership</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="p-4 sm:p-6 text-white">Setup Cost for Gym</td>
                      <td className="p-4 sm:p-6 text-gray-500">₹50,000+</td>
                      <td className="p-4 sm:p-6 text-[#BEF264] font-bold">₹0 (Free)</td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-6 text-white">Operational Mess</td>
                      <td className="p-4 sm:p-6 text-gray-500">High (Shakes, spills, blenders)</td>
                      <td className="p-4 sm:p-6 text-[#BEF264] font-bold">Zero (Pre-packaged only)</td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-6 text-white">Staff Required</td>
                      <td className="p-4 sm:p-6 text-gray-500">Yes (Receptionist/Trainer)</td>
                      <td className="p-4 sm:p-6 text-[#BEF264] font-bold">No (100% Automated)</td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-6 text-white">Utility Costs</td>
                      <td className="p-4 sm:p-6 text-gray-500">Gym pays for power/water</td>
                      <td className="p-4 sm:p-6 text-[#BEF264] font-bold">We cover our own electricity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Network */}
        <section className="py-24 bg-[#0A0A0B] border-y border-white/10">
          <div className="max-w-5xl mx-auto px-4 flex flex-col gap-12 sm:gap-16 items-center text-center">
            <div className="w-full">
              <div className="aspect-[16/9] sm:aspect-[21/9] bg-white/5 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden rounded-xl">
                 <img src={img2} alt="Happy gym owners collage" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">Join the Network</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                We specifically partner with small, local gyms that are highly popular in their respective localities. 
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                We aren't targeting massive high-end corporate chains; we want to help independent gym owners build a better experience for their loyal members.
              </p>
              <ul className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
                {['Bengaluru', 'Hyderabad', 'Chennai'].map((city) => (
                  <li key={city} className="flex items-center gap-2 text-sm text-white font-bold uppercase tracking-widest">
                    <CheckCircle2 className="w-5 h-5 text-[#BEF264]" />
                    Active in {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Lead Generation Form */}
        <section id="apply" className="py-24 bg-[#0F0F10] relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">Apply for a <span className="text-[#BEF264]">Partnership</span></h2>
              <p className="text-sm text-gray-400">
                Fill out the form below, and our team will get back to you within 24 hours to evaluate your gym's layout and discuss the revenue-sharing model.
              </p>
            </div>

            <form className="bg-[#0A0A0B] border border-white/10 p-8 space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label htmlFor="fullName" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName"
                    className="w-full bg-white/5 border border-white/20 p-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#BEF264] transition-colors" 
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="gymName" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest">Gym Name</label>
                  <input 
                    type="text" 
                    id="gymName" 
                    name="gymName"
                    className="w-full bg-white/5 border border-white/20 p-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#BEF264] transition-colors" 
                    placeholder="Titan Fitness"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label htmlFor="city" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest">City</label>
                  <div className="relative">
                    <select 
                      id="city" 
                      name="city"
                      className="w-full bg-white/5 border border-white/20 p-3 text-sm text-white appearance-none focus:outline-none focus:border-[#BEF264] transition-colors"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled className="text-gray-500">Select City</option>
                      <option value="Bengaluru" className="bg-[#0A0A0B]">Bengaluru</option>
                      <option value="Hyderabad" className="bg-[#0A0A0B]">Hyderabad</option>
                      <option value="Chennai" className="bg-[#0A0A0B]">Chennai</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="location" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest">Location/Area</label>
                  <input 
                    type="text" 
                    id="location" 
                    name="location"
                    className="w-full bg-white/5 border border-white/20 p-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#BEF264] transition-colors" 
                    placeholder="e.g., Jayanagar, Madhapur"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="phone" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  className="w-full bg-white/5 border border-white/20 p-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#BEF264] transition-colors" 
                  placeholder="+91 "
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest">Average Daily Footfall</label>
                <div className="relative">
                  <select 
                    id="footfall" 
                    name="footfall"
                    className="w-full bg-white/5 border border-white/20 p-3 text-sm text-white appearance-none focus:outline-none focus:border-[#BEF264] transition-colors"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-500">Select range</option>
                    <option value="50-100" className="bg-[#0A0A0B]">50 - 100</option>
                    <option value="100-250" className="bg-[#0A0A0B]">100 - 250</option>
                    <option value="250+" className="bg-[#0A0A0B]">250+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest">Do you have 3x3 sq. ft. of floor space near a plug point?</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center w-4 h-4">
                      <input type="radio" name="space" value="yes" className="peer sr-only" required />
                      <div className="absolute inset-0 border border-white/20 peer-checked:border-[#BEF264] group-hover:border-[#BEF264] transition-colors"></div>
                      <div className="w-2 h-2 bg-[#BEF264] scale-0 peer-checked:scale-100 transition-transform relative z-10"></div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors uppercase font-bold">Yes</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center w-4 h-4">
                      <input type="radio" name="space" value="no" className="peer sr-only" required />
                      <div className="absolute inset-0 border border-white/20 peer-checked:border-[#BEF264] group-hover:border-[#BEF264] transition-colors"></div>
                      <div className="w-2 h-2 bg-[#BEF264] scale-0 peer-checked:scale-100 transition-transform relative z-10"></div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors uppercase font-bold">No</span>
                  </label>
                </div>
              </div>

              <div className="pt-6">
                {isSubmitted && (
                  <div className="mb-4 p-4 bg-[#BEF264]/10 border border-[#BEF264]/20 text-[#BEF264] text-sm text-center font-bold uppercase tracking-widest">
                    Application received! We will be in touch shortly.
                  </div>
                )}
                {error && (
                  <div className="mb-4 p-4 bg-red-900/20 border border-red-500/20 text-red-400 text-sm text-center font-bold uppercase tracking-widest">
                    {error}
                  </div>
                )}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#BEF264] text-black font-black uppercase tracking-widest py-4 mt-2 hover:bg-[#a8d655] transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    'Get My Free Vending Machine'
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0B] border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-[#BEF264]" />
            <span className="text-2xl font-black uppercase tracking-tighter text-white">The Protein Crate</span>
          </div>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Making fitness nutrition instant, effortless, and accessible.</p>
          <div className="flex items-center justify-center gap-4 text-[10px] font-bold text-white uppercase tracking-widest flex-wrap">
            <span className="px-2 py-0.5 border border-white/10">Bengaluru</span>
            <span className="px-2 py-0.5 border border-white/10">Hyderabad</span>
            <span className="px-2 py-0.5 border border-white/10">Chennai</span>
          </div>
          <div className="pt-8 text-[10px] font-bold uppercase tracking-widest text-gray-600">
            &copy; {new Date().getFullYear()} The Protein Crate. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
