// WhyChooseUs.jsx
// Tailwind CSS — make sure your project has Tailwind v3+ configured

const CheckIcon = () => (
  <svg className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
    <path d="M7.5 12l3 3 5.5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
    <path d="M24 4L8 11v12c0 10.5 6.8 20.3 16 23 9.2-2.7 16-12.5 16-23V11L24 4z" fill="url(#shieldGrad)" />
    <path d="M17 24l5 5 9-9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="shieldGrad" x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ec4899" />
        <stop offset="1" stopColor="#be185d" />
      </linearGradient>
    </defs>
  </svg>
);

const UserStarIcon = () => (
  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="9" cy="7" r="3" />
    <path d="M3 21v-2a5 5 0 0 1 5-5h3" />
    <path d="M17 14l1 2 2.5.4-1.8 1.7.4 2.5L17 19.5 14.9 20.6l.4-2.5-1.8-1.7 2.5-.4z" fill="currentColor" strokeWidth="0" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 2L4 6v6c0 5.25 3.4 10.15 8 11.5 4.6-1.35 8-6.25 8-11.5V6L12 2z" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3 17l4-6 4 3 4-5 4 4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 21h18" strokeLinecap="round" />
    <path d="M19 8l2 2-2 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Stat icons
const PersonIcon = () => (
  <svg className="w-8 h-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="7" r="4" />
    <path d="M4 21v-2a7 7 0 0 1 14 0v2" strokeLinecap="round" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-8 h-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="2" y="9" width="20" height="12" rx="2" />
    <path d="M16 9V7a4 4 0 0 0-8 0v2" strokeLinecap="round" />
    <path d="M2 13h20" />
  </svg>
);

const GroupIcon = () => (
  <svg className="w-8 h-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="9" cy="7" r="3" />
    <circle cx="17" cy="8" r="2.5" />
    <path d="M2 21v-1.5A5.5 5.5 0 0 1 9 14h2a5.5 5.5 0 0 1 5.5 5.5V21" strokeLinecap="round" />
    <path d="M19 14c2 .5 3.5 2.2 3.5 4.5V21" strokeLinecap="round" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-8 h-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <path d="M19 5l2-2m0 0l-2 2M19 3v4m0-4h-4" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const features = [
  { id: "01", Icon: UserStarIcon, title: "Expertise", desc: "Industry knowledge backed by experienced professionals." },
  { id: "02", Icon: ShieldCheckIcon, title: "Reliability", desc: "Consistent delivery, transparent communication, and dedicated support." },
  { id: "03", Icon: ChartIcon, title: "Scalability", desc: "Solutions designed to grow alongside your business." },
];

const stats = [
  { Icon: PersonIcon,    value: "12+",  label: "Years Experience" },
  { Icon: BriefcaseIcon, value: "150+", label: "Projects Delivered" },
  { Icon: GroupIcon,     value: "80%",  label: "Repeat Clients" },
  { Icon: TargetIcon,    value: "100%", label: "Client Focus" },
];

const checkItems = [
  "12+ Years of Industry Experience",
  "Result-Driven Strategies",
  "Dedicated & Skilled Team",
  "Transparent Communication",
  "Affordable & Scalable Solutions",
  "24/7 Customer Support",
];

export default function WhyChooseUs() {
  return ( 
    <section className="relative overflow-hidden bg-[#0d0b1e] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
          .roboto { font-family: 'Roboto', sans-serif; font-weight: 700; }
          .open-sans { font-family: 'Open Sans', sans-serif; font-weight: 400; }
      `}</style>

      <img
        src="/images/hero-2.png"
        alt=""
        className="absolute inset-0 md:h-[103vh] h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#060730]/70" />

      <div className="relative mx-auto max-w-8xl py-8 px-4 md:px-12">
        {/* ── Top section: left content + right trust card ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* LEFT */}
          <div className="">
            {/* Eyebrow */}
            <div className="open-sans inline-flex items-center gap-2 bg-pink-400/10 border border-pink-400/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="text-pink-400 text-xs font-semibold tracking-widest uppercase">
                Why Choose OOS Solution?
              </span>
            </div>

            {/* Headline */}
            <h2 className="roboto text-4xl sm:text-4xl font-extrabold leading-tight tracking-tight my-5">
              Your Growth is{" "} 
              <span className="text-pink-500">Our Mission</span>
            </h2>

            {/* Body */}
            <p className="open-sans text-slate-300 text-base leading-relaxed max-w-xl">
              We don't just deliver services—we build long-term partnerships. We combine
              technology, creativity, expertise, and a customer-first approach to help
              businesses grow with confidence.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 my-5">
              {checkItems.map((item) => (
                <li key={item} className="open-sans flex items-start gap-3 text-slate-200">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="open-sans flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-lg bg-pink-600 hover:bg-pink-500 transition-colors px-6 py-3 font-bold text-white shadow-lg shadow-pink-900/40">
                Learn More
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 8h12M9 3l5 5-5 5" />
                </svg>
              </button>

              <button className="inline-flex items-center gap-2 rounded-lg border border-white/25 hover:border-white/50 hover:bg-white/5 transition-colors px-6 py-3 font-bold text-white">
                Let's Talk
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 13L13 3M6 3h7v7" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT — trust card + feature cards */}
          <div className="space-y-6">
            {/* Trust card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 max-w-xl mx-auto gap-5">
              <div className="flex flex-col items-center gap-5">
                {/* Shield icon ring */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-pink-600/20 border border-pink-500/30 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-pink-600/30 flex items-center justify-center">
                      <ShieldIcon />
                    </div>
                  </div>

                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full blur-md bg-pink-500/20 -z-10" />
                </div>

                <div className="text-center">
                  <p className="open-sans text-pink-400 font-semibold text-sm tracking-wider uppercase">
                    Trusted by Businesses
                  </p>

                  <p className="roboto text-white text-2xl font-extrabold tracking-tight leading-none my-2">
                    12+ Years
                  </p>

                  <p className="open-sans text-slate-400">Industry Experience</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 my-2" />

              {/* Tags */}
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-2 text-slate-300">
                {["Technology", "E-Commerce", "Digital Growth"].map((tag) => (
                  <span key={tag} className="flex justify-center items-center gap-2 open-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 flex-shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature cards row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map(({ id, Icon, title, desc }) => (
                <div
                  key={id}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors p-5 flex flex-col gap-4"
                >
                  {/* Number badge */}
                  <span className="absolute top-4 right-4 font-bold text-pink-400/70 tracking-wider">
                    {id}
                  </span>

                  {/* Icon circle */}
                  <div className="w-12 h-12 rounded-full bg-pink-600/25 border border-pink-500/30 flex items-center justify-center group-hover:bg-pink-600/35 transition-colors">
                    <Icon />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="roboto text-white font-bold text-base text-xl">{title}</h3>

                    {/* Pink underline accent */}
                    <div className="w-6 h-0.5 rounded-full bg-pink-500 my-2" />
                    <p className="open-sans text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom stats bar ── */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6 gap-4">
            {stats.map(({ Icon, value, label }) => (

              <div key={label} className="flex items-center gap-2">
                <div className=""><Icon /></div>

                <div>
                  <p className="text-pink-400 text-2xl font-extrabold leading-none tracking-tight roboto">
                    {value}
                  </p>

                  <p className="text-slate-400 mt-0.5 whitespace-nowrap open-sans">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
