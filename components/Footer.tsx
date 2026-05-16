"use client";

import { motion } from "framer-motion";
import {
  GraduationCap, MapPin, Phone, Mail, Clock,
  Facebook, Twitter, Instagram, Linkedin, Youtube,
} from "lucide-react";
import { footerLinks } from "@/lib/data";

const socials = [
  { Icon: Facebook,  href: "#", label: "Facebook" },
  { Icon: Twitter,   href: "#", label: "Twitter" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin,  href: "#", label: "LinkedIn" },
  { Icon: Youtube,   href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 overflow-hidden">
      {/* Top decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-blue-600/10 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg">JG University</div>
                <div className="text-blue-400 text-[10px] font-body font-medium tracking-widest uppercase">Excellence in Education</div>
              </div>
            </div>
            <p className="font-body text-sm text-slate-400 leading-relaxed mb-6">
              Empowering the next generation of leaders, innovators, and change-makers through world-class education since 1998.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-slate-400 hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-5">Programs</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.programs.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-slate-400 hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-slate-400 leading-relaxed">{footerLinks.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`tel:${footerLinks.contact.phone}`} className="font-body text-sm text-slate-400 hover:text-white transition-colors">
                  {footerLinks.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${footerLinks.contact.email}`} className="font-body text-sm text-slate-400 hover:text-white transition-colors">
                  {footerLinks.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="font-body text-sm text-slate-400">{footerLinks.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditation bar */}
        <div className="py-6 border-t border-white/5">
          <div className="flex flex-wrap justify-center gap-6">
            {["NAAC A+", "NBA", "UGC", "AICTE", "NIRF Top 100"].map((badge) => (
              <span
                key={badge}
                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-semibold font-body tracking-wide"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="font-body text-xs text-slate-500">
            © {new Date().getFullYear()} JG University. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((l) => (
              <a key={l} href="#" className="font-body text-xs text-slate-500 hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
