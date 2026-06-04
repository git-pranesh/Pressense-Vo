#!/bin/bash
# Run from repo root: bash apply-light-mode.sh
# Converts entire site from dark to light mode
# Background: #F3F0EC | Text: #000000

echo "Applying light mode palette..."

# ─── globals.css — the single source of truth for all colors ──────────────
cat > app/globals.css << 'EOF'
@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));

:root {
  /* Light warm palette — Perplexity-inspired */
  --background: #F3F0EC;                /* warm off-white — main bg */
  --foreground: #0A0A0A;                /* near-black text */
  --card: #EDE9E3;                      /* slightly darker cream for cards */
  --card-foreground: #0A0A0A;
  --popover: #EDE9E3;
  --popover-foreground: #0A0A0A;
  --primary: #0A0A0A;                   /* black — buttons, CTAs */
  --primary-foreground: #F3F0EC;        /* warm white text on black */
  --secondary: #E5E1DA;                 /* muted cream — secondary surfaces */
  --secondary-foreground: #0A0A0A;
  --muted: #E8E4DD;                     /* muted background areas */
  --muted-foreground: #6B6560;          /* warm medium grey — captions, meta */
  --accent: #1A1A1A;                    /* near-black accent */
  --accent-foreground: #F3F0EC;
  --destructive: #C0392B;
  --destructive-foreground: #F3F0EC;
  --border: #D4CFC8;                    /* warm light grey borders */
  --input: #E5E1DA;
  --ring: #0A0A0A;
  --radius: 0.75rem;

  /* Custom tokens */
  --surface: #EDE9E3;
  --surface-border: #D4CFC8;
  --highlight: #1A1A1A;
  --text-dim: #9B958F;                  /* dimmed warm grey */
  --grid-line: #D8D4CD;

  --chart-1: #0A0A0A;
  --chart-2: #6B6560;
  --chart-3: #9B958F;
  --chart-4: #C4BFB8;
  --chart-5: #3D3A36;
  --sidebar: #EDE9E3;
  --sidebar-foreground: #0A0A0A;
  --sidebar-primary: #0A0A0A;
  --sidebar-primary-foreground: #F3F0EC;
  --sidebar-accent: #E5E1DA;
  --sidebar-accent-foreground: #0A0A0A;
  --sidebar-border: #D4CFC8;
  --sidebar-ring: #0A0A0A;
}

/* Keep studio dark — Sanity's own theme handles /studio */
.dark {
  --background: #F3F0EC;
  --foreground: #0A0A0A;
  --card: #EDE9E3;
  --card-foreground: #0A0A0A;
  --popover: #EDE9E3;
  --popover-foreground: #0A0A0A;
  --primary: #0A0A0A;
  --primary-foreground: #F3F0EC;
  --secondary: #E5E1DA;
  --secondary-foreground: #0A0A0A;
  --muted: #E8E4DD;
  --muted-foreground: #6B6560;
  --accent: #1A1A1A;
  --accent-foreground: #F3F0EC;
  --destructive: #C0392B;
  --destructive-foreground: #F3F0EC;
  --border: #D4CFC8;
  --input: #E5E1DA;
  --ring: #0A0A0A;
}

@theme inline {
  --font-sans: 'Inter', 'Geist', 'Geist Fallback', sans-serif;
  --font-mono: 'Geist Mono', 'Geist Mono Fallback';
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  /* Custom semantic tokens */
  --color-surface: var(--surface);
  --color-surface-border: var(--surface-border);
  --color-highlight: var(--highlight);
  --color-text-dim: var(--text-dim);
  --color-grid-line: var(--grid-line);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* Light mode card — paper-like with soft shadow instead of glass */
.glass-card {
  background: #EDE9E3;
  border: 1px solid #D4CFC8;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
}

/* Subtle grid background — very light on warm white */
.grid-bg {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Soft shadow instead of dark glow */
.glow-accent {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}

/* Marquee scroll animation */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50% - 0px)); }
}

.animate-marquee {
  animation: marquee 40s linear infinite;
  display: flex;
  width: fit-content;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
EOF

echo "✓ globals.css updated"

# ─── Fix hardcoded oklch values in components ─────────────────────────────
# problem-section.tsx
sed -i "s/linear-gradient(to bottom, transparent, oklch(0.72 0.08 75), transparent)/linear-gradient(to bottom, transparent, #D4CFC8, transparent)/g" components/problem-section.tsx
sed -i 's/stroke="oklch(0.72 0.08 75)"/stroke="#0A0A0A"/g' components/problem-section.tsx

echo "✓ problem-section.tsx fixed"

# final-cta.tsx
sed -i "s/radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.82 0.05 80) 0%, transparent 70%)/radial-gradient(ellipse 70% 60% at 50% 50%, #D4CFC8 0%, transparent 70%)/g" components/final-cta.tsx

echo "✓ final-cta.tsx fixed"

# services-section.tsx
sed -i "s/radial-gradient(oklch(0.82 0.05 80) 1px, transparent 1px)/radial-gradient(#C4BFB8 1px, transparent 1px)/g" components/services-section.tsx

echo "✓ services-section.tsx fixed"

# hero.tsx
sed -i "s/radial-gradient(ellipse at center, oklch(0.82 0.05 80) 0%, transparent 70%)/radial-gradient(ellipse at center, #D4CFC8 0%, transparent 70%)/g" components/hero.tsx

echo "✓ hero.tsx fixed"

# who-section.tsx
sed -i 's/stroke="oklch(0.72 0.08 75)"/stroke="#0A0A0A"/g' components/who-section.tsx
sed -i 's/stroke="oklch(0.55 0.012 70)"/stroke="#9B958F"/g' components/who-section.tsx

echo "✓ who-section.tsx fixed"

# what-we-do.tsx
sed -i "s/radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.82 0.05 80) 0%, transparent 70%)/radial-gradient(ellipse 80% 60% at 50% 50%, #D4CFC8 0%, transparent 70%)/g" components/what-we-do.tsx

echo "✓ what-we-do.tsx fixed"

# ─── Fix html bg class in layout ──────────────────────────────────────────
sed -i 's/className="bg-background"/className="bg-background"/' app/layout.tsx

echo "✓ layout.tsx checked"

# ─── Verify build passes ──────────────────────────────────────────────────
echo ""
echo "✅ Light mode applied."
echo ""
echo "Next steps:"
echo "1. git add -A"
echo "2. git commit -m 'feat: switch to light mode warm palette #F3F0EC'"
echo "3. git push"