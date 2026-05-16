# JG University — Premium Landing Page

A modern, visually stunning university landing page built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start

### 1. Create a new Next.js project (or use these files directly)
```bash
npx create-next-app@latest jg-university --typescript --tailwind --app --no-src-dir --import-alias "@/*"
cd jg-university
```

### 2. Install extra dependencies
```bash
npm install framer-motion lucide-react
```

### 3. Copy project files
Replace/add all files from this archive into your project root.

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. 🎉

---

## 📁 Project Structure

```
jg-university/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles, utilities, animations
├── components/
│   ├── Navbar.tsx          # Sticky navbar with scroll effect & mobile menu
│   ├── Hero.tsx            # Hero with mesh gradient & floating stat cards
│   ├── About.tsx           # Two-column about with stats
│   ├── Programs.tsx        # 6-program grid with hover animations
│   ├── Features.tsx        # Dark "Why Choose Us" section (6 cards)
│   ├── Testimonials.tsx    # Desktop grid + mobile carousel
│   ├── CTA.tsx             # Gradient call-to-action section
│   └── Footer.tsx          # Full footer with links & socials
├── lib/
│   └── data.ts             # All static content / constants
├── tailwind.config.ts      # Extended Tailwind config
├── next.config.ts          # Next.js config
├── tsconfig.json           # TypeScript config
└── package.json
```

---

## 🎨 Design Decisions

| Feature | Implementation |
|---|---|
| Typography | Playfair Display (headings) + DM Sans (body) |
| Color Palette | Blue #2563EB · Violet #7C3AED · Cyan #06B6D4 |
| Hero | Dark mesh-gradient background with floating glassmorphism cards |
| Cards | Glassmorphism + gradient accents + shine-on-hover effect |
| Animations | Framer Motion stagger reveals, scroll-triggered, floating orbs |
| Responsive | Mobile-first with hamburger menu & testimonial carousel |
| Fonts | Google Fonts (Playfair Display, DM Sans) via `<head>` preload |

---

## 🔧 Customization

- **Content**: Edit `lib/data.ts` to update all text, stats, programs, and testimonials
- **Colors**: Change CSS variables in `app/globals.css` under `:root`
- **Fonts**: Swap the Google Fonts link in `app/layout.tsx`
- **Sections**: Add/remove section components in `app/page.tsx`

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| next | 15.x | Framework |
| react | 19.x | UI library |
| framer-motion | 12.x | Animations |
| lucide-react | 0.511.x | Icons |
| tailwindcss | 3.x | Styling |

---

Built as an internship assignment frontend project. All content is placeholder/fictional for demonstration purposes.
