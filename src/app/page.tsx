"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import GradientBlinds from "@/components/GradientBlinds";
import SpotlightCard from "@/components/SpotlightCard";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import BlurText from "@/components/BlurText";
import { ShieldCheck, Activity, Instagram, Linkedin } from "lucide-react";

function IndianFlagIcon({ className, size = 24 }: { className?: string; size?: number | string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 24"
      width={size}
      height={size}
      className={className}
      fill="none"
    >
      <rect width="36" height="24" rx="4" fill="white" />
      <path d="M0 4C0 1.79086 1.79086 0 4 0H32C34.2091 0 36 1.79086 36 4V8H0V4Z" fill="#FF9933" />
      <path d="M0 16H36V20C36 22.2091 34.2091 24 32 24H4C1.79086 24 0 22.2091 0 20V16Z" fill="#138808" />
      <path d="M0 8H36V16H0V8Z" fill="#FFFFFF" />
      <circle cx="18" cy="12" r="3" fill="none" stroke="#000080" strokeWidth="0.5" />
      <circle cx="18" cy="12" r="0.5" fill="#000080" />
      <g stroke="#000080" strokeWidth="0.25">
        {[...Array(24)].map((_, i) => (
          <line key={i} x1="18" y1="12" x2="18" y2="9" transform={`rotate(${i * 15} 18 12)`} />
        ))}
      </g>
    </svg>
  );
}

export default function Home() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#060010] text-white">
      {/* Section 1: Hero (ReactBits style) */}
      <section className="relative h-[100vh] w-full items-center justify-center overflow-hidden border-b border-white/10">
        <Navbar onGetAccessClick={scrollToWaitlist} />
        
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
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl break-words text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            Where clean air meets pure purpose
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl font-light">
             Innovative, sustainable, and affordable air filtration for every individual and industry across Bharat.
          </p>
        </div>
      </section>

      {/* Section 2: Features */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-5xl tracking-tight">In Development.</h2>
            <p className="mt-4 text-white/50 max-w-2xl mx-auto">
              Air filtration systems designed for critical Indian facilities, where uptime, compliance, and performance cannot be compromised.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <SpotlightCard>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#65b5b3]/10 text-[#65b5b3]">
                <IndianFlagIcon size={24} />
              </div>
              <h3 className="mt-6 text-xl font-bold">Made in India</h3>
              <p className="mt-2 text-white/50">
                Manufactured locally for Indian dust loads, operating conditions, and critical facilities.
              </p>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(35, 64, 144, 0.15)">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#234090]/10 text-[#234090]">
                <ShieldCheck size={24} />
              </div>
              <h3 className="mt-6 text-xl font-bold">Certified Performance</h3>
              <p className="mt-2 text-white/50">
                BIS-certified filters with ISO-compliant in-house testing and documented validation.
              </p>
            </SpotlightCard>

            <SpotlightCard>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#234090]/20 to-[#65b5b3]/20 text-white">
                <Activity size={24} className="text-[#65b5b3]" />
              </div>
              <h3 className="mt-6 text-xl font-bold">Engineered for Uptime</h3>
              <p className="mt-2 text-white/50">
                Optimized for extended service life, energy saving, and cost‑efficient operation.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Section 3: Coming Soon */}
      <section className="flex flex-col items-center justify-center py-[120px] text-center border-t border-white/5">
        <div className="w-full overflow-hidden flex justify-center px-4 md:mb-12">
          <BlurText
            text="COMING SOON"
            animateBy="letters"
            delay={50}
            direction="bottom"
            animationFrom={{ filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={[
              { filter: 'blur(5px)', opacity: 0.4, transform: 'translate3d(0,-10px,0)' },
              { filter: 'blur(0px)', opacity: 0.8, transform: 'translate3d(0,0,0)' }
            ]}
            className="text-4xl sm:text-6xl md:text-[12vw] font-black uppercase tracking-tighter leading-none select-none justify-center"
            spanClassName="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80"
          />
        </div>
      </section>

      {/* Section 4: Waitlist Form */}
      <section id="waitlist" className="relative px-6 py-24 md:px-12 border-t border-white/5 bg-[#080015]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-5xl tracking-tight">Stay Updated</h2>
          </div>
          
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:p-12 backdrop-blur-sm">
            <LeadCaptureForm />
          </div>
        </div>
        
        {/* Subtle decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#65b5b3] opacity-[0.03] blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#234090] opacity-[0.05] blur-[120px] pointer-events-none rounded-full" />
      </section>

      {/* Footer */}
      <footer className="w-full py-12 text-center border-t border-white/5 bg-[#060010]">
        <div className="flex justify-center gap-6 mb-6">
          <a 
            href="https://www.linkedin.com/company/prysmfilters/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="#" 
            className="text-white/30 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
        <p className="text-sm text-white/30">
          © {new Date().getFullYear()} Prysm Filters. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
