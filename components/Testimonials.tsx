"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section id="testimonials" ref={ref} className="relative py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-100/40 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-100/30 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-label text-blue-600 justify-center mb-4 block"
          >
            <span className="w-8 h-px bg-blue-600" />
            Student Stories
            <span className="w-8 h-px bg-blue-600" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-slate-900 leading-tight"
          >
            Voices of Our{" "}
            <span className="gradient-text">Alumni</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 font-body text-lg text-slate-500 max-w-xl mx-auto"
          >
            Real stories from students who chose JG University — and never looked back.
          </motion.p>
        </div>

        {/* Desktop grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="hidden lg:grid grid-cols-4 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 p-6 flex flex-col transition-all duration-400 cursor-default"
            >
              {/* Quote icon */}
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center mb-5`}>
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-sm text-slate-600 leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold font-body flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-display font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="font-body text-xs text-slate-400">{t.course}</div>
                  <div className={`font-body text-xs font-semibold mt-0.5 bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}>
                    {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                className="bg-white rounded-3xl border border-slate-100 shadow-md p-7"
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${testimonials[active].gradient} flex items-center justify-center mb-5`}
                >
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[active].rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="font-body text-slate-600 leading-relaxed mb-6">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[active].gradient} flex items-center justify-center text-white font-bold`}
                  >
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <div className="font-display font-bold text-slate-900">{testimonials[active].name}</div>
                    <div className="font-body text-xs text-slate-400">{testimonials[active].course}</div>
                    <div className={`font-body text-xs font-semibold mt-0.5 bg-gradient-to-r ${testimonials[active].gradient} bg-clip-text text-transparent`}>
                      {testimonials[active].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 focus:bg-blue-600 focus:text-white focus:border-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`View testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-blue-600" : "w-2 bg-slate-300"} focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 focus:bg-blue-600 focus:text-white focus:border-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
