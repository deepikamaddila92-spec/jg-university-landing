"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play, Users, BookOpen, TrendingUp, Microscope, Star, ChevronDown } from "lucide-react";
import { stats } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Users, BookOpen, TrendingUp, Microscope,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-mesh"
      aria-labelledby="hero-heading"
    >
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=')]" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-600/20 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-cyan-500/15 blur-[80px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={prefersReducedMotion ? "visible" : "visible"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border border-white/20 text-sm font-medium font-body text-white/90">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                Admissions Open 2025–26
                <span className="ml-1.5 px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-semibold tracking-wide">New</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] sm:leading-[1.08] tracking-tight"
            >
              Shape Your{" "}
              <span className="relative inline-block">
                <span className="gradient-text-accent">Future</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                  initial={{ scaleX: 0 }}
                  animate={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 1 }}
                  transition={{ delay: prefersReducedMotion ? 0 : 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
                />
              </span>
              <br className="hidden sm:block" />
              <span className="inline sm:hidden"> </span>
              with World-Class Education
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="font-body text-base sm:text-lg text-white/70 leading-relaxed sm:leading-relaxed max-w-xl"
            >
              JG University blends academic rigor with real-world application. With
              100+ programs, 500+ expert faculty, and a 95% placement rate — your
              transformation starts here.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 sm:gap-4">
              <motion.a
                href="#programs"
                whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                whileFocus={{ scale: 1.02 }}
                className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold font-body shadow-[0_8px_32px_rgba(37,99,235,0.4)] hover:shadow-[0_8px_40px_rgba(37,99,235,0.6)] focus:shadow-[0_8px_40px_rgba(37,99,235,0.6)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Explore Programs
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#cta"
                whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                whileFocus={{ scale: 1.02 }}
                className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl glass border border-white/25 text-white font-semibold font-body hover:border-white/50 focus:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <Play className="w-4 h-4 fill-white" />
                Book a Campus Tour
              </motion.a>
            </motion.div>

            {/* Trust bar */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {["AB", "RK", "SN", "PM"].map((init, i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full border-2.5 border-slate-800 flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: ["#2563EB","#7C3AED","#06B6D4","#059669"][i],
                    }}
                    whileHover={prefersReducedMotion ? {} : { y: -4, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {init}
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-white/60 text-sm font-body">
                  <span className="text-white font-semibold">4.9/5</span> from 2,400+ reviews
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Visual */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            {/* Main visual card */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Rotating ring */}
              <div className={`absolute inset-0 rounded-full border border-white/10 ${prefersReducedMotion ? '' : 'animate-spin-slow'}`} />
              <div className={`absolute inset-8 rounded-full border border-white/5 ${prefersReducedMotion ? '' : 'animate-spin-slow'}`} style={{ animationDirection: "reverse", animationDuration: "30s" }} />

              {/* Central illustration */}
              <motion.div 
                className="absolute inset-12 rounded-3xl glass border border-white/20 flex items-center justify-center overflow-hidden"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-violet-600/20" />
                <div className="relative z-10 text-center p-8">
                  <motion.div 
                    className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-2xl"
                    whileHover={prefersReducedMotion ? {} : { rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BookOpen className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="font-display text-3xl font-bold text-white mb-2">Est. 1998</div>
                  <div className="text-white/60 font-body text-sm">25+ Years of Excellence</div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[
                      { v: "NAAC A+", l: "Accredited" },
                      { v: "NBA", l: "Approved" },
                      { v: "UGC", l: "Recognized" },
                      { v: "NIRF", l: "Top 100" },
                    ].map(({ v, l }) => (
                      <motion.div 
                        key={v} 
                        className="glass rounded-xl p-2.5 border border-white/10"
                        whileHover={prefersReducedMotion ? {} : { y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-white font-bold font-body text-sm">{v}</div>
                        <div className="text-white/50 text-xs font-body">{l}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating stat cards */}
              {stats.map((stat, i) => {
                const Icon = iconMap[stat.icon];
                const positions = [
                  "-top-6 -left-6",
                  "-top-6 -right-6",
                  "-bottom-6 -left-6",
                  "-bottom-6 -right-6",
                ];
                const delays = [0, 1, 2, 3];
                return (
                  <motion.div
                    key={stat.label}
                    className={`absolute ${positions[i]} glass border border-white/20 rounded-2xl p-4 min-w-[120px] shadow-2xl`}
                    animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
                    transition={{ duration: 4, delay: prefersReducedMotion ? 0 : delays[i], repeat: Infinity, ease: "easeInOut" }}
                    whileHover={prefersReducedMotion ? {} : { y: -12, scale: 1.05 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {Icon && <Icon className="w-4 h-4 text-cyan-400" />}
                    </div>
                    <div className="font-display text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/60 text-xs font-body leading-tight">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.8, duration: 0.7 }}
          className="lg:hidden mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
        >
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div 
                key={stat.label} 
                className="glass border border-white/20 rounded-2xl p-4 sm:p-5 text-center"
                whileHover={prefersReducedMotion ? {} : { y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {Icon && <Icon className="w-5 h-5 text-cyan-400 mx-auto mb-2" />}
                <div className="font-display text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-white/60 text-xs font-body leading-tight">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-body font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full text-[#F8FAFC]" fill="currentColor">
          <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" />
        </svg>
      </div>
    </section>
  );
}
