'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-light tracking-tight-heading text-saola-orange">
              saola
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link 
              href="/our-story" 
              className="text-sm tracking-caps uppercase text-saola-dark hover:text-saola-coral transition-colors"
            >
              Our Story
            </Link>
            <Link 
              href="/collections" 
              className="text-sm tracking-caps uppercase text-saola-dark hover:text-saola-coral transition-colors"
            >
              Collections
            </Link>
            <Link 
              href="/coming-soon" 
              className="btn-primary"
            >
              Coming Soon
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-saola-dark transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-full bg-saola-dark transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-saola-dark transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-saola-cream">
            <div className="flex flex-col space-y-4 pt-6">
              <Link 
                href="/our-story"
                onClick={() => setIsOpen(false)}
                className="text-sm tracking-caps uppercase text-saola-dark"
              >
                Our Story
              </Link>
              <Link 
                href="/collections"
                onClick={() => setIsOpen(false)}
                className="text-sm tracking-caps uppercase text-saola-dark"
              >
                Collections
              </Link>
              <Link 
                href="/coming-soon"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-center"
              >
                Coming Soon
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
