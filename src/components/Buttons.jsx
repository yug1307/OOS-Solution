"use client";

const hosts = [
  {
    rank: 1,
    name: "Hostinger",
    imgSrc: "/images/hostinger-logo.png",
    reviews: "70,505",
    tagline: "Scalable hosting solutions for fast websites",
    features: ["LiteSpeed acceleration for WordPress", "24/7 customer support", "30-day money-back guarantee", "Migrate your site for free"],
    score: 9.8,
    badge: "Exceptional",
  },
  {
    rank: 2,
    name: "Bluehost",
    reviews: "45,210",
    tagline: "Trusted hosting recommended by WordPress.org",
    features: ["Free domain for 1st year", "Free SSL certificate", "1-click WordPress install", "24/7 expert support"],
    score: 9.5,
    badge: "Excellent",
  },
  {
    rank: 3,
    name: "SiteGround",   
    reviews: "38,900",
    tagline: "Premium hosting with superior speed & security",
    features: ["Ultra-fast SSD storage", "Free daily backups", "Managed WordPress hosting", "Free CDN included"],
    score: 9.4,
    badge: "Excellent",
  },
  {
    rank: 4,
    name: "Cloudways",   
    reviews: "29,800",
    tagline: "Managed cloud hosting for growing businesses",
    features: ["Choice of 5 cloud providers", "Free SSL & CDN", "Automated backups", "24/7 expert support"],
    score: 9.3,
    badge: "Great",
  },
  {
    rank: 5,
    name: "DreamHost",   
    reviews: "22,450",
    tagline: "Simple, powerful hosting with a 97-day guarantee",
    features: ["97-day money-back guarantee", "Free domain & privacy", "Unlimited bandwidth", "Award-winning support"],
    score: 9.1,
    badge: "Great",
  },
  {
    rank: 6,
    name: "WP Engine",
    reviews: "18,300",
    tagline: "Premium managed WordPress hosting platform",
    features: ["Blazing fast performance", "Daily automated backups", "Free Genesis themes", "Global CDN included"],
    score: 9.0,
    badge: "Great",
  },
  {
    rank: 7,
    name: "GoDaddy",
    reviews: "55,600",
    tagline: "World's largest domain & hosting provider",
    features: ["Free domain for 1 year", "Easy website builder", "99.9% uptime guarantee", "24/7 award-winning support"],
    score: 8.8,
    badge: "Good",
  },
  {
    rank: 8,
    name: "Kinsta",   
    reviews: "12,750",
    tagline: "Enterprise-level managed WordPress hosting",
    features: ["Powered by Google Cloud", "Free SSL & CDN", "Daily backups included", "Staging environment"],
    score: 8.7,
    badge: "Good",
  },
  {
    rank: 9,
    name: "A2 Hosting",    
    reviews: "16,400",
    tagline: "Turbo-powered hosting up to 20x faster",
    features: ["Turbo servers 20x faster", "Free site migration", "Anytime money-back guarantee", "Free automatic backups"],
    score: 8.5,
    badge: "Good",
  },
  {
    rank: 10,
    name: "Namecheap",    
    reviews: "31,200",
    tagline: "Affordable hosting without compromising quality",
    features: ["Free domain for 1 year", "Free WhoisGuard", "Easy cPanel access", "99.9% uptime guarantee"],
    score: 8.3,
    badge: "Good",
  },
]

const Buttons = () => {
  return (
    <section className="bg-[#0a0f1e] py-12 px-5 md:px-8">
      <h2 className=""></h2>

      <div className="grid grid-cols-1 max-w-7xl mx-auto gap-5">
        {hosts.map((host, index) => (

          <div key={index} className="p-5 bg-white/5 border border-cyan-500 rounded grid grid-cols-1 lg:grid-cols-3
          hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-shadow duration-300">
            <img src={host.imgSrc} alt="" className="h-20"/>

            <div className="text-white/60">
              <div className="font-bold text-xl">{host.name}</div>
              <div className="my-2">{host.reviews} by Trustpilot</div>
              <div className="">{host.tagline}</div>

              <ul className="space-y-2">
                {host.features.map((feat, index) => (
                  <li key={index} className="">✔ {feat}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-end text-white/60 space-y-2">
              <span className="text-2xl">{host.score}⭐⭐⭐⭐</span>
              <button className="w-40 border border-blue-500 p-3 rounded">Show more ➡ </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Buttons