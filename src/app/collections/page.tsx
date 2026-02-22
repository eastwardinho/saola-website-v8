const collections = [
  {
    name: 'Colorful Creator',
    emoji: '🎨',
    tagline: 'Bold, playful, unforgettable',
    description: 'Youthful and playful designs where colors pop. Classic Vietnamese materials get a modern makeover with contrasting colors and geometric shapes that bring joy to any space.',
    keywords: ['Contrasting Color', 'Daring', 'Retro', 'Playful', 'Happy', 'Geometric Shape', 'Bold Pattern'],
    mood: 'For those who aren\'t afraid to express themselves. Your home should make you smile every time you walk through the door.',
    materials: 'Terrazzo, Ceramic, Bamboo with pops of color',
    gradient: 'from-pink-300 via-orange-200 to-yellow-200',
  },
  {
    name: 'Experimental Rebel',
    emoji: '🔥',
    tagline: 'Not for the faint of heart — for the daring and courageous',
    description: 'Non-conformist, sculptural pieces with premium materials. These are statement WOW pieces that challenge conventions and spark conversations.',
    keywords: ['Avant-garde', 'Outside the Box', 'Attitude', 'Experimental Materials', 'Edgy', 'Alternative', 'Punk'],
    mood: 'For the rule-breakers. Those who see their home as a gallery and each piece as a conversation starter.',
    materials: 'Resin, Concrete, Metal Mesh, Ceramic with unexpected glazes',
    gradient: 'from-red-400 via-purple-400 to-indigo-400',
  },
  {
    name: 'Cosmopolitan Expert',
    emoji: '🌿',
    tagline: 'Refined approaches to sustainable materials and design',
    description: 'For those who care about the planet without compromising on style. Vietnamese handicraft heritage brought beautifully into the 21st century.',
    keywords: ['Rustic Luxury', 'Chic', 'Eastern Influence', 'Eclectic', 'Curated', 'Environmentally Conscious', 'Muted Tones'],
    mood: 'For the conscious curator. Someone who appreciates craftsmanship, heritage, and the story behind every piece.',
    materials: 'Wood, Bamboo, Natural weaves, Stone, Linen',
    gradient: 'from-green-300 via-teal-200 to-emerald-200',
  },
  {
    name: 'Pretty & Posh',
    emoji: '✨',
    tagline: 'There are some things money can\'t buy — taste!',
    description: 'Classy designs with luxurious materials. Elegant, refined, and simply stunning pieces that elevate any interior with timeless sophistication.',
    keywords: ['Classic', 'Toned-down Colors', 'Traditional Materials', 'Polished Metal', 'Status', 'Modern'],
    mood: 'For those with an eye for elegance. Refined taste meets Vietnamese craftsmanship in pieces that whisper luxury.',
    materials: 'Marble, Travertine, Ceramic with refined glazes, Polished metals',
    gradient: 'from-amber-200 via-yellow-200 to-orange-100',
  },
];

export default function Collections() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-saola-cream via-white to-saola-blush pt-20">
        <div className="text-center px-6">
          <p className="text-xs tracking-caps uppercase text-saola-coral mb-6">
            Four Personalities
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight-heading text-saola-dark mb-8">
            Our Collections
          </h1>
          <p className="text-lg md:text-xl text-saola-dark/70 max-w-2xl mx-auto leading-relaxed">
            Each collection represents a different spirit. 
            Which one speaks to you?
          </p>
        </div>
      </section>

      {/* Collections */}
      {collections.map((collection, index) => (
        <section 
          key={index}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-saola-cream/20'}`}
        >
          <div className="container-wide">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={`aspect-[4/3] bg-gradient-to-br ${collection.gradient} flex items-center justify-center`}>
                  <span className="text-9xl opacity-60">{collection.emoji}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-xs tracking-caps uppercase text-saola-coral mb-4">
                  Collection {index + 1}
                </p>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight-heading text-saola-dark mb-4">
                  {collection.name}
                </h2>
                <p className="text-lg italic text-saola-dark/60 mb-6">
                  &ldquo;{collection.tagline}&rdquo;
                </p>
                <p className="text-saola-dark/70 leading-relaxed mb-6">
                  {collection.description}
                </p>
                <p className="text-sm text-saola-dark/60 mb-8">
                  {collection.mood}
                </p>

                {/* Materials */}
                <div className="mb-8">
                  <p className="text-xs tracking-caps uppercase text-saola-brown mb-2">
                    Signature Materials
                  </p>
                  <p className="text-sm text-saola-dark/70">
                    {collection.materials}
                  </p>
                </div>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2">
                  {collection.keywords.map((keyword, i) => (
                    <span 
                      key={i}
                      className="text-xs tracking-caps uppercase px-3 py-1.5 bg-saola-cream/50 text-saola-brown"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Design Principles */}
      <section className="section-padding bg-saola-dark text-white">
        <div className="container-narrow text-center">
          <p className="text-xs tracking-caps uppercase text-saola-gold mb-6">
            Our Design Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight-heading mb-12">
            Three Guiding Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-light text-white mb-4">
                Modern Expressionism
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Bold, colorful, energetic. Abstract forms that redefine and challenge. 
                A new wave of Vietnamese design.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-white mb-4">
                Impactful Simplicity
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Opinionated yet curated. Graphic and authentic. 
                Clean lines that create calm.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-white mb-4">
                Vintage Aspiration
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Layered and personal. Tactile textures that invite touch. 
                The joy of discovery and reinvention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-saola-cream to-white">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight-heading text-saola-dark mb-6">
            Products Coming Soon
          </h2>
          <p className="text-lg text-saola-dark/70 max-w-xl mx-auto mb-8">
            Our full product catalog is on its way. Be the first to know when 
            you can start shopping your perfect pieces.
          </p>
          <a href="/coming-soon" className="btn-primary">
            Get Notified
          </a>
        </div>
      </section>
    </>
  );
}
