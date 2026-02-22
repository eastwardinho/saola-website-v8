import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-saola-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/logos/saola-wordmark-white.png"
              alt="Saola"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              Vietnam&apos;s first Interior Design and Lighting retailer. 
              Designed and Made in Vietnam, for Vietnam.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-caps uppercase text-white/50 mb-6">
              Explore
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/our-story" className="text-sm text-white/80 hover:text-saola-coral transition-colors">
                Our Story
              </Link>
              <Link href="/collections" className="text-sm text-white/80 hover:text-saola-coral transition-colors">
                Collections
              </Link>
              <Link href="/coming-soon" className="text-sm text-white/80 hover:text-saola-coral transition-colors">
                Coming Soon
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-caps uppercase text-white/50 mb-6">
              Get in Touch
            </h4>
            <p className="text-sm text-white/80">
              Ho Chi Minh City, Vietnam
            </p>
            <p className="text-sm text-white/80 mt-2">
              hello@saola.vn
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40 text-center">
            © {new Date().getFullYear()} Saola. All rights reserved. Find Your Saola Spirit.
          </p>
        </div>
      </div>
    </footer>
  );
}
