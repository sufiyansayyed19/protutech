"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Zap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const update = () => setIsSmallScreen(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Student-Focused Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex w-fit items-center rounded-full border border-blue-200 bg-white px-3 py-1 text-sm font-medium text-blue-800 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              Verified for Final Year & Mini Projects
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl font-space">
              Your Engineering Project, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                DONE & READY.
              </span>
            </h1>

            <p className="text-lg leading-8 text-muted max-w-lg">
              Premium hardware projects for <strong>EEE, ECE, & IoT</strong> students. 
              Get the complete kit: Working Prototype + Source Code + Project Report + Explanation.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link
                href="/#projects"
                className="rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:scale-105 flex items-center gap-2"
              >
                Browse Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#contact"
                className="rounded-xl px-8 py-4 text-sm font-semibold text-foreground border border-gray-200 bg-white hover:bg-gray-50 transition-all shadow-sm flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-gray-500" />
                Request Custom
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-col gap-2 pt-2 text-xs text-gray-500 font-medium sm:flex-row sm:gap-6 sm:text-sm">
              <div className="flex items-center gap-1 whitespace-nowrap">✅ 100% Output Guaranteed</div>
              <div className="flex items-center gap-1 whitespace-nowrap">✅ Full Guidance</div>
            </div>
          </motion.div>

          {/* Right Side: "Hardware" Monitor Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:h-[500px] flex items-center justify-center"
          >
            {/* Blue Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-200/50 rounded-full blur-3xl"></div>
            
            {/* Main Card */}
            <div className="relative z-10 w-full max-w-md aspect-square bg-white border border-gray-100 rounded-3xl shadow-2xl shadow-blue-900/10 p-8 flex flex-col justify-between">
              
              {/* Header: Looks like a multimeter or dashboard */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                   <div className="p-2 bg-blue-50 rounded-lg">
                     <Zap className="text-blue-600 w-5 h-5"/>
                   </div>
                   <span className="font-bold text-gray-700">IoT Dashboard</span>
                </div>
                <div className="flex gap-1">
                   <span className="w-2 h-2 rounded-full bg-gray-200"></span>
                   <span className="w-2 h-2 rounded-full bg-gray-200"></span>
                </div>
              </div>

              {/* Data Visualization (Electrical Style) */}
              <div className="space-y-4 font-mono text-sm">
                
                {/* Voltage Block */}
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-gray-500">Input Voltage</span>
                  <span className="text-blue-600 font-bold">12.4 V</span>
                </div>

                {/* Current Block */}
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-gray-500">Current Load</span>
                  <span className="text-orange-500 font-bold">2.1 A</span>
                </div>

                {/* Status Block */}
                 <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 mt-2">
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-800 text-xs font-bold uppercase">Microcontroller Status</span>
                    <span className="text-green-600 text-xs font-bold">RUNNING</span>
                  </div>
                  <div className="w-full bg-blue-200 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-blue-500 h-full rounded-full"
                      animate={{ width: ["40%", "70%", "50%", "90%"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 flex justify-between items-center pt-6 border-t border-gray-100">
                <div className="text-xs text-gray-400">Project ID: #ECE-2025</div>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-gray-700">LIVE DATA</span>
                </div>
              </div>
            </div>

            {/* Floating Badge: "Documentation Included" */}
            <motion.div 
              animate={{ y: [0, isSmallScreen ? -16 : -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-10 right-4 z-20 sm:-top-4 sm:-right-4 bg-white p-3 rounded-xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center gap-3"
            >
              <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                <BookOpen size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-800">Report + PPT</span>
                <span className="text-[10px] text-gray-500">Included</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}