"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Award, Lightbulb } from "lucide-react";
import { aboutStats } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const values = [
  "NAAC 'A+' Accredited Institution",
  "Ranked in Top 100 by NIRF",
  "ISO 9001:2015 Certified",
  "NBA Accredited Programs",
  "AICTE & UGC Approved",
  "30+ International Collaborations",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 bg-[#F8FAFC] overflow-hidden" aria-labelledby="about-heading">
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-100/40 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — Visual */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Main card */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 p-10 shadow-[0_32px_80px_rgba(37,99,235,0.3)]"
            >
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold font-display text-lg">Our Mission</div>
                    <div className="text-blue-200 text-sm font-body">Since 1998</div>
                  </div>
                </div>
                <p className="text-white/90 font-body text-lg leading-relaxed mb-8">
                  &ldquo;To nurture critical thinkers, innovators, and ethical leaders
                  who contribute meaningfully to society and drive global progress.&rdquo;
                </p>
                <div className="flex flex-col gap-3">
                  {values.slice(0, 4).map((val) => (
                    <div key={val} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                      <span className="text-white/80 font-body text-sm">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Vision card — floating */}
            <motion.div
              variants={fadeUp}
              className="absolute -bottom-8 -right-8 max-w-[240px] bg-white rounded-2xl shadow-2xl p-5 border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <span className="font-display font-bold text-slate-800 text-sm">Our Vision</span>
              </div>
              <p className="text-slate-600 font-body text-xs leading-relaxed">
                To be a globally recognized research university fostering innovation, inclusivity, and societal impact.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="mt-16 grid grid-cols-2 gap-4"
            >
              {aboutStats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="font-display text-3xl font-bold gradient-text mb-1">{s.value}</div>
                  <div className="font-body text-sm text-slate-500">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeUp}>
              <span className="section-label text-blue-600">
                <span className="w-8 h-px bg-blue-600" />
                About JG University
              </span>
            </motion.div>

            <motion.h2
              id="about-heading"
              variants={fadeUp}
              className="mt-4 font-display text-4xl sm:text-5xl font-bold text-slate-900 leading-tight"
            >
              A Legacy of{" "}
              <span className="gradient-text">Academic Excellence</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 font-body text-lg text-slate-600 leading-relaxed"
            >
              Founded in 1998, JG University has grown from a single-faculty institution
              into a comprehensive university spanning six schools of study. Accredited
              NAAC A+ and consistently ranked among India&apos;s top private universities,
              we combine classical academic values with forward-looking curriculum design.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 font-body text-lg text-slate-600 leading-relaxed"
            >
              Our pedagogy centers on experiential learning — integrating live industry
              projects, research fellowships, entrepreneurship cells, and global exchange
              programs. We believe education is not just preparation for a career; it is
              preparation for life.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3">
              {values.map((val) => (
                <div key={val} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-body text-slate-700 text-sm group-hover:text-slate-900 transition-colors duration-300">
                    {val}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <a
                href="#programs"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold font-body shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 focus:shadow-blue-500/40 focus:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white"
              >
                Discover Our Programs
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
