"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap, Handshake, Building2, Briefcase, Globe2, Telescope,
} from "lucide-react";
import { features } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap, Handshake, Building2, Briefcase, Globe2, Telescope,
};

const colorMap: Record<string, { bg: string; text: string; glow: string; border: string }> = {
  blue:    { bg: "bg-blue-50",   text: "text-blue-600",   glow: "bg-blue-400/20",   border: "border-blue-100" },
  violet:  { bg: "bg-violet-50", text: "text-violet-600", glow: "bg-violet-400/20", border: "border-violet-100" },
  cyan:    { bg: "bg-cyan-50",   text: "text-cyan-600",   glow: "bg-cyan-400/20",   border: "border-cyan-100" },
  emerald: { bg: "bg-emerald-50",text: "text-emerald-600",glow: "bg-emerald-400/20",border: "border-emerald-100" },
  orange:  { bg: "bg-orange-50", text: "text-orange-600", glow: "bg-orange-400/20", border: "border-orange-100" },
  rose:    { bg: "bg-rose-50",   text: "text-rose-600",   glow: "bg-rose-400/20",   border: "border-rose-100" },
};

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Dark background with mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(at_30%_20%,rgba(37,99,235,0.2)_0,transparent_60%),radial-gradient(at_70%_80%,rgba(124,58,237,0.15)_0,transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label text-cyan-400 justify-center mb-4 block"
          >
            <span className="w-8 h-px bg-cyan-400" />
            Why Choose JGU
            <span className="w-8 h-px bg-cyan-400" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight"
          >
            Built for Your{" "}
            <span className="gradient-text-accent">Success</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-body text-lg text-white/50 max-w-2xl mx-auto"
          >
            We provide every resource, relationship, and opportunity you need to
            transform ambition into achievement.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = iconMap[feat.icon];
            const colors = colorMap[feat.color];
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
                whileHover={{ y: -4 }}
                className="group relative bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/8 hover:border-white/20 transition-all duration-400 overflow-hidden cursor-default"
              >
                {/* Hover glow */}
                <div className={`absolute -top-10 -left-10 w-32 h-32 rounded-full ${colors.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {Icon && <Icon className={`w-7 h-7 ${colors.text}`} />}
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {feat.title}
                  </h3>
                  <p className="font-body text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                    {feat.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className={`absolute bottom-4 right-4 w-2 h-2 rounded-full ${colors.text.replace("text-", "bg-")} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {[
            { val: "#1", desc: "Ranked in Chhattisgarh" },
            { val: "500+", desc: "Recruiting Companies" },
            { val: "₹18 LPA", desc: "Highest Package Offered" },
            { val: "30+", desc: "International Universities" },
          ].map(({ val, desc }) => (
            <div key={desc} className="group">
              <div className="font-display text-3xl font-bold gradient-text-accent mb-2">{val}</div>
              <div className="font-body text-sm text-white/50">{desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
