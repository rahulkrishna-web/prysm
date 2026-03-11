"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 1. Collect client-side metadata
      const clientMetadata = {
        userAgent: navigator.userAgent,
        platform: (navigator as any).userAgentData?.platform || navigator.platform,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
      };

      // 2. Fetch IP and Location metadata (using free ipapi.co as an example)
      let geoMetadata = { ip: "N/A", location: "N/A" };
      try {
        const geoResponse = await fetch("https://ipapi.co/json/");
        if (geoResponse.ok) {
          const geoData = await geoResponse.json();
          geoMetadata = {
            ip: geoData.ip,
            location: `${geoData.city}, ${geoData.region}, ${geoData.country_name}`
          };
        }
      } catch (geoError) {
        console.warn("Failed to fetch geo metadata:", geoError);
      }

      // 3. Prepare full payload
      const payload = {
        ...formData,
        metadata: {
          ...clientMetadata,
          ...geoMetadata
        }
      };

      // 4. Submit to Google Sheets
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || "";
      
      if (!scriptUrl) {
        console.warn("Google Sheets URL not found. Falling back to simulation.");
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Simulated payload:", payload);
      } else {
        // Using 'no-cors' mode is the only reliable way to POST to Google Apps Script from a browser
        // Limitations: We cannot read the response, but the data will be sent.
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain", // Use text/plain to avoid CORS preflight
          },
          body: JSON.stringify(payload),
        });
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: "", email: "", company: "", industry: "" });
      }, 5000);
      
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#65b5b3]/20 text-[#65b5b3]">
          <svg
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-2xl font-bold text-white">Request Received</h4>
        <p className="mt-4 text-lg text-white/60">
          Thank you for your interest. Our team will be in touch shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/20 transition-all focus:border-[#65b5b3]/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[#65b5b3]/50"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/20 transition-all focus:border-[#65b5b3]/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[#65b5b3]/50"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-white/80">
          Company Name *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          value={formData.company}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/20 transition-all focus:border-[#65b5b3]/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[#65b5b3]/50"
          placeholder="Acme Corp"
        />
      </div>

      <div>
        <label htmlFor="industry" className="mb-2 block text-sm font-medium text-white/80">
          Industry / Application <span className="text-white/40 font-normal">(Optional)</span>
        </label>
        <input
          type="text"
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/20 transition-all focus:border-[#65b5b3]/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[#65b5b3]/50"
          placeholder="e.g. Data Center, Healthcare"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-gradient-to-r from-white to-white/90 py-4 font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 md:text-lg"
      >
        {isSubmitting ? "Submitting..." : "Get Early Access"}
      </button>
      
      <p className="text-center text-xs text-white/30">
        By submitting, you agree to our privacy policy and to receive updates from Prysm.
      </p>
    </form>
  );
}
