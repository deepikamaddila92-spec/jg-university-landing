"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Cpu, BarChart3, Palette, FlaskConical, Code2, Music,
  ArrowUpRight, Users,
} from "lucide-react";
import { programs } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Cpu, BarChart3, Palette, FlaskConical, Code2, Music,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="programs" ref={ref} className="relative py-32 overflow-hidden" aria-labelledby="programs-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-slate-50 to-[#F8FAFC]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-100/30 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label text-blue-600 justify-center mb-4 block"
          >
            <span className="w-8 h-px bg-blue-600" />
            Academic Programs
            <span className="w-8 h-px bg-blue-600" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-slate-900 leading-tight"
          >
            Find Your{" "}
            <span className="gradient-text">Perfect Program</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-body text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Choose from over 100 undergraduate, postgraduate, and doctoral programs
            spanning six schools of academic excellence.
          </motion.p>
        </div>

        {/* Program grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, i) => {
            const Icon = iconMap[prog.icon];
            return (
              <motion.div
                key={prog.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden card-shine cursor-pointer"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${prog.color}`} />

                <div className="p-7">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${prog.color} flex items-center justify-center shadow-lg`}
                    >
                      {Icon && <Icon className="w-7 h-7 text-white" />}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold font-body bg-gradient-to-r ${prog.color} text-white`}
                      >
                        {prog.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & desc */}
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {prog.title}
                  </h3>
                  <p className="font-body text-sm text-slate-500 leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Users className="w-4 h-4" />
                      <span className="font-body text-sm font-medium">{prog.students} students</span>
                    </div>
                    <div
                      className={`w-9 h-9 rounded-xl bg-gradient-to-br ${prog.color} flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 shadow-md`}
                    >
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${prog.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-blue-600 text-blue-600 font-semibold font-body hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white"
          >
            View All 100+ Programs
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
