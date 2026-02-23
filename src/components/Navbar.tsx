"use client";

import React from "react";
import Image from "next/image";

interface NavbarProps {
  onGetAccessClick?: () => void;
}

// Simple SVG Icons to match React Bits
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="12" r="1"></circle>
    <circle cx="15" cy="12" r="1"></circle>
    <path d="M7.81 4.17c2.81-1.35 5.86-1.56 8.38 0 2.5 1.53 4.22 4.96 4.5 8.8.28 3.8-1.4 7.23-3.9 8.76a14.53 14.53 0 0 1-9.58 0c-2.5-1.53-4.18-4.96-3.9-8.76.28-3.84 2-7.27 4.5-8.8Z"></path>
  </svg>
);

export default function Navbar({ onGetAccessClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-3 bg-white/85 backdrop-blur-lg border-b border-white/40 text-black shadow-sm">
      <div className="flex items-center">
        <div className="flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80">
          {/* Using native img for SVG to allow natural responsive scaling (h-full w-auto) */}
          <img
            src="/logo.svg"
            alt="Prysm"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={onGetAccessClick}
          className="ml-2 rounded-lg bg-gradient-to-r from-[#234090] to-[#65b5b3] px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg whitespace-nowrap"
        >
          Get Early Access
        </button>
      </div>
    </nav>
  );
}
