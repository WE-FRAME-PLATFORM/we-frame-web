'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <div>
                <p className="font-bold text-white">WeFrame</p>
                <p className="text-xs text-muted">Watch Better. Together.</p>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Your ultimate destination for streaming movies and watching together with friends in real-time.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted hover:text-primary transition-smooth text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted hover:text-primary transition-smooth text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted hover:text-primary transition-smooth text-sm">
                  Download
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted hover:text-primary transition-smooth text-sm">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted hover:text-primary transition-smooth text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted hover:text-primary transition-smooth text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted hover:text-primary transition-smooth text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted hover:text-primary transition-smooth text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted hover:text-primary transition-smooth text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted hover:text-primary transition-smooth text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted hover:text-primary transition-smooth text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted hover:text-primary transition-smooth text-sm">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-muted text-sm">
            © 2024 WeFrame. All rights reserved. Built with passion for cinema lovers.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-muted hover:text-primary hover:border-primary transition-smooth"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-muted hover:text-primary hover:border-primary transition-smooth"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 002.856-3.51 10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-muted hover:text-primary hover:border-primary transition-smooth"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16.413h-2.465V9.169H9.998V6.25h-2.465v1.121C7.533 6.75 6.323 6.25 5.549 6.25c-1.9 0-3.449 1.688-3.449 3.769 0 2.080 1.549 3.769 3.449 3.769.774 0 1.984-.5 2.984-1.121v1.855zm8 0h-2.465V9.169h2.465v7.244zm0-9.244h-2.465V5.75h2.465v1.419zm2.465 9.244h-2.465V9.169h2.465v7.244zm0-9.244h-2.465V5.75h2.465v1.419z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-primary/10 border-t border-primary/20 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-muted">Get the latest movie releases and WeFrame updates delivered to your inbox.</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-white/10 rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-smooth font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
