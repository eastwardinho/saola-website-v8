import Link from 'next/link';

const collections = [
  {
    name: 'Colorful Creator',
    tagline: 'Bold, playful, unforgettable',
    description: 'Youthful and playful designs where colors pop. Classic Vietnamese materials get a modern makeover.',
    keywords: ['Daring', 'Retro', 'Playful', 'Happy'],
    color: 'from-pink-300 to-orange-300',
  },
  {
    name: 'Experimental Rebel',
    tagline: 'Not for the faint of heart',
    description: 'Non-conformist, sculptural pieces with premium materials. Statement WOW pieces for the daring.',
    keywords: ['Avant-garde', 'Edgy', 'Punk', 'Experimental'],
    color: 'from-red-400 to-purple-400',
  },
  {
    name: 'Cosmopolitan Expert',
    tagline: 'Refined sustainable design',
    description: 'For those who care about the planet. Vietnamese handicraft heritage brought into the 21st century.',
    keywords: ['Rustic', 'Chic', 'Curated', 'Eco-conscious'],
    color: 'from-green-300 to-teal-300',
  },
  {
    name: 'Pretty & Posh',
    tagline: 'Taste money can\'t buy',
    description: 'Classy designs with luxurious materials. Elegant and simply stunning pieces.',
    keywords: ['Classic', 'Polished', 'Status', 'Modern'],
    color: 'from-amber-200 to-yellow-300',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-saola-cream via-white to-saola-blush">
        <div className="text-center px-6 pt-20">
          <p className="text-xs tracking-caps uppercase text-saola-coral mb-6">
            Designed & Made in Vietnam
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight-heading text-saola-dark mb-8">
            Find Your<br />
            <span className="text-saola-orange">Saola</span> Spirit
          </h1>
          <p className="text-lg md:text-xl text-saola-dark/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Vietnam&apos;s first Interior Design and Lighting retailer. 
            Where your sanctuary becomes a reflection of your inner richness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collections" className="btn-primary">
              Explore Collections
            </Link>
            <Link href="/our-story" className="btn-secondary">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Intro */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <p className="text-xs tracking-caps uppercase text-saola-coral mb-6">
            The Vision
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight-heading text-saola-dark mb-8">
            More Than a House—<br />Your Sanctuary
          </h2>
          <p className="text-lg text-saola-dark/70 leading-relaxed mb-8">
            At Saola, we believe that four walls and a roof are more than a house — 
            it&apos;s your sanctuary. It&apos;s your piece of calm from the outside world. 
            It&apos;s your source of constant inspiration.
          </p>
          <p className="text-xl font-light text-saola-dark italic">
            &ldquo;This is mine. This is me.&rdquo;
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="section-padding bg-saola-cream/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-xs tracking-caps uppercase text-saola-coral mb-4">
              Four Personalities
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight-heading text-saola-dark">
              Find Your Style
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <div 
                key={index}
                className="group bg-white p-8 md:p-12 hover:shadow-xl transition-all duration-500"
              >
                <div className={`w-full h-48 mb-8 bg-gradient-to-br ${collection.color} opacity-60 group-hover:opacity-80 transition-opacity`} />
                <p className="text-xs tracking-caps uppercase text-saola-coral mb-3">
                  Collection {index + 1}
                </p>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight-heading text-saola-dark mb-2">
                  {collection.name}
                </h3>
                <p className="text-sm italic text-saola-dark/60 mb-4">
                  {collection.tagline}
                </p>
                <p className="text-saola-dark/70 mb-6 leading-relaxed">
                  {collection.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {collection.keywords.map((keyword, i) => (
                    <span 
                      key={i}
                      className="text-xs tracking-caps uppercase px-3 py-1 bg-saola-cream/50 text-saola-brown"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/collections" className="btn-primary">
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon - Showroom */}
      <section className="section-padding bg-saola-dark text-white">
        <div className="container-narrow text-center">
          <p className="text-xs tracking-caps uppercase text-saola-gold mb-6">
            Coming Soon
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight-heading mb-8">
            Our Showroom
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-12 max-w-xl mx-auto">
            Experience Saola in person. Touch the materials, see the craftsmanship, 
            and find your perfect piece. Our Ho Chi Minh City showroom is coming soon.
          </p>
          <Link href="/coming-soon" className="btn-secondary">
            Get Notified
          </Link>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section-padding bg-gradient-to-br from-white to-saola-cream/30">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight-heading text-saola-dark mb-6">
            Light Up Your Life
          </h2>
          <p className="text-lg text-saola-dark/70 max-w-xl mx-auto">
            Many of the world&apos;s best interior design products are created in Vietnam, 
            but quickly exported for others to enjoy. Saola exists to change that.
          </p>
        </div>
      </section>
    </>
  );
}
