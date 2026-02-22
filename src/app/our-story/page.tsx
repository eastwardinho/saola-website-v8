export default function OurStory() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-saola-cream via-white to-saola-blush pt-20">
        <div className="text-center px-6">
          <p className="text-xs tracking-caps uppercase text-saola-coral mb-6">
            Our Story
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight-heading text-saola-dark mb-8">
            The Asian<br />Unicorn
          </h1>
          <p className="text-lg md:text-xl text-saola-dark/70 max-w-2xl mx-auto leading-relaxed">
            Named after one of the world&apos;s most elusive and extraordinary creatures
          </p>
        </div>
      </section>

      {/* The Saola Animal */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-caps uppercase text-saola-coral mb-4">
                The Legend
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight-heading text-saola-dark mb-6">
                What is a Saola?
              </h2>
              <p className="text-saola-dark/70 leading-relaxed mb-6">
                The Saola is Vietnam&apos;s &ldquo;Asian Unicorn&rdquo; — an elusive species so rare 
                it has never been seen in person by scientists, only captured by camera traps 
                in the dense forests of the Annamite Mountains.
              </p>
              <p className="text-saola-dark/70 leading-relaxed mb-6">
                Discovered in 1992, it is considered one of the most surprising zoological finds 
                of the 20th century. Like the mythical unicorn, the Saola is special, unique, 
                and enigmatic — hiding in plain sight.
              </p>
              <p className="text-saola-dark/70 leading-relaxed">
                Our name pays tribute to this extraordinary Vietnamese creature and embodies 
                our spirit: rare, distinctive, and unmistakably Vietnamese.
              </p>
            </div>
            <div className="bg-gradient-to-br from-saola-cream to-saola-blush aspect-square flex items-center justify-center">
              <div className="text-center p-12">
                <span className="text-8xl text-saola-orange">✦</span>
                <p className="text-sm tracking-caps uppercase text-saola-brown mt-6">
                  The Saola Symbol
                </p>
                <p className="text-xs text-saola-dark/60 mt-2">
                  Inspired by the Saola&apos;s<br />V-shaped horns and star markings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vietnam Heritage */}
      <section className="section-padding bg-saola-dark text-white">
        <div className="container-narrow text-center">
          <p className="text-xs tracking-caps uppercase text-saola-gold mb-6">
            Our Heritage
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight-heading mb-8">
            Made in Vietnam,<br />For Vietnam
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            Many of the world&apos;s best interior design products are created in Vietnam — 
            by skilled artisans using traditional techniques passed down through generations. 
            But these treasures are quickly exported, leaving Vietnamese homes without access 
            to their own craftsmanship.
          </p>
          <p className="text-xl font-light text-white/90 italic">
            Saola exists to change that.
          </p>
        </div>
      </section>

      {/* The Vision */}
      <section className="section-padding bg-gradient-to-br from-white to-saola-cream/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-caps uppercase text-saola-coral mb-4">
                The Vision
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight-heading text-saola-dark mb-6">
                Your Sanctuary,<br />Your Spirit
              </h2>
              <blockquote className="text-xl font-light text-saola-dark/80 italic border-l-2 border-saola-coral pl-6 mb-8">
                &ldquo;At Saola, we believe that four walls and a roof are more than a house — 
                it&apos;s your sanctuary. It&apos;s your piece of calm from the outside world. 
                It&apos;s your source of constant inspiration.&rdquo;
              </blockquote>
              <p className="text-saola-dark/70 leading-relaxed">
                We know the impact of decorating your space in a way that reflects your inner 
                richness in such a way that says &ldquo;This is mine. This is me.&rdquo;
              </p>
            </div>
            <div>
              <p className="text-xs tracking-caps uppercase text-saola-coral mb-4">
                Our Promise
              </p>
              <h3 className="text-2xl font-light tracking-tight-heading text-saola-dark mb-6">
                What We Offer
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-saola-coral text-xl">✦</span>
                  <div>
                    <h4 className="font-medium text-saola-dark mb-1">Educational, Not Elitist</h4>
                    <p className="text-sm text-saola-dark/70">
                      We guide you through design without pretension. Interior design for everyone.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-saola-coral text-xl">✦</span>
                  <div>
                    <h4 className="font-medium text-saola-dark mb-1">British-Vietnamese Fusion</h4>
                    <p className="text-sm text-saola-dark/70">
                      Contemporary design sensibility meets Vietnamese craftsmanship and materials.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-saola-coral text-xl">✦</span>
                  <div>
                    <h4 className="font-medium text-saola-dark mb-1">Your Home Stylist</h4>
                    <p className="text-sm text-saola-dark/70">
                      Like having your own interior design partner, approachable and inspiring.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-saola-coral text-xl">✦</span>
                  <div>
                    <h4 className="font-medium text-saola-dark mb-1">Lighting Experts</h4>
                    <p className="text-sm text-saola-dark/70">
                      High quality, tested, functional lighting that transforms spaces.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Personality */}
      <section className="section-padding bg-saola-cream/30">
        <div className="container-narrow text-center">
          <p className="text-xs tracking-caps uppercase text-saola-coral mb-6">
            Our Spirit
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight-heading text-saola-dark mb-12">
            Who We Are
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-saola-coral to-saola-gold rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="font-medium text-saola-dark mb-2">Energetic</h3>
              <p className="text-xs text-saola-dark/60">Bright & Innovative</p>
            </div>
            <div>
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-saola-gold to-yellow-300 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="font-medium text-saola-dark mb-2">Innovative</h3>
              <p className="text-xs text-saola-dark/60">Endless Possibilities</p>
            </div>
            <div>
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🦁</span>
              </div>
              <h3 className="font-medium text-saola-dark mb-2">Courageous</h3>
              <p className="text-xs text-saola-dark/60">Brave & Empowering</p>
            </div>
            <div>
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="font-medium text-saola-dark mb-2">Inspiring</h3>
              <p className="text-xs text-saola-dark/60">Leader & Charismatic</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
