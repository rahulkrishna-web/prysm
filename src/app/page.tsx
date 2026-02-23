"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import GradientBlinds from "@/components/GradientBlinds";
import SpotlightCard from "@/components/SpotlightCard";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { ArrowRight, Settings2, Activity, Zap } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-[#060010] text-white">
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Section 1: Hero (ReactBits style) */}
      <section className="relative h-[100vh] w-full items-center justify-center overflow-hidden border-b border-white/10">
        <Navbar onGetAccessClick={() => setIsModalOpen(true)} />
        
        {/* 
          Using the official React Bits GradientBlinds component.
          Colors matching brand: Velankani Blue (#234090) and Clear Teal (#65b5b3)
        */}
        <div className="absolute inset-0">
          <GradientBlinds 
            gradientColors={["#65b5b3", "#234090"]} 
            angle={20}
            noise={0.3}
            blindCount={16}
            blindMinWidth={60}
            mouseDampening={0.15}
            spotlightRadius={0.7}
            spotlightSoftness={1}
            spotlightOpacity={1}
          />
        </div>
        
        {/* Content overlay matching the clean React Bits aesthetic */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center pointer-events-none">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 rounded-full bg-clear-teal"></span>
            Built for Clean Air.
          </div>
          
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl break-words text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            High-performance air filtration systems.
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl font-light">
             Launching soon.
          </p>
          
          <div className="mt-10 pointer-events-auto">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#234090] to-clear-teal px-8 py-3.5 font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(101,181,179,0.3)] hover:shadow-[0_0_60px_rgba(101,181,179,0.5)]"
            >
               Get Early Access <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: Features */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-5xl tracking-tight">In Development.</h2>
            <p className="mt-4 text-white/50 max-w-2xl mx-auto">
              Air filtration systems designed for critical Indian facilities — where uptime, compliance, and performance cannot be compromised.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <SpotlightCard>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#65b5b3]/10 text-[#65b5b3]">
                <Settings2 size={24} />
              </div>
              <h3 className="mt-6 text-xl font-bold">Less Filter Replacement</h3>
              <p className="mt-2 text-white/50">
                HEPA & Pre-filters engineered for Indian pollution levels, reducing maintenance downtime by 30%.
              </p>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(35, 64, 144, 0.15)">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#234090]/10 text-[#234090]">
                <Activity size={24} />
              </div>
              <h3 className="mt-6 text-xl font-bold">Smart Controls</h3>
              <p className="mt-2 text-white/50">
                Real-time AQI monitoring with automated airflow adjustment.
              </p>
            </SpotlightCard>

            <SpotlightCard>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#234090]/20 to-[#65b5b3]/20 text-white">
                <Zap size={24} className="text-[#65b5b3]" />
              </div>
              <h3 className="mt-6 text-xl font-bold">Plug & Play Integration</h3>
              <p className="mt-2 text-white/50">
                Retrofit-ready modules for existing HVAC systems.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Section 3: Coming Soon */}
      <section className="flex flex-col items-center justify-center py-[60px] text-center border-t border-white/5">
        <div className="space-y-4 relative w-full overflow-hidden flex justify-center">
          <h2 className="text-[12vw] font-black uppercase tracking-tighter opacity-10 leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#234090] to-clear-teal select-none">
            COMING SOON
          </h2>
          <p className="mt-12 text-sm text-white/30 absolute bottom-0">
            © 2026 Prysm Infrastructure Group. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
