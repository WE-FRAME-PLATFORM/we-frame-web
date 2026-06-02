import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        foreground: '#ffffff',
        primary: '#ff1f3d',
        secondary: '#0f1629',
        accent: '#ff4d6a',
        muted: '#6b7280',
        card: '#0a0f1f',
        'card-hover': '#101830',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(255, 31, 61, 0.3)',
        'glow-md': '0 0 30px rgba(255, 31, 61, 0.4)',
        'glow-lg': '0 0 50px rgba(255, 31, 61, 0.5)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 31, 61, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(5, 8, 22, 0.95) 0%, rgba(15, 22, 41, 0.8) 50%, transparent 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
