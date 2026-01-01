
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Shield, Award, Clock, Star, Microscope, ShieldCheck, Zap } from 'lucide-react';
import { SERVICES, getIcon, CLINIC_NAME } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-0 overflow-hidden">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="https://www.pexels.com/download/video/4489831/" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Gradients and Overlays for Enterprise Feel */}
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <Sparkles size={14} className="text-teal-400" />
            <span>Redefining The Dental Experience</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold font-display leading-tight text-white mb-8">
            Precision Care. <br />
            <span className="text-teal-400 italic font-light">Elevated Comfort.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Welcome to {CLINIC_NAME}. Where world-class clinical expertise meets the refined tranquility of a luxury lounge.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/consultation" className="bg-teal-600 text-white px-10 py-5 rounded-full font-bold hover:bg-teal-500 transition-all shadow-2xl hover:shadow-teal-500/40 text-lg">
              Start Your Journey
            </Link>
            <Link to="/services" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all text-lg flex items-center space-x-2">
              <span>Our Expertise</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-12 opacity-80">
            <div className="text-white text-center">
              <p className="text-3xl font-display font-bold">15+</p>
              <p className="text-[10px] uppercase tracking-widest text-teal-400 font-bold">Years Experience</p>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="text-white text-center">
              <p className="text-3xl font-display font-bold">5k+</p>
              <p className="text-[10px] uppercase tracking-widest text-teal-400 font-bold">Smiles Designed</p>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="text-white text-center">
              <p className="text-3xl font-display font-bold">20+</p>
              <p className="text-[10px] uppercase tracking-widest text-teal-400 font-bold">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Dental Suite" 
                className="rounded-2xl shadow-2xl relative z-10 w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-slate-900 p-10 rounded-2xl text-white z-20 shadow-2xl max-w-xs">
                <blockquote className="text-lg italic font-display mb-4">
                  "Our goal was to eliminate the 'clinical' anxiety and replace it with clinical excellence."
                </blockquote>
                <p className="text-sm font-bold text-teal-500">— DR. ELENA VANCE</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight">
                The Science of A <br />
                <span className="text-teal-600">Perfect Smile.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At The Dental Care Lounge, we operate at the intersection of medical science and artistic design. Every treatment plan is uniquely crafted using 3D digital simulation and biological evidence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className="text-lg font-bold">Biocompatibility</h4>
                  <p className="text-sm text-slate-500">We use only mercury-free, high-grade biocompatible materials for long-term health.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
                    <Microscope size={24} />
                  </div>
                  <h4 className="text-lg font-bold">Digital Workflow</h4>
                  <p className="text-sm text-slate-500">From scans to implants, our entire process is 100% digital for extreme precision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Services Grid */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 mb-6">Expertise Redefined</h2>
            <p className="text-slate-600">Clinical proficiency in every discipline of modern dentistry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-teal-500/20 hover:shadow-2xl transition-all group">
                <div className="mb-8 overflow-hidden rounded-2xl h-48 relative">
                   <img 
                    src={`https://picsum.photos/seed/${s.id}/600/400`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={s.title} 
                   />
                   <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors"></div>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-teal-600">
                    {getIcon(s.icon, 28)}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{s.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-8">{s.description}</p>
                <Link to="/services" className="inline-flex items-center space-x-2 text-teal-600 font-bold group-hover:translate-x-2 transition-transform">
                  <span>View Treatment Detail</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Edge Section */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-600/5 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 border border-teal-500/30 rounded-full text-teal-400 text-xs font-bold tracking-widest uppercase">
                Enterprise Technology
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-display leading-tight">
                The Digital <br />
                <span className="text-teal-500">Advantage.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We invest in the world's most advanced dental technologies to ensure faster recovery, less pain, and superior outcomes.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "CBCT 3D X-Ray", desc: "Ultra-low dose radiation scans for perfect surgical planning." },
                  { title: "CEREC Primemill", desc: "Digital crowns in a single visit, milled on-site." },
                  { title: "Waterlase Laser", desc: "Painless gum surgery without scalpels or stitches." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <div className="bg-teal-500/10 p-2 rounded-lg text-teal-500">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
                alt="High Tech Equipment" 
                className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-teal-600/20 mix-blend-overlay rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-teal-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold font-display text-white">Ready for your transformation?</h2>
              <p className="text-teal-100 text-lg max-w-2xl mx-auto">
                Schedule a bespoke consultation with our lead specialists and discover what's possible for your smile.
              </p>
              <div className="pt-4">
                <Link to="/consultation" className="bg-white text-teal-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-xl inline-block">
                  Reserve Your Lounge Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
