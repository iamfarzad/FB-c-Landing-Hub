
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/registry/**/*.{js,ts,jsx,tsx,mdx}", // Added registry for Magic UI components
    ],
    theme: {
        container: { // Added container centering and padding
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.5rem',
                lg: '2rem',
                xl: '3rem',
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
            },
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-geist-sans)'],
                mono: ['var(--font-geist-mono)'],
                // If Inconsolata is intended as primary, it should be here:
                // e.g., sans: ['var(--font-inconsolata)', 'var(--font-geist-sans)'],
            },
            colors: {
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)",
                },
                secondary: {
                    DEFAULT: "var(--secondary)",
                    foreground: "var(--secondary-foreground)",
                },
                destructive: {
                    DEFAULT: "var(--destructive)",
                    foreground: "var(--destructive-foreground)",
                },
                muted: {
                    DEFAULT: "var(--muted)",
                    foreground: "var(--muted-foreground)",
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    foreground: "var(--accent-foreground)",
                },
                popover: {
                    DEFAULT: "var(--popover)",
                    foreground: "var(--popover-foreground)",
                },
                card: {
                    DEFAULT: "var(--card)",
                    foreground: "var(--card-foreground)",
                },
                'brand-orange': 'var(--brand-orange)',
                'brand-orange-deep': 'var(--brand-orange-deep)',
                'orb-point-color': 'var(--orb-point-color)',
                'orb-ring-color': 'var(--orb-ring-color)',
                chart: {
                  '1': 'var(--chart-1)',
                  '2': 'var(--chart-2)',
                  '3': 'var(--chart-3)',
                  '4': 'var(--chart-4)',
                  '5': 'var(--chart-5)'
                },
                sidebar: {
                  DEFAULT: 'var(--sidebar-background)',
                  foreground: 'var(--sidebar-foreground)',
                  primary: 'var(--sidebar-primary)',
                  'primary-foreground': 'var(--sidebar-primary-foreground)',
                  accent: 'var(--sidebar-accent)',
                  'accent-foreground': 'var(--sidebar-accent-foreground)',
                  border: 'var(--sidebar-border)',
                  ring: 'var(--sidebar-ring)'
                }
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fadeIn": {
                    from: { opacity: "0", transform: "translateY(20px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                "scaleIn": {
                    from: { opacity: "0", transform: "scale(0.9)" },
                    to: { opacity: "1", transform: "scale(1)" },
                },
                "spin": { // Added spin keyframe
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                },
                "subtle-bounce": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-4px)" },
                },
                "orb-pulse": {
                  "0%, 100%": { transform: "scale(1)" },
                  "50%": { transform: "scale(1.08)" },
                },
                "orb-glow": {
                  "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
                  "50%": { opacity: "0.8", transform: "scale(1.1)" },
                },
                "orb-wave": {
                  "0%": { transform: "scale(1)", opacity: "0.3" },
                  "100%": { transform: "scale(1.6)", opacity: "0" },
                },
                "float": {
                  "0%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-10px)" }, // Reduced float intensity
                  "100%": { transform: "translateY(0px)" },
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fadeIn": "fadeIn 0.6s ease-out forwards",
                "fadeInUp": "fadeIn 0.7s ease-out forwards", // Re-added for SectionWrapper
                "scaleIn": "scaleIn 0.8s ease-out forwards",
                "spin-slow": "spin 10s linear infinite", // Added spin-slow
                "subtle-bounce": "subtle-bounce 2s ease-in-out infinite",
                "orb-pulse": "orb-pulse 4s ease-in-out infinite",
                "orb-glow": "orb-glow 6s ease-in-out infinite",
                "orb-wave": "orb-wave 8s linear infinite",
                "float": "float 6s ease-in-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
