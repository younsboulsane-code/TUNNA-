import React from 'react';
import { Target, Zap, Shield, Maximize, ArrowRight, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-diamond">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-tunna-blue/10 text-tunna-blue rounded-full text-[11px] font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-3 h-3" />
              Our Story
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-tunna-text mb-8 leading-tight">
              About Tunna AI <br />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#7E22CE] to-[#EC4899] bg-clip-text text-transparent">
                Intelligence. Refined.
              </span>
            </h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">
              Tunna AI was built on a simple idea: Technology should think clearly, work efficiently, and stay out of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-tunna-text mb-6">Why Tunna Exists</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Modern digital tools are powerful. But they are often fragmented, overwhelming, and inefficient. Tunna AI removes friction.
              </p>
              <div className="space-y-4">
                {[
                  "Automation that works",
                  "Systems that scale",
                  "Intelligence that adapts",
                  "Design that feels effortless"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-tunna-blue/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-tunna-blue" />
                    </div>
                    <span className="font-bold text-tunna-text">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-tunna-blue font-bold text-xl italic">
                Less clutter. More clarity.
              </p>
            </div>
            <div className="bg-gray-50 rounded-3xl p-12 border border-gray-100">
              <h3 className="text-2xl font-display font-bold text-tunna-text mb-6">What We Do</h3>
              <p className="text-gray-600 mb-8">
                Tunna AI develops advanced AI-powered solutions that help businesses and individuals:
              </p>
              <ul className="space-y-4">
                {[
                  "Streamline workflows",
                  "Optimize decision-making",
                  "Improve operational efficiency",
                  "Reduce manual processes",
                  "Unlock smarter performance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <ArrowRight className="w-5 h-5 text-tunna-blue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-sm font-bold text-gray-400 uppercase tracking-widest">
                We build technology that supports you — not technology you must manage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-tunna-text text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-tunna-blue/10 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-bold mb-6">Our Approach</h2>
            <p className="text-white/60 text-lg">
              We believe intelligence should be precise, secure, scalable, and minimal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Precise", desc: "Every function has purpose." },
              { icon: Shield, title: "Secure", desc: "Privacy is foundational." },
              { icon: Maximize, title: "Scalable", desc: "Built for growth." },
              { icon: Zap, title: "Minimal", desc: "Clean design. Powerful engine." }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <feature.icon className="w-8 h-8 text-tunna-blue mb-6" />
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-2xl font-display font-medium text-white/80 italic">
              "No unnecessary complexity. No inflated promises. Just intelligent systems, built right."
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold text-tunna-text mb-8">Our Vision</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              To create a future where AI is not disruptive — but seamlessly integrated. Where automation feels natural. Where performance feels effortless. Where clarity replaces chaos.
            </p>
            <div className="h-px bg-gray-100 w-24 mx-auto mb-12" />
            <h3 className="text-2xl font-display font-bold text-tunna-text mb-4">Moving Forward</h3>
            <p className="text-gray-500 mb-8">
              We’re not here to follow trends. We’re here to build sharper systems for a smarter digital world.
            </p>
            <div className="inline-block px-8 py-4 bg-tunna-blue text-white rounded-2xl font-bold text-lg shadow-lg shadow-tunna-blue/20">
              Welcome to Tunna AI. Built to think.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
