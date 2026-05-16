"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="cta-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative rounded-[2.5rem] overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-purple-700 animate-gradient-shift" />
          <div className="absolute inset-0 bg-[radial-gradient(at_30%_50%,rgba(6,182,212,0.3)_0,transparent_60%),radial-gradient(at_80%_20%,rgba(124,58,237,0.4)_0,transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-cyan-400/20 blur-2xl" />

          {/* Content */}
          <div className="relative z-10 px-8 py-20 sm:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white text-sm font-medium font-body mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
              Limited Seats Available — 2025–26 Batch
            </motion.div>

            <motion.h2
              id="cta-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Ready to Begin Your
              <br />
              <span className="text-cyan-300">Academic Journey?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-body text-lg text-white/75 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Take the first step towards a transformative education. Our admissions team is
              ready to guide you through every step of the application process.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                whileFocus={{ scale: 1.02 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-blue-600 font-bold font-body shadow-2xl hover:shadow-white/30 focus:shadow-white/30 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                whileFocus={{ scale: 1.02 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/15 border-2 border-white/30 text-white font-semibold font-body hover:bg-white/25 hover:border-white/50 focus:bg-white/25 focus:border-white/50 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                <Phone className="w-4 h-4" />
                Contact Admissions
              </motion.a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-14 flex flex-wrap justify-center gap-8 text-white/60 font-body text-sm"
            >
              {[
                "No Application Fee",
                "Quick Admission Decision",
                "Scholarship Opportunities",
                "24×7 Helpdesk Support",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
