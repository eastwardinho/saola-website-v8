'use client';

import { useState } from 'react';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would connect to a backend/email service
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-saola-cream via-white to-saola-blush pt-20">
        <div className="text-center px-6 max-w-2xl mx-auto">
          <p className="text-xs tracking-caps uppercase text-saola-coral mb-6">
            Coming Soon
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight-heading text-saola-dark mb-8">
            Something<br />
            <span className="text-saola-orange">Beautiful</span><br />
            is Coming
          </h1>
          <p className="text-lg md:text-xl text-saola-dark/70 leading-relaxed mb-12">
            Our showroom and full product collection are launching soon. 
            Be the first to experience Saola and find your perfect pieces.
          </p>

          {/* Email Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 border border-saola-cream bg-white 
                           text-saola-dark placeholder:text-saola-dark/40
                           focus:outline-none focus:border-saola-coral transition-colors"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Notify Me
                </button>
              </div>
              <p className="text-xs text-saola-dark/50 mt-4">
                We&apos;ll only email you about launches. No spam, ever.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-white p-8 border border-saola-cream">
              <span className="text-4xl mb-4 block">✨</span>
              <h3 className="text-xl font-light text-saola-dark mb-2">
                You&apos;re on the list!
              </h3>
              <p className="text-saola-dark/70">
                We&apos;ll let you know as soon as we launch. 
                Thank you for your interest in Saola.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* What's Coming */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-xs tracking-caps uppercase text-saola-coral mb-4">
              On the Horizon
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight-heading text-saola-dark">
              What to Expect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-saola-coral to-saola-gold rounded-full flex items-center justify-center">
                <span className="text-white text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-light tracking-tight-heading text-saola-dark mb-4">
                Ho Chi Minh Showroom
              </h3>
              <p className="text-saola-dark/70 text-sm leading-relaxed">
                Touch the materials, see the craftsmanship, experience the light. 
                Our flagship showroom is coming to Ho Chi Minh City.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-saola-gold to-yellow-300 rounded-full flex items-center justify-center">
                <span className="text-white text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-light tracking-tight-heading text-saola-dark mb-4">
                Full Product Catalog
              </h3>
              <p className="text-saola-dark/70 text-sm leading-relaxed">
                Over 40 unique lighting designs across four collections. 
                Table lamps, floor lamps, pendants, and mood lighting.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <span className="text-white text-3xl">🛒</span>
              </div>
              <h3 className="text-xl font-light tracking-tight-heading text-saola-dark mb-4">
                Online Shopping
              </h3>
              <p className="text-saola-dark/70 text-sm leading-relaxed">
                Browse, explore, and purchase directly from our website. 
                Delivered to your door anywhere in Vietnam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding bg-saola-dark text-white">
        <div className="container-narrow text-center">
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
            &ldquo;We believe that four walls and a roof are more than a house — 
            it&apos;s your sanctuary. It&apos;s your source of constant inspiration.&rdquo;
          </blockquote>
          <p className="text-xs tracking-caps uppercase text-saola-gold">
            Find Your Saola Spirit
          </p>
        </div>
      </section>
    </>
  );
}
