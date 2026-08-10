import Header from "./Header";
import Footer from "./Footer";

export default function ContactPage() {

  const contacts = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      ),
      label: "Phone", value: "+91 8551862600", sub: "Available Mon – Sat, 10 am – 6 pm", href: "tel:+918551862600",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
        </svg>
      ),
      label: "Email", value: "sonwanehitesh85@gmail.com", 
      sub: "Replies within 24 hours", href: "mailto:sonwanehitesh85@gmail.com",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
      label: "Location",
      value: "Shri Ram Nagar, Gondia, Maharashtra",
      href: null,
    },
  ]

  return (
    <>
    <Header/>
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0b1a", fontFamily: "'Raleway', sans-serif" }}>
      
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Raleway:wght@300;400;500;600&display=swap" rel="stylesheet"/>

      {/* Star field */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {Array.from({ length: 70 }).map((_, i) => (

          <div key={i} className="absolute rounded-full bg-white"
            style={{ width: `${(i * 0.037 % 1.8) + 0.4}px`, height: `${(i * 0.037 % 1.8) + 0.4}px`,
            top: `${(i * 1.37)  % 100}%`, left: `${(i * 1.97)  % 100}%`, opacity: `${((i * 0.013) % 0.45) + 0.08}`, }}
          />
        ))}
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="w-full max-w-2xl">

          {/* Eyebrow */}
          <p
            className="text-center text-[11px] font-medium tracking-[0.25em] uppercase mb-4"
            style={{ color: "#a07bd0" }}
          >
            Reach out
          </p>

          {/* Ornament */}
          <div className="flex items-center gap-3 justify-center mb-8">
            <div className="h-px w-12" style={{ background: "#3a2e6e" }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: "#6b4fa0" }} />
            <div className="h-px w-12" style={{ background: "#3a2e6e" }} />
          </div>

          {/* Headline */}
          <h1 className="text-center text-3xl sm:text-4xl leading-snug mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#ede8ff", fontWeight: 600 }}>
            Get{" "}
            <span style={{ color: "#c49bff" }}>In Touch</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-center text-[15px] font-light leading-loose mb-14 max-w-lg mx-auto" style={{ color: "#b3a8d4" }}>
            Have a project in mind? Let's talk and grow your business together.
          </p>

          {/* Contact cards */}
          <div className="flex flex-col gap-4 mb-14">
            {contacts.map(({ icon, label, value, sub, href }) => {
              const Card = (
                <div className="flex items-start gap-5 rounded-2xl px-6 py-5 border" style={{ background: "#12102a", borderColor: "#2a2050" }}>
                  <div className="mt-0.5 flex-shrink-0 p-2.5 rounded-xl" style={{ background: "#1e1840", color: "#c49bff" }}>
                    {icon}
                  </div>
                  
                  <div>
                    <p className="text-[11px] font-medium tracking-widest uppercase mb-1" style={{ color: "#6b4fa0" }}>
                      {label}
                    </p>

                    <p className="text-[16px] font-medium mb-0.5" style={{ color: "#ede8ff" }}>
                      {value}
                    </p>

                    <p className="text-[13px] font-light" style={{ color: "#7a6ea0" }}>
                      {sub}
                    </p>
                  </div>
                </div>
              );

              return href ? (
                <a key={label} href={href} className="block no-underline hover:scale-[1.015] transition-transform duration-200">
                  {Card}
                </a>
                ) : (
                <div key={label}>{Card}</div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
